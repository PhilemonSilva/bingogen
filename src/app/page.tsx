"use client";
const genericLoremIpsumPool: Array<BingoElement> = [
  { isBeingEdited: false, selected: false, text: 'Aenean sit amet urna ac magna aliquam eleifend ut id tellus.', },
  { isBeingEdited: false, selected: false, text: 'Curabitur faucibus tellus et risus venenatis, ut aliquam nisl convallis.', },
  { isBeingEdited: false, selected: false, text: 'Nam ac enim viverra turpis pulvinar rutrum lobortis id lorem.', },
  { isBeingEdited: false, selected: false, text: 'Vivamus dapibus odio nec neque vehicula efficitur.', },
  { isBeingEdited: false, selected: false, text: 'Nam dictum elit at ex tincidunt tincidunt.', },
  { isBeingEdited: false, selected: false, text: 'Curabitur elementum dolor euismod iaculis feugiat.', },
  { isBeingEdited: false, selected: false, text: 'In viverra leo sed tellus laoreet venenatis.', },
  { isBeingEdited: false, selected: false, text: 'Fusce scelerisque mi ac leo tempus, non commodo enim facilisis.', },
  { isBeingEdited: false, selected: false, text: 'Nunc et erat non lorem rutrum commodo quis eu purus.', },
  { isBeingEdited: false, selected: false, text: 'Quisque luctus risus non mi volutpat, id gravida lacus scelerisque.', },
  { isBeingEdited: false, selected: false, text: 'Pellentesque tempus sapien ullamcorper suscipit bibendum.', },
  { isBeingEdited: false, selected: false, text: 'Vivamus finibus mauris eu consequat consequat.', },
  { isBeingEdited: false, selected: false, text: 'Sed non nisl sollicitudin, semper lorem aliquam, bibendum turpis.', },
  { isBeingEdited: false, selected: false, text: 'In tincidunt nulla non turpis volutpat bibendum.', },
  { isBeingEdited: false, selected: false, text: 'Nunc dictum augue vitae quam tincidunt, nec ultrices nisl auctor.', },
  { isBeingEdited: false, selected: false, text: 'Suspendisse porttitor eros ac nisi posuere, vitae rhoncus dui ultrices.', },
  { isBeingEdited: false, selected: false, text: 'Donec interdum risus vel nunc eleifend, sit amet egestas nibh vehicula.', },
  { isBeingEdited: false, selected: false, text: 'Nunc ac lorem ac mi dictum scelerisque.', },
  { isBeingEdited: false, selected: false, text: 'Pellentesque pulvinar augue tristique, tempor nibh et, vestibulum urna.', },
  { isBeingEdited: false, selected: false, text: 'Sed commodo magna quis odio tempor dignissim id mattis odio.', },
  { isBeingEdited: false, selected: false, text: 'Integer non elit sollicitudin, vehicula odio ac, venenatis est.', },
  { isBeingEdited: false, selected: false, text: 'Sed eleifend mauris nec pretium vehicula.', },
  { isBeingEdited: false, selected: false, text: 'Nunc pharetra tellus eget diam egestas placerat.', },
  { isBeingEdited: false, selected: false, text: 'Proin consequat erat eget ipsum ullamcorper suscipit.', },
  { isBeingEdited: false, selected: false, text: 'Nullam non quam sed turpis tempor pharetra.', },
  { isBeingEdited: false, selected: false, text: 'In dapibus velit sit amet felis molestie ultricies.', },
  { isBeingEdited: false, selected: false, text: 'Duis vel erat in lorem ultrices tristique.', },
  { isBeingEdited: false, selected: false, text: 'Proin lobortis dolor vitae tellus congue, ac sagittis leo dignissim.', },
  { isBeingEdited: false, selected: false, text: 'Phasellus feugiat mauris sit amet gravida vehicula.', },
  { isBeingEdited: false, selected: false, text: 'Proin rhoncus lorem ac mi aliquet tincidunt.', },
  { isBeingEdited: false, selected: false, text: 'Nullam et elit condimentum, ornare velit vitae, condimentum neque.', },
  { isBeingEdited: false, selected: false, text: 'Proin dapibus dolor at lacinia condimentum.', },
  { isBeingEdited: false, selected: false, text: 'Vestibulum pharetra justo ut vestibulum ultricies.', },
  { isBeingEdited: false, selected: false, text: 'Praesent eget quam et libero facilisis vestibulum.', },
  { isBeingEdited: false, selected: false, text: 'Mauris varius dui in metus aliquet, tempor gravida nisi dapibus.', },
  { isBeingEdited: false, selected: false, text: 'Suspendisse blandit ante blandit lobortis maximus.', },
  { isBeingEdited: false, selected: false, text: 'Sed non nibh at nisi convallis sodales et a orci.', },
  { isBeingEdited: false, selected: false, text: 'Morbi elementum leo a odio rhoncus convallis.', },
  { isBeingEdited: false, selected: false, text: 'Integer dignissim dolor varius facilisis consequat.', },
  { isBeingEdited: false, selected: false, text: 'Vivamus mattis erat in vulputate fringilla.', },
  { isBeingEdited: false, selected: false, text: 'Aenean quis magna sit amet elit sodales venenatis ut viverra risus.', },
  { isBeingEdited: false, selected: false, text: 'Nunc nec libero pellentesque magna condimentum sodales id et mauris.', },
  { isBeingEdited: false, selected: false, text: 'Morbi sit amet metus in lorem pellentesque mattis at eget sapien.', },
  { isBeingEdited: false, selected: false, text: 'Aenean eu dolor pellentesque, fringilla dui a, ultricies nisl.', },
  { isBeingEdited: false, selected: false, text: 'Cras finibus ante et lacinia scelerisque.', },
  { isBeingEdited: false, selected: false, text: 'Praesent ac nisl lacinia, convallis metus in, dignissim odio.', },
  { isBeingEdited: false, selected: false, text: 'Nunc faucibus nulla in pulvinar venenatis.', },
  { isBeingEdited: false, selected: false, text: 'Morbi in nibh a sapien placerat cursus.', },
  { isBeingEdited: false, selected: false, text: 'Cras sed odio pretium, lobortis quam non, dapibus velit.', },
  { isBeingEdited: false, selected: false, text: 'Integer sed quam pretium, luctus ipsum tempor, commodo orci.', },
  { isBeingEdited: false, selected: false, text: 'Quisque molestie arcu at orci congue rhoncus.', },
  { isBeingEdited: false, selected: false, text: 'Sed lacinia mi eu neque pulvinar, nec porta nunc fringilla.', },
  { isBeingEdited: false, selected: false, text: 'Etiam tempor ipsum vel molestie luctus.', },
  { isBeingEdited: false, selected: false, text: 'Etiam pretium enim ut metus aliquam, in vehicula nisl aliquam.', },
  { isBeingEdited: false, selected: false, text: 'Cras ac tortor porttitor, varius sem at, tempor ante.', },
  { isBeingEdited: false, selected: false, text: 'Donec eu turpis fermentum, tempor ligula vel, pellentesque magna.', },
  { isBeingEdited: false, selected: false, text: 'Morbi ac mauris id turpis varius sollicitudin laoreet eu felis.', },
  { isBeingEdited: false, selected: false, text: 'Suspendisse dapibus felis ac tellus molestie, sed iaculis nisl commodo.', },
  { isBeingEdited: false, selected: false, text: 'Aenean vel ligula ornare purus dapibus accumsan.', },
  { isBeingEdited: false, selected: false, text: 'Duis dapibus dolor sit amet feugiat ullamcorper.', },
  { isBeingEdited: false, selected: false, text: 'In hendrerit orci in est mattis porttitor.', },
  { isBeingEdited: false, selected: false, text: 'Aenean malesuada erat a elit tempus, sit amet fermentum purus sodales.', },
  { isBeingEdited: false, selected: false, text: 'Duis at massa sed elit fermentum eleifend a quis arcu.', },
  { isBeingEdited: false, selected: false, text: 'Mauris ac sapien pellentesque lacus ultrices placerat eget quis ante.', },
  { isBeingEdited: false, selected: false, text: 'Cras at risus finibus, fringilla est eu, interdum mi.', },
  { isBeingEdited: false, selected: false, text: 'Aenean at sem tincidunt, pellentesque orci ac, sollicitudin magna.', },
  { isBeingEdited: false, selected: false, text: 'Vestibulum posuere ligula id enim ultrices, in auctor nisi varius.', },
  { isBeingEdited: false, selected: false, text: 'Praesent id libero non ligula sagittis feugiat.', },
  { isBeingEdited: false, selected: false, text: 'Praesent efficitur ipsum eu odio porttitor, ut consectetur ante mattis.', },
  { isBeingEdited: false, selected: false, text: 'Vivamus facilisis dolor in ligula blandit, in convallis lorem rhoncus.', },
  { isBeingEdited: false, selected: false, text: 'Ut at metus ultricies, ornare elit vitae, ultricies libero.', },
  { isBeingEdited: false, selected: false, text: 'Vivamus fringilla erat quis tellus ornare, vel scelerisque mauris dictum.', },
  { isBeingEdited: false, selected: false, text: 'Aliquam sed risus scelerisque mi interdum dictum ac ut sapien.', },
  { isBeingEdited: false, selected: false, text: 'Cras sed nunc quis urna tristique faucibus in et arcu.', },
  { isBeingEdited: false, selected: false, text: 'Sed in lectus eu turpis commodo auctor.', },
  { isBeingEdited: false, selected: false, text: 'Suspendisse semper ante et purus venenatis pulvinar.', },
  { isBeingEdited: false, selected: false, text: 'Donec congue lectus eget tortor dapibus, ac semper tortor efficitur.', },
  { isBeingEdited: false, selected: false, text: 'Integer laoreet felis eu pretium dapibus.', },
];
//import { genericLoremIpsumPool } from "./genericElementPools";
import { Suspense, useState } from "react";
import { useImmer } from "use-immer";
import { BingoElement } from "./types";
import { Button } from "./components/ui/button";

import BingoGrid from "./components/BingoGrid";
import EditElementsButton from "./components/EditElementsButton";

export default function HomePage() {

  console.log("genericLoremIpsumPool", genericLoremIpsumPool);
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
