import { Card } from "@/components/Card/Card";

const CardList = ({ products, cartItems, addToCard, removeFromCard }) => {

    return (
        <div className="max-w-5xl mx-auto px-4 p-12 mt-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {products.map(product => <Card
                key={product.id}
                product={product}
                cartItems={cartItems}
                addToCard={addToCard}
                removeFromCard={removeFromCard}
            />
            )}
        </div>
    )
}

export { CardList }