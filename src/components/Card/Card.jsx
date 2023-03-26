import { useEffect, useState } from "react"
import Image from "next/image"



const Card = ({ product, addToCard, removeFromCard }) => {
    const [count, setCount] = useState(1)
    const [title, setTitle] = useState(product.title)
    const [inputTitle, setInputTitle] = useState('')
    const [inputFontSize, setInputFontSize] = useState(18)

    const handleTitleChange = (event) => {
        if (event.target.value !== '') {
            setInputTitle(event.target.value)
            setTitle(event.target.value)
        } else {
            setInputTitle('')
            setTitle(product.title)
        }
    }
    const handleFontSizeChange = (event) => {
        setInputFontSize(event.target.value)
    }
    console.log(inputFontSize)

    useEffect(() => setCount(0), [])

    const handleCountChange = (event) => {
        /* if (typeof event.target.value !== 'number') {
            alert('Only numbers')
            return
        } */
        /* setCount(event.target.value)
        console.log('VER>>', product.id, count)
        addToCard(product.id, count) */
    }

    const handleIncrement = () => {
        const nextCount = count + 1

        if (nextCount < 100) {
            addToCard(product.id, 1)
            setCount(nextCount)
        }
    }
    const handleDecrement = () => {
        const nextCount = count - 1
        if (nextCount >= 0) {
            setCount(nextCount)
            removeFromCard(product.id, 1)
        }
    }

    return (
        <article className="flex flex-col justify-between gap-4 bg-white border-2 border-gray-700 py-6 px-4 shadow-lg">
            <div
                className="relative w-full aspect-video"
            >
                <Image
                    fill
                    src={product.image}
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                    alt='Product image'
                    priority
                />
            </div >
            <div className="flex flex-col justify-between h-[7rem]">
                <h2 style={{ fontSize: `${inputFontSize}px` }} className={`font-extrabold leading-none line-clamp-2`}>{title}</h2>
                <input type="text" className="block mt-1 border w-full text-xs py-0.5" value={inputTitle} onChange={handleTitleChange} />
                <input type="range" value={inputFontSize} onChange={handleFontSizeChange} className="w-full h-2 bg-gray-100 rounded-full appearance-none cursor-pointer" />
            </div>
            <div className="flex gap-4 items-center">
                <p className="text-lg font-extrabold">${product.price.toFixed(2)}</p>
                <div className="flex justify-between items-center bg-gray-100 rounded-2xl px-2">
                    <button type="button" aria-label="Add To Cart" onClick={handleIncrement}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 stroke-gray-600">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
                        </svg>
                        <span className="sr-only">Add To Cart</span>
                    </button>
                    <input type="text" className="w-6 text-center bg-gray-100" onChange={handleCountChange} value={count} />
                    <button type="button" aria-label="Remove From Cart" onClick={handleDecrement}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 stroke-gray-600">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M18 12H6" />
                        </svg>
                        <span className="sr-only">Remove From Cart</span>
                    </button>

                </div>
            </div>
            <p className="text-base leading-snug text-gray-500">{product.desc}</p>
            <a href="" className="w-fit mx-auto px-4 py-2 bg-primary border-2 border-gray-800 text-lg transition-all hover:bg-violet-300">Add To Card</a>
            <a href="" className="w-fit mx-auto text-lg border-b-2 border-gray-800 leading-none transition-all hover:font-semibold">Learn More</a>
        </article>
    )
}

export { Card }