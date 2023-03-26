
const Header = ({ cartItems }) => {

    return (
        <header className="bg-primary">
            <div className="max-w-5xl mx-auto px-4 py-10 text-right">
                <p>ITEMS IN CART: {cartItems.items.length}</p>
                <p>TOTAL: ${cartItems.total.toFixed(2)}</p>
            </div>

        </header>
    )
}

export { Header }