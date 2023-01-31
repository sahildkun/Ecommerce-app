import { createContext, useState } from "react";




// helper function for AddtoCart
//cartitems is the array od cart products with additional quantity property
const addCardtoItem = (cartItems, productToAdd) => {
    //find if cartitems contains productToAdd
    const existingCartItem = cartItems.find((cartItem) => cartItem.id === productToAdd.id )
    console.log(existingCartItem);
    //the find returns a bool
    //if found increment quantity 
     if(existingCartItem) {
        return cartItems.map((cartItem) =>
        cartItem.id === productToAdd.id ?  {...cartItem, quantity: cartItem.quantity + 1} : cartItem
        );
     }

    //return new array with modified cart items with new cart item
    
    return [...cartItems , { ...productToAdd, quantity: 1}];
}






export const CartContext = createContext(
    {
        isCartOpen: false,
        setIsCartOpen: () => {},
        cartItems: [],
        addtoCart : () => {}
    }
);

export const CartProvider = ({children}) => {

    const [ isCartOpen,setIsCartOpen] = useState(false);
    const [ cartItems ,setCartItems]  = useState([]);
    const [itemCount , setItemCount] = useState(0);
    // invokes the add to cart when clicked
    // now it will first see if the product is already existing the cart it willl increment the quantiy
    //or it will create a new cart item if it didnt eexidted in cart at the first place
    // for such work we are going to create a helper function
    const addToCart = (productToAdd) => {
        setCartItems(addCardtoItem(cartItems,productToAdd));
    }
   
    const value  = { isCartOpen , setIsCartOpen , addToCart,cartItems , setItemCount, itemCount}

    return(  
        <CartContext.Provider value={value} >{children}</CartContext.Provider>
    )
}