"use client";

import { Suspense, useState } from "react";
import { useImmer } from "use-immer";
import { BingoElement } from "./types";
import BingoGrid from "./components/bingoGrid";

const baseElements: Array<BingoElement> = [
  { selected: false, text: 'Aenean sit amet urna ac magna aliquam eleifend ut id tellus.', },
  { selected: false, text: 'Curabitur faucibus tellus et risus venenatis, ut aliquam nisl convallis.', },
  { selected: false, text: 'Nam ac enim viverra turpis pulvinar rutrum lobortis id lorem.', },
  { selected: false, text: 'Vivamus dapibus odio nec neque vehicula efficitur.', },
  { selected: false, text: 'Nam dictum elit at ex tincidunt tincidunt.', },
  { selected: false, text: 'Curabitur elementum dolor euismod iaculis feugiat.', },
  { selected: false, text: 'In viverra leo sed tellus laoreet venenatis.', },
  { selected: false, text: 'Fusce scelerisque mi ac leo tempus, non commodo enim facilisis.', },
  { selected: false, text: 'Nunc et erat non lorem rutrum commodo quis eu purus.', },
  { selected: false, text: 'Quisque luctus risus non mi volutpat, id gravida lacus scelerisque.', },
  { selected: false, text: 'Pellentesque tempus sapien ullamcorper suscipit bibendum.', },
  { selected: false, text: 'Vivamus finibus mauris eu consequat consequat.', },
  { selected: false, text: 'Sed non nisl sollicitudin, semper lorem aliquam, bibendum turpis.', },
  { selected: false, text: 'In tincidunt nulla non turpis volutpat bibendum.', },
  { selected: false, text: 'Nunc dictum augue vitae quam tincidunt, nec ultrices nisl auctor.', },
  { selected: false, text: 'Suspendisse porttitor eros ac nisi posuere, vitae rhoncus dui ultrices.', },
  { selected: false, text: 'Donec interdum risus vel nunc eleifend, sit amet egestas nibh vehicula.', },
  { selected: false, text: 'Nunc ac lorem ac mi dictum scelerisque.', },
  { selected: false, text: 'Pellentesque pulvinar augue tristique, tempor nibh et, vestibulum urna.', },
  { selected: false, text: 'Sed commodo magna quis odio tempor dignissim id mattis odio.', },
  { selected: false, text: 'Integer non elit sollicitudin, vehicula odio ac, venenatis est.', },
  { selected: false, text: 'Sed eleifend mauris nec pretium vehicula.', },
  { selected: false, text: 'Nunc pharetra tellus eget diam egestas placerat.', },
  { selected: false, text: 'Proin consequat erat eget ipsum ullamcorper suscipit.', },
  { selected: false, text: 'Nullam non quam sed turpis tempor pharetra.', },
  { selected: false, text: 'In dapibus velit sit amet felis molestie ultricies.', },
  { selected: false, text: 'Duis vel erat in lorem ultrices tristique.', },
  { selected: false, text: 'Proin lobortis dolor vitae tellus congue, ac sagittis leo dignissim.', },
  { selected: false, text: 'Phasellus feugiat mauris sit amet gravida vehicula.', },
  { selected: false, text: 'Proin rhoncus lorem ac mi aliquet tincidunt.', },
  { selected: false, text: 'Nullam et elit condimentum, ornare velit vitae, condimentum neque.', },
  { selected: false, text: 'Proin dapibus dolor at lacinia condimentum.', },
  { selected: false, text: 'Vestibulum pharetra justo ut vestibulum ultricies.', },
  { selected: false, text: 'Praesent eget quam et libero facilisis vestibulum.', },
  { selected: false, text: 'Mauris varius dui in metus aliquet, tempor gravida nisi dapibus.', },
  { selected: false, text: 'Suspendisse blandit ante blandit lobortis maximus.', },
  { selected: false, text: 'Sed non nibh at nisi convallis sodales et a orci.', },
  { selected: false, text: 'Morbi elementum leo a odio rhoncus convallis.', },
  { selected: false, text: 'Integer dignissim dolor varius facilisis consequat.', },
  { selected: false, text: 'Vivamus mattis erat in vulputate fringilla.', },
  { selected: false, text: 'Aenean quis magna sit amet elit sodales venenatis ut viverra risus.', },
  { selected: false, text: 'Nunc nec libero pellentesque magna condimentum sodales id et mauris.', },
  { selected: false, text: 'Morbi sit amet metus in lorem pellentesque mattis at eget sapien.', },
  { selected: false, text: 'Aenean eu dolor pellentesque, fringilla dui a, ultricies nisl.', },
  { selected: false, text: 'Cras finibus ante et lacinia scelerisque.', },
  { selected: false, text: 'Praesent ac nisl lacinia, convallis metus in, dignissim odio.', },
  { selected: false, text: 'Nunc faucibus nulla in pulvinar venenatis.', },
  { selected: false, text: 'Morbi in nibh a sapien placerat cursus.', },
  { selected: false, text: 'Cras sed odio pretium, lobortis quam non, dapibus velit.', },
  { selected: false, text: 'Integer sed quam pretium, luctus ipsum tempor, commodo orci.', },
  { selected: false, text: 'Quisque molestie arcu at orci congue rhoncus.', },
  { selected: false, text: 'Sed lacinia mi eu neque pulvinar, nec porta nunc fringilla.', },
  { selected: false, text: 'Etiam tempor ipsum vel molestie luctus.', },
  { selected: false, text: 'Etiam pretium enim ut metus aliquam, in vehicula nisl aliquam.', },
  { selected: false, text: 'Cras ac tortor porttitor, varius sem at, tempor ante.', },
  { selected: false, text: 'Donec eu turpis fermentum, tempor ligula vel, pellentesque magna.', },
  { selected: false, text: 'Morbi ac mauris id turpis varius sollicitudin laoreet eu felis.', },
  { selected: false, text: 'Suspendisse dapibus felis ac tellus molestie, sed iaculis nisl commodo.', },
  { selected: false, text: 'Aenean vel ligula ornare purus dapibus accumsan.', },
  { selected: false, text: 'Duis dapibus dolor sit amet feugiat ullamcorper.', },
  { selected: false, text: 'In hendrerit orci in est mattis porttitor.', },
  { selected: false, text: 'Aenean malesuada erat a elit tempus, sit amet fermentum purus sodales.', },
  { selected: false, text: 'Duis at massa sed elit fermentum eleifend a quis arcu.', },
  { selected: false, text: 'Mauris ac sapien pellentesque lacus ultrices placerat eget quis ante.', },
  { selected: false, text: 'Cras at risus finibus, fringilla est eu, interdum mi.', },
  { selected: false, text: 'Aenean at sem tincidunt, pellentesque orci ac, sollicitudin magna.', },
  { selected: false, text: 'Vestibulum posuere ligula id enim ultrices, in auctor nisi varius.', },
  { selected: false, text: 'Praesent id libero non ligula sagittis feugiat.', },
  { selected: false, text: 'Praesent efficitur ipsum eu odio porttitor, ut consectetur ante mattis.', },
  { selected: false, text: 'Vivamus facilisis dolor in ligula blandit, in convallis lorem rhoncus.', },
  { selected: false, text: 'Ut at metus ultricies, ornare elit vitae, ultricies libero.', },
  { selected: false, text: 'Vivamus fringilla erat quis tellus ornare, vel scelerisque mauris dictum.', },
  { selected: false, text: 'Aliquam sed risus scelerisque mi interdum dictum ac ut sapien.', },
  { selected: false, text: 'Cras sed nunc quis urna tristique faucibus in et arcu.', },
  { selected: false, text: 'Sed in lectus eu turpis commodo auctor.', },
  { selected: false, text: 'Suspendisse semper ante et purus venenatis pulvinar.', },
  { selected: false, text: 'Donec congue lectus eget tortor dapibus, ac semper tortor efficitur.', },
  { selected: false, text: 'Integer laoreet felis eu pretium dapibus.', },
];

export default function HomePage() {

  const [elements, setElements] = useImmer(baseElements.slice(0, 25))

  const onClickShuffleButton = () => {
    let clonedElements = [...baseElements];
    let shuffledElements = shuffle(clonedElements)
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
        <button
          className="font-extrabold tracking-tight text-white sm:text-[5rem]"
          onClick={onClickShuffleButton}
        >
          Shuffle
        </button>
        <BingoGrid elements={elements} setElements={setElements}/>
      </div>
    </main>
  );
}
