import Database from "better-sqlite3";
import { drizzle } from "drizzle-orm/better-sqlite3";
import * as schema from "./schema";
import path from "path";

const DB_PATH = process.env.DATABASE_URL || path.join(process.cwd(), "yevfumes.db");

// Global singleton to survive Next.js HMR in dev
const globalForDb = globalThis as unknown as {
  _yevDb: ReturnType<typeof drizzle<typeof schema>> | undefined;
};

if (!globalForDb._yevDb) {
  const sqlite = new Database(DB_PATH);
  sqlite.pragma("journal_mode = WAL");
  sqlite.pragma("foreign_keys = ON");
  globalForDb._yevDb = drizzle(sqlite, { schema });
}

export const db = globalForDb._yevDb!;
export { schema };
