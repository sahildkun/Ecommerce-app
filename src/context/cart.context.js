import { logDOM } from "@testing-library/react";
import { type } from "@testing-library/user-event/dist/type";
import { createContext, useState ,useEffect, useReducer } from "react";




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

export const CART_ACTION_TYPES = {
    SET_CART_OPEN: 'SET_CART_OPEN',
    // CART_ITEM_COUNT: '  CART_ITEM_COUNT'
    SET_CART_ITEMS: 'SET_CART_ITEMS'
}

export const cartReducer = (state,action) => {
//    console.log('dispat');
//    console.log(action);
    const { type , payload} = action;

    switch(type) {
        case CART_ACTION_TYPES.SET_CART_ITEMS:
            return{
            ...state,
            ...payload,
          
            }
        case CART_ACTION_TYPES.SET_CART_OPEN:
           return{
            ...state,
            isCartOpen: payload
        }
       
        default: 
        {
                throw new Error(`Unhandled type ${type} in cartReducer function`)
        }
    }
}

const INITIAL_STATE = {
    isCartOpen: false,
    itemCount: 0,
    cartItems:[],
    totalPrice:0,
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

    // const [ isCartOpen,setIsCartOpen] = useState(false);
    // const [ cartItems ,setCartItems]  = useState([]);
    // const [itemCount , setItemCount] = useState(0);
    // const [totalPrice ,setTotalPrice] = useState(0);
    // invokes the add to cart when clicked
    // now it will first see if the product is already existing the cart it willl increment the quantiy
    //or it will create a new cart item if it didnt eexidted in cart at the first place
    // for such work we are going to create a helper function
     
    const [{isCartOpen,itemCount,cartItems,totalPrice}, dispatch] = useReducer(cartReducer,INITIAL_STATE);

    //   console.log(isCartOpen);

      const setIsCartOpen = ( res) => {
      dispatch({type:CART_ACTION_TYPES.SET_CART_OPEN, payload: res})
      }
    //   const setItemCount = (count) =>{
    //     dispatch({type:CART_ACTION_TYPES.CART_ITEM_COUNT,payload:count})
    //   }

    const updatCartItemsReducer =(newCartItems) =>{

        const newCartCount = newCartItems.reduce(
            (total, cartItem) => total + cartItem.quantity,
            0
          );



          const newCartTotal = newCartItems.reduce(
            (total, cartItem) => total + cartItem.quantity * cartItem.price,
            0
          );

          dispatch({type:CART_ACTION_TYPES.SET_CART_ITEMS,payload:{cartItems:newCartItems, itemCount:newCartCount, totalPrice:newCartTotal}})

    /*
    
    
    to dispatch {

        newcartitems
        newItemcount
        new totalprice
    }
    
    */

    }





    const addToCart = (productToAdd) => {
      const newCartItems =  addCardtoItem(cartItems,productToAdd)
      updatCartItemsReducer(newCartItems);

    }

    const deleteFromCart = (productToAdd) => {
        const newCartItems =    deleteItem(cartItems,productToAdd)
        updatCartItemsReducer(newCartItems);
    }

    const clearItemFromCart = (productToClear) => {
        const newCartItems = clearItem(cartItems,productToClear)
        updatCartItemsReducer(newCartItems);
    }

    // useEffect(() => {
    //     const newCartCount = cartItems.reduce(
    //       (total, cartItem) => total + cartItem.quantity,
    //       0
    //     );
    //     setItemCount(newCartCount);
    //   }, [cartItems]);

    //   useEffect(() => {
    //     const newCartTotal = cartItems.reduce(
    //       (total, cartItem) => total + cartItem.quantity * cartItem.price,
    //       0
    //     );
    //     setTotalPrice(newCartTotal);
    //   }, [cartItems]);
   
    const value  = { isCartOpen , setIsCartOpen, addToCart,cartItems , itemCount ,deleteFromCart,clearItemFromCart,totalPrice}

    return(  
        <CartContext.Provider value={value} >{children}</CartContext.Provider>
    )
}