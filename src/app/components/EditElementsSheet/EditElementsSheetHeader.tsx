import React, { Dispatch, SetStateAction } from "react";
import { BingoElement } from "main/app/types";
import { 
    SheetHeader,
    SheetTitle,
    SheetDescription,
} from "../ui/sheet";
import { Label } from "../ui/label";

const EditElementsSheetHeader: React.FC<{
    searchQuery: string,
    setSearchQuery: Dispatch<SetStateAction<string>>
}> = ({
    searchQuery,
    setSearchQuery,
}) => {

    const queryInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value);
    }

    return <SheetHeader>
        <SheetTitle className="text-3xl font-extrabold text-white">
            Edit Elements
        </SheetTitle>
        <SheetDescription className="text-indigo-950 font-extrabold p-3">
            Edit Elements on the bingo card.
        </SheetDescription>
        <div
            className="
                bg-purple-500 
                border border-purple-900 rounded
                max-h-min w-[99%] m-1 p-3
                flex items-center gap-3
                transition-all
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
}

export default EditElementsSheetHeader;