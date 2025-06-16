import { monotonicUlid } from "$std/ulid/mod.ts";
import {
  addLog,
  finishLog,
  type RequestLog,
} from "../data/logs/pageAnalytics.ts";

export class ReqLog {
  #id: string;
  #addingPromise?: Promise<RequestLog | null>;
  #endingPromise?: Promise<RequestLog | null>;
  #createdAt?: Date;

  constructor() {
    this.#id = monotonicUlid();
  }

  start({
    created_at,
    url,
    ip,
  }: {
    created_at: Date;
    url: URL;
    ip: string;
  }): ReqLog {
    try {
      const id = this.#id;
      this.#createdAt = created_at;
      const log: RequestLog = {
        created_at,
        id,
        path: url.pathname,
        ip,
      };

      this.#addingPromise = addLog(log);

      return this;
    } catch (e) {
      console.error("Error starting log ", this, e);
      return this;
    }
  }

  async end({
    status,
  }: {
    status: number;
  }): Promise<ReqLog> {
    try {
      const time = new Date().getTime() - (this.#createdAt?.getTime() || 0);
      const added = await this.getAddedLog();
      this.#endingPromise = added
        ? finishLog({ id: this.#id, time, status })
        : undefined;

      return this;
    } catch (e) {
      console.error("Error ending log ", this, e);
      return this;
    }
  }

  async getAddedLog(): Promise<RequestLog | null> {
    const added = await this.#addingPromise;
    return added || null;
  }

  async getEndedLog(): Promise<RequestLog | null> {
    const added = await this.getAddedLog();
    if (added) {
      const ended = await this.#endingPromise;
      return ended || null;
    }
    return null;
  }
}
