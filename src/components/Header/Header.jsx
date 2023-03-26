import Link from "next/link"

const Header = ({ cartItems }) => {

    return (
        <header className="bg-primary sticky top-0 z-10 shadow-md">
            <div className="max-w-5xl mx-auto px-4 py-4 flex justify-between">
                <Link href="/" aria-label="Home">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56.19 56.19" className="w-16 h-16">
                        <path fill="#95bf46" d="M42.32 10.58a.54.54 0 0 0-.48-.45l-4.1-.08s-3.26-3.16-3.58-3.49A1.34 1.34 0 0 0 33 6.41l-1.64.51A11.14 11.14 0 0 0 30.54 5c-1.17-2.23-2.87-3.4-4.92-3.4h-.42l-.2-.21A4.28 4.28 0 0 0 21.59 0c-2.65.07-5.3 2-7.44 5.39a21.24 21.24 0 0 0-3 7.74L6 14.78c-1.54.48-1.59.53-1.79 2C4 17.88 0 49 0 49l33.74 5.77 14.58-3.59zM29.63 7.44 27 8.25a14.4 14.4 0 0 0-.8-4.83c2.05.36 3 2.66 3.46 4zm-4.31 1.34-5.64 1.74A13.44 13.44 0 0 1 22.53 5a5.6 5.6 0 0 1 1.91-1.39 12.67 12.67 0 0 1 .88 5.17zm-3.62-7a2.75 2.75 0 0 1 1.6.42 7.49 7.49 0 0 0-2.09 1.58 15.37 15.37 0 0 0-3.5 7.32l-4.62 1.48c.91-4.27 4.48-10.67 8.58-10.8z" />
                        <path fill="#5f8e3e" d="m41.88 10.13-4.1-.08s-3.26-3.16-3.58-3.49a.81.81 0 0 0-.46-.21v48.43l14.58-3.59-6-40.61a.54.54 0 0 0-.44-.45z" />
                        <path fill="#fff" d="M25.64 17.65 23.94 24a9.61 9.61 0 0 0-4.14-.72c-3.29.21-3.33 2.29-3.29 2.81.17 2.84 7.65 3.46 8.07 10.11.33 5.24-2.78 8.82-7.26 9.1A10.9 10.9 0 0 1 9 42.47l1.14-4.84s3 2.24 5.36 2.09a2.12 2.12 0 0 0 2.07-2.14v-.12c-.24-3.7-6.32-3.48-6.71-9.57-.32-5.11 3.05-10.32 10.48-10.79a9.11 9.11 0 0 1 4.3.55z" />
                    </svg>
                </Link>
                <div className="flex flex-col justify-end">
                    <div className="relative w-fit mx-auto">
                        <div className="absolute -top-2 -right-2 flex justify-center items-center text-[0.7rem] font-bold text-white w-4 h-4 bg-[#5f8e3e] rounded-full">
                            {cartItems.items.length}
                        </div>
                        <svg className="w-6 h-6 stroke-gray-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                        </svg>

                    </div>
                    <p className="text-gray-600 font-bold"><span className="font-normal drop-shadow-xl">TOTAL:</span> ${cartItems.total.toFixed(2)}</p>
                </div>


            </div>
        </header>
    )
}

export { Header }