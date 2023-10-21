import { useSignal } from "@preact/signals";
import Counter from "../islands/Counter.tsx";
import NoiseButton from "../islands/NoiseButton.tsx"
export default function Home() {
  const count = useSignal(3);
  return (<div class="noise-container">
    <NoiseButton noiseType="low"/>
    <NoiseButton noiseType="medium"></NoiseButton>
    <NoiseButton noiseType="high"></NoiseButton>
  </div>
  );
}
