"use client";
import { genericLoremIpsumPool } from "./genericElementPools";
import { Suspense, useState } from "react";
import { useImmer } from "use-immer";
import { BingoElement } from "./types";
import { Button } from "./components/ui/button";

import BingoGrid from "./components/BingoGrid";
import EditElementsButton from "./components/EditElementsButton";

export default function HomePage() {

  const [elementPool, setElementPool] = useImmer(genericLoremIpsumPool);
  const [elements, setElements] = useImmer(genericLoremIpsumPool?.slice(0, 25))

  const shuffleBingoBoard = () => {
    let clonedElementPool = [...elementPool];
    let shuffledElements = shuffle(clonedElementPool)
    setElements(shuffledElements.slice(0, 25));
  }

  const shuffle = (array: Array<BingoElement>) => {
    let currentIndex = array.length, randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex > 0) {

      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [array[randomIndex]!, array[currentIndex]!];
    }

    return array;
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
        <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
          BingoGen
        </h1>
        <EditElementsButton 
          elementPool={elementPool} 
          setElementPool={setElementPool}
          applyChanges={shuffleBingoBoard}
        />
        <Button
          className="font-extrabold bg-green-400 text-white"
          onClick={shuffleBingoBoard}
        >
          Shuffle
        </Button>
        <BingoGrid elements={elements} setElements={setElements} />
      </div>
    </main>
  );
}
