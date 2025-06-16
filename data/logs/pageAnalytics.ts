/// <reference lib="deno.unstable" />

import "$std/dotenv/load.ts";

const kv = await Deno.openKv(Deno.env.get("KV_PATH"));

export interface RequestLog {
  id: string;
  ip: string;
  path: string;
  time?: number;
  created_at: Date;
  status?: number;
}

const EXPIRY = 90 * 24 * 60 * 60 * 1000;

const logsById = (id: string): Deno.KvKey => ["id", id];
const logsByPath = (path: string, id: string): Deno.KvKey => ["path", path, id];
const logsByStatus = (status: number, id: string): Deno.KvKey => [
  "status",
  status,
  id,
];
const logByIp = (ip: string, id: string): Deno.KvKey => ["ip", ip, id];

export async function addLog(log: RequestLog): Promise<RequestLog | null> {
  const { id } = log;
  const idKey = logsById(id);
  const res = await kv
    .atomic()
    .check({ key: idKey, versionstamp: null })
    .set(idKey, log, { expireIn: EXPIRY })
    .set(logsByPath(log.path, id), idKey, { expireIn: EXPIRY })
    .set(logByIp(log.ip, id), idKey, { expireIn: EXPIRY })
    .commit();

  if (!res.ok) {
    console.error(`Failed to create reqLog ${JSON.stringify(log)}`);
    return null;
  }

  return log;
}

export async function finishLog({
  id,
  time,
  status,
}: {
  id: string;
  time: number;
  status: number;
}): Promise<RequestLog | null> {
  const idKey = logsById(id);
  const log = await kv.get<RequestLog>(idKey);

  if (!log.value) {
    console.error(`Could not find log ${id}`);
    return null;
  }

  const updatedLog = { ...log.value, time, status } as RequestLog;

  const res = await kv
    .atomic()
    .set(idKey, updatedLog)
    .set(logsByStatus(status, id), idKey, { expireIn: EXPIRY })
    .commit();

  if (!res.ok) {
    console.error(`Failed to create reqLog ${JSON.stringify(updatedLog)}`);
    return null;
  }

  return updatedLog;
}
