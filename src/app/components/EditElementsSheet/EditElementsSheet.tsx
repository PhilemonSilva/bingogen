import React, { useState } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { BingoElement } from "../../types";
import { Updater } from "use-immer";
import {
    SheetContent,
} from '../ui/sheet';
import { normalizeString } from "../../utils";

import EditElementsSheetHeader from "./EditElementsSheetHeader";
import ElementListItem from "./ElementListItem";

const EditElementsSheet: React.FC<{
    elementPool: Array<BingoElement>,
    setElementPool: Updater<Array<BingoElement>>
    applyChanges: () => void,
}> = ({ elementPool, setElementPool }) => {

    const [animationParent] = useAutoAnimate();

    const [searchQuery, setSearchQuery] = useState("");
    
    const isMatchWithSearch = (element: BingoElement) => {
        return normalizeString(element.text).toUpperCase().includes(normalizeString(searchQuery).toUpperCase())
    }

    return <SheetContent
        className="
        w-[60rem] sm:max-w-[60rem] 
        border border-indigo-950
        bg-indigo-500 
        overflow-y-scroll
    "
    >
        <EditElementsSheetHeader 
            searchQuery={searchQuery} 
            setSearchQuery={setSearchQuery}
        />
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
    </SheetContent>
}

export default EditElementsSheet;