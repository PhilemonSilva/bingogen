import { Updater } from "use-immer";
import { BingoElement } from "../types";
import { Button } from "./ui/button"
import {
    Sheet,
    SheetTrigger,
} from './ui/sheet'
import EditElementsSheet from "./EditElementsSheet/EditElementsSheet";

const EditElementsButton: React.FC<{
    elementPool: Array<BingoElement>,
    setElementPool: Updater<Array<BingoElement>>
    applyChanges: () => void,
}> = ({ elementPool, setElementPool, applyChanges }) => {

    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button variant="outline">Open</Button>
            </SheetTrigger>
            <EditElementsSheet 
                elementPool={elementPool} 
                setElementPool={setElementPool} 
                applyChanges={applyChanges}
            />
        </Sheet>
    )
}

export default EditElementsButton;