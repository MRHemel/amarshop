import { createContext, useEffect, useState } from "react";
import { getShoppingCart } from "../Utilities/fakedb";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState(getShoppingCart())
    useEffect(() => {
        // This effect will re-run whenever cartItems change, ensuring components re-render
        setCartItems(getShoppingCart());
    }, []); // Only re-run the effect if cartItems changes
    return (
        <CartContext.Provider value={{ cartItems, setCartItems }}>
            {children}
        </CartContext.Provider>
    );
};


export default CartProvider;