import { useSignal } from "@preact/signals";
import {} from "preact";

function titleCase(string:string){
    return string[0].toUpperCase() + string.slice(1).toLowerCase();
  }

async function recordNoise(noiseType: string){
    const result = await fetch('./noise', {
        method: "POST",
        body: JSON.stringify({
            noiseType,
            time: new Date().toISOString()
        })
    })
    console.log(result.ok)
}
export default function MyIsland(props: {noiseType: string}) {
  return (
    <div onClick={() => recordNoise(props.noiseType)} className={`btn-noise ${props.noiseType}`}>{titleCase(props.noiseType)} noise</div>
  );
}