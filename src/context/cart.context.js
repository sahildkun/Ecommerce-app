import { createContext, useState ,useEffect } from "react";




// helper function for AddtoCart
//cartitems is the array od cart products with additional quantity property
const addCardtoItem = (cartItems, productToAdd) => {
    //find if cartitems contains productToAdd
    const existingCartItem = cartItems.find((cartItem) => cartItem.id === productToAdd.id )
    // console.log(existingCartItem);
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

const deleteItem = (cartItems, productToRemove) => {
    const existingCartItem = cartItems.find((cartItem) => cartItem.id === productToRemove.id );
    
    if(existingCartItem.quantity === 1){
        return cartItems.filter(cartItem => cartItem.id !== productToRemove.id)
    }

    if(existingCartItem) {
        return cartItems.map((cartItem) =>
        cartItem.id === productToRemove.id  ?  {...cartItem, quantity: cartItem.quantity - 1} : cartItem
        );
     }
}

const clearItem = (cartItems,productToClear) => {
    return cartItems.filter(cartItem => cartItem.id !== productToClear.id)
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
    const [totalPrice ,setTotalPrice] = useState(0);
    // invokes the add to cart when clicked
    // now it will first see if the product is already existing the cart it willl increment the quantiy
    //or it will create a new cart item if it didnt eexidted in cart at the first place
    // for such work we are going to create a helper function
    const addToCart = (productToAdd) => {
        setCartItems(addCardtoItem(cartItems,productToAdd));
    }

    const deleteFromCart = (productToAdd) => {
        setCartItems(deleteItem(cartItems,productToAdd))
    }

    const clearItemFromCart = (productToClear) => {
        setCartItems(clearItem(cartItems,productToClear));
    }

    useEffect(() => {
        const newCartCount = cartItems.reduce(
          (total, cartItem) => total + cartItem.quantity,
          0
        );
        setItemCount(newCartCount);
      }, [cartItems]);

      useEffect(() => {
        const newCartTotal = cartItems.reduce(
          (total, cartItem) => total + cartItem.quantity * cartItem.price,
          0
        );
        setTotalPrice(newCartTotal);
      }, [cartItems]);
   
    const value  = { isCartOpen , setIsCartOpen , addToCart,cartItems , setItemCount, itemCount ,deleteFromCart,clearItemFromCart,totalPrice}

    return(  
        <CartContext.Provider value={value} >{children}</CartContext.Provider>
    )
}