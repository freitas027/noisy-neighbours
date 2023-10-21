import { Handlers } from "$fresh/server.ts";
const kv = await Deno.openKv();
type Noise = {
    noiseType: string;
    time: string;
}
export const handler: Handlers<Noise | null> = {
    async POST(req, _ctx) {
      const noise = (await req.json()) as Noise;
      
      const ok = await kv.set(["noises", crypto.randomUUID()], noise)
      if (!ok) throw new Error("Something went wrong.");
      return new Response(JSON.stringify(noise));
    },
  };