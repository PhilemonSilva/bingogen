import { useAutoAnimate } from '@formkit/auto-animate/react'
import { BingoElement } from '../types';
import { Updater } from 'use-immer';

const BingoGrid: React.FC<{
    elements: Array<BingoElement>,
    setElements: Updater<Array<BingoElement>>,
}> = ({ elements, setElements }) => {

    const [animationParent] = useAutoAnimate();

    return <div ref={animationParent} className="grid grid-cols-5 w-2/5 h-2/5 aspect-square rounded gap-1" >
        {
            elements?.map((item, index) => (
                <button
                    key={item.text}
                    title={item.text}
                    className={`
                        text-indigo-900 text-pretty
                        bg-gray-100 border border-gray-800 rounded
                        grid aspect-square place-content-center p-1
                        transition-all
                        hover:bg-indigo-100 hover:scale-105
                        active:bg-indigo-200 active:scale-95
                        ${item.selected && 'bg-yellow-200 font-bold '}
                    `}
                    onClick={() => {
                        setElements((elementArrayState) => {
                            elementArrayState[index]!.selected = !elementArrayState[index]!.selected;
                        })
                    }}
                >
                    <p className='line-clamp-4'>{item.text}</p>
                </button>
            ))
        }
    </div>;
}

export default BingoGrid;