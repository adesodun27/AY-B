import { useState } from "react";
import Envelope from "./components/Envelope";
import Hero from "./components/Hero";
import Memories from "./components/Memories";
import Prayer from "./components/Prayer";
import Gallery from "./components/Gallery";
import Petals from "./components/Petals";
import MusicToggle from "./components/MusicToggle";
import Notes from "./components/Notes";

export default function App() {
  const [phase, setPhase] = useState("envelope");

  return (
    <main className="relative min-h-[100dvh] w-full bg-gradient-to-b from-wine to-wine2 font-body text-cream">
      <Petals count={12} />

      {phase === "envelope" && <Envelope onOpen={() => setPhase("flow")} />}

      {phase === "flow" && (
        <>
          <MusicToggle />
          <div className="relative h-[100dvh] snap-y snap-mandatory overflow-y-scroll">
            <Hero />
            <Memories />
            <Notes />
            <Prayer onFinish={() => setPhase("gallery")} />
          </div>
        </>
      )}

      {phase === "gallery" && (
        <>
          <MusicToggle />
          <Gallery onReplay={() => setPhase("envelope")} />
        </>
      )}
    </main>
  );
}
