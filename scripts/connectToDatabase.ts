import { load } from "https://deno.land/std@0.204.0/dotenv/mod.ts";

export default async function () {
  const env = await load();

  Deno.env.set("DENO_KV_ACCESS_TOKEN", env["DENO_KV_ACCESS_TOKEN"]);

  const db = await Deno.openKv(
    "https://api.deno.com/databases/5c125d4b-6724-48ee-8cce-1cc373e83269/connect",
  );
  return db;
}
