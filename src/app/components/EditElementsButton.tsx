import { Updater } from "use-immer";
import { useAutoAnimate } from '@formkit/auto-animate/react'
import { BingoElement } from "../types";
import { Button } from "./ui/button"
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

const EditElementsButton: React.FC<{
    elementPool: Array<BingoElement>,
    setElementPool: Updater<Array<BingoElement>>
    applyChanges: () => void,
}> = ({ elementPool, setElementPool }) => {
    
    const [animationParent] = useAutoAnimate();

    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button variant="outline">Open</Button>
            </SheetTrigger>
            <SheetContent 
                className="
                    w-[38rem] sm:max-w-[38rem] 
                    border border-indigo-950
                    bg-indigo-400 
                    overflow-y-scroll
                "
            >
                <SheetHeader>
                    <SheetTitle>Edit Elements</SheetTitle>
                    <SheetDescription>
                        Edit Elements on the bingo card.
                    </SheetDescription>
                </SheetHeader>
                <ul ref={animationParent}>
                    {
                        elementPool?.map((element, index) => (
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