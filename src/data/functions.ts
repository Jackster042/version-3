import { getDatabase } from "@/db/client";
import { users } from "@/db/schema";
import { createServerFn } from "@tanstack/react-start";
import { getEvent } from "vinxi/http";

export const getUsers = createServerFn({ method: "GET" }).handler(async () => {
  const event = getEvent();
  const env = event.context.cloudflare.env;

  const db = getDatabase(env);
  const allUsers = await db.select().from(users);

  return allUsers;
});
