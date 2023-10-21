import { useSignal } from "@preact/signals";

function titleCase(string:string){
    return string[0].toUpperCase() + string.slice(1).toLowerCase();
  }


export default function MyIsland(props: {noiseType: string}) {
    const status = useSignal("")
    async function recordNoise(noiseType: string){
        const result = await fetch('./noise', {
            method: "POST",
            body: JSON.stringify({
                noiseType,
                time: new Date().toISOString()
            })
        })
        if (result.ok){
            status.value = "Sent!"
        }
        else{
            status.value = "Error!"
        }
        setTimeout(()=>{
            status.value = ""
        }, 1000);
    }
  return (
    <div onClick={() => recordNoise(props.noiseType)} className={`btn-noise ${props.noiseType}`}>
        <p>{titleCase(props.noiseType)} noise</p>
        <p>{status}</p>
    </div>
  );
}