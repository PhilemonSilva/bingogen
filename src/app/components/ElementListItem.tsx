import { Updater } from "use-immer";
import { BingoElement } from "../types";
import { Button } from "./ui/button"
import { useState } from "react";
import { Pencil, X, CheckCircle } from 'lucide-react';

const ElementListItem: React.FC<{
    element: BingoElement,
    setElement: (updatedElement: BingoElement) => void,
    deleteElement: () => void,
}> = ({ element, setElement, deleteElement }) => {

    const [elementText, setElementText] = useState(element.text);

    const onTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setElementText(e.target.value);
    }

    const comfirmChanges = () => {
        setElement({
            ...element,
            isBeingEdited: !element.isBeingEdited,
            text: elementText,
        });
    }

    let elementTextComponent = (
        <p className="text-indigo-900 p-1">
            {element.text}
        </p>
    );

    let editIcon = (
        <Pencil
            className="
                stroke-indigo-400
                transition-all
                hover:stroke-indigo-600 hover:scale-105
            "
            size={15}
        />
    )

    if (element.isBeingEdited) {
        elementTextComponent = (
            <input
                className="rounded border border-gray-800 p-1"
                value={elementText}
                onChange={onTextChange}
                onBlur={comfirmChanges}
            />
        )
        
        editIcon = (
            <CheckCircle
            className="
                stroke-green-500
                transition-all
                hover:stroke-green-600 hover:scale-105
            "
            size={15}
        />
        )
    }

    return <li
        className={`
            p-1 m-1
            grid grid-cols-[20fr_1fr_1fr] gap-1
            border border-gray-800 rounded
            ${element.isBeingEdited ? "bg-indigo-200" : "bg-gray-100"} 
            transition-all
            hover:bg-indigo-300 hover:scale-105
        `}
    >
        {elementTextComponent}
        <button className="grid place-content-center align" onClick={comfirmChanges} >
            {editIcon}
        </button>
        <button className="grid place-content-center align" onClick={deleteElement}>
            <X
                className="
                    stroke-red-500
                    transition-all
                    hover:stroke-red-400 hover:scale-105
                "
                size={15}
            />
        </button>
    </li>
}

export default ElementListItem;