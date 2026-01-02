import "dotenv/config";
import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import { users } from "./schema"; // Adjust path as needed

const sql = neon(process.env.DATABASE_URL!);
const db = drizzle(sql);

async function seed() {
  console.log("Seeding started...");

  // Creating an array of 10 users
  const newUsers = Array.from({ length: 10 }, (_, i) => ({
    email: `edge-user-${i + 1}@example.com`,
  }));

  try {
    await db.insert(users).values(newUsers);
    console.log("Seeding successful: 10 users added.");
  } catch (error) {
    console.error("Seeding failed:", error);
  }
}

seed();
