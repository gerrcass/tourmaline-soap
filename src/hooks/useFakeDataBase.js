import { useEffect, useState } from "react";

const fakeProductsDB = [
  {
    id: 1,
    title: "Tourmaline & Eucalyptus Bar Soap",
    desc: "Recharge your skin with the super energizing power of finely crushed tourmaline powder blended with natural complexion",
    price: 10,
    image: "/images/image-product-1.jpg",
  },
  {
    id: 2,
    title: "Tourmaline & Argan Oil Bar Soap",
    desc: "Recharge your skin with the super energizing power of finely crushed tourmaline powder blended with natural complexion",
    price: 15,
    image: "/images/image-product-2.jpg",
  },
  {
    id: 3,
    title: "Tourmaline & Tea Tree Bar Soap",
    desc: "Recharge your skin with the super energizing power of finely crushed tourmaline powder blended with natural complexion",
    price: 8,
    image: "/images/image-product-3.jpg",
  },
  {
    id: 4,
    title: "Tourmaline Unscentered Bar Soap",
    desc: "Recharge your skin with the super energizing power of finely crushed tourmaline powder blended with natural complexion",
    price: 25,
    image: "/images/image-product-4.jpg",
  },
  {
    id: 5,
    title: "Tourmaline & Tea Tree Bar Soap",
    desc: "Recharge your skin with the super energizing power of finely crushed tourmaline powder blended with natural complexion",
    price: 30,
    image: "/images/image-product-5.jpg",
  },
  {
    id: 6,
    title: "Tourmaline Uncentered Bar Soap",
    desc: "Recharge your skin with the super energizing power of finely crushed tourmaline powder blended with natural complexion",
    price: 50,
    image: "/images/image-product-6.jpg",
  },
];

const initialState = {
  items: [],
  total: 0,
};

const useFakeDataBase = () => {
  const [cartItems, setCartItems] = useState(initialState);
  //const [products, setProducts] = useState(fakeProductsDB);
  const products = fakeProductsDB;

  useEffect(() => {
    console.log("carItems Changed>>", cartItems);
  });

  const getCurrentTotal = () =>
    cartItems.items.reduce((accumulator, currentValue) => {
      return accumulator + currentValue.quantity * currentValue.price;
    }, 0);

  const addToCard = (productId, quantity = 1) => {
    const getItem = products.find((product) => product.id === productId);

    if (!getItem) return;

    const isItemInCart = cartItems.items.findIndex(
      (item) => item.id === productId
    );

    const { id, title, price, desc } = getItem;

    const updatedTotal = quantity * price + getCurrentTotal();

    if (isItemInCart === -1) {
      setCartItems({
        items: [...cartItems.items, { id, title, price, desc, quantity }],
        total: updatedTotal,
      });
    } else {
      const updatedItems = cartItems.items.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + quantity } : item
      );
      setCartItems({
        items: updatedItems,
        total: updatedTotal,
      });
    }
  };

  const removeFromCard = (productId, quantity = 1) => {
    let updatedTotal;
    let reachedZero = false;
    let updatedItems = cartItems.items.map((item) => {
      if (item.id === productId) {
        updatedTotal = getCurrentTotal() - quantity * item.price;
        if (item.quantity - quantity === 0) {
          reachedZero = true;
        }
        return { ...item, quantity: item.quantity - quantity };
      } else {
        return item;
      }
    });
    if (reachedZero) {
      updatedItems = cartItems.items.filter((item) => item.id !== productId);
    }
    setCartItems({
      items: updatedItems,
      total: updatedTotal,
    });
  };

  return {
    products,
    cartItems,
    addToCard,
    removeFromCard,
  };
};

export { useFakeDataBase };
