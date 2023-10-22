import getDb from "./connectToDatabase.ts"
import { NoiseData } from "./model.ts"
const db = await getDb()

const entries = db.list({prefix: ['noises']})

const dataEntries = []
for await (const entry of entries){
    dataEntries.push(entry.value as NoiseData)
}

const info = dataEntries.map((entry)=>{
    return `Registered ${entry.noiseType} noise at ${new Date(entry.time)}`
}).join('\n')

Deno.writeTextFile('output.txt', info)