import { useFakeDataBase } from "@/hooks/useFakeDataBase";
import { CardList } from "@/components/CardList/CardList";
import { Footer } from "@/components/Footer/Footer";
import { Header } from "@/components/Header/Header";

export default function Home() {
  const { products, cartItems, addToCard, removeFromCard } = useFakeDataBase();

  return (
    <>
      <Header cartItems={cartItems} />
      <main>
        <CardList
          products={products}
          cartItems={cartItems}
          addToCard={addToCard}
          removeFromCard={removeFromCard}
        />
      </main>
      <Footer />
    </>
  );
}
