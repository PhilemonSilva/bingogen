import { Updater } from "use-immer";
import { useAutoAnimate } from '@formkit/auto-animate/react'
import { BingoElement } from "../types";
import { Button } from "./ui/button"
import { Label } from "./ui/label";
import { normalizeString } from "../utils";
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from './ui/sheet'

import ElementListItem from "./ElementListItem";
import { useState } from "react";

const EditElementsButton: React.FC<{
    elementPool: Array<BingoElement>,
    setElementPool: Updater<Array<BingoElement>>
    applyChanges: () => void,
}> = ({ elementPool, setElementPool }) => {

    const [animationParent] = useAutoAnimate();

    const [searchQuery, setSearchQuery] = useState("");

    const queryInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value);
    }
    
    const isMatchWithSearch = (element: BingoElement) => {
        return normalizeString(element.text).toUpperCase().includes(normalizeString(searchQuery).toUpperCase())
    }

    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button variant="outline">Open</Button>
            </SheetTrigger>
            <SheetContent
                className="
                    w-[60rem] sm:max-w-[60rem] 
                    border border-indigo-950
                    bg-indigo-500 
                    overflow-y-scroll
                "
            >
                <SheetHeader>
                    <SheetTitle>Edit Elements</SheetTitle>
                    <SheetDescription className="text-gray-100">
                        Edit Elements on the bingo card.
                    </SheetDescription>
                    <div
                        className="
                            bg-purple-500 
                            border border-purple-900 rounded
                            max-h-min w-[99%] m-1 p-3
                            flex items-center gap-3
                            hover:bg-purple-600 hover:scale-105
                        "
                    >
                        <Label htmlFor="filter">Filter:</Label>
                        <input
                            id="filter"
                            className="
                                    rounded border border-gray-800 
                                    p-3 h-9 w-full
                                "
                            placeholder="Search for element..."
                            value={searchQuery}
                            onChange={queryInputHandler}
                        />
                    </div>
                </SheetHeader>
                <ul ref={animationParent}>
                    {
                        elementPool
                            .filter(isMatchWithSearch)
                            .map((element, index) => (
                            <ElementListItem
                                key={element.text}
                                element={element}
                                setElement={(changedElement) => {
                                    setElementPool(elementsState => {
                                        elementsState[index] = changedElement
                                    })
                                }}
                                deleteElement={() => {
                                    setElementPool(elementsState => {
                                        elementsState.splice(index, 1);
                                    })
                                }}
                            />
                        ))
                    }
                </ul>
                <SheetFooter>
                    <SheetClose asChild>
                        <Button type="submit">Save changes</Button>
                    </SheetClose>
                </SheetFooter>
            </SheetContent>
        </Sheet>
    )
}

export default EditElementsButton;