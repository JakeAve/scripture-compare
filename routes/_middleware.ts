import { FreshContext } from "$fresh/server.ts";
import { ReqLog } from "../lib/ReqLog.ts";

interface State {
  data: string;
}

export async function handler(
  req: Request,
  ctx: FreshContext<State>,
) {
  let log: undefined | ReqLog;
  const start = new Date();
  if (ctx.destination === "route") {
    log = new ReqLog().start({
      created_at: start,
      url: new URL(req.url),
      ip: "",
    });
  }

  const resp = await ctx.next();

  if (ctx.destination === "static") {
    resp.headers.set("Cache-Control", "max-age=31536000");
  }

  if (log) log.end({ status: resp?.status });
  return resp;
}
