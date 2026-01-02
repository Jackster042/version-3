// @/db/client.ts
import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as schema from "./schema"; // Import your schema here!

export const getDatabase = (env: any) => {
  // 1. Create the raw driver client
  const client = postgres(env.HYPERDRIVE.connectionString);

  // 2. Wrap it in Drizzle (This adds .select, .insert, etc.)
  // Providing the 'schema' allows for the db.query syntax later
  return drizzle(client, { schema });
};
