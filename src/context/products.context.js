import { useEffect } from "react";
import { createContext , useState } from "react";
import { SHOP_DATA } from "../ShopData";
import { addCollectionAndDocuments ,getCategoriesAndDocuments } from "../utils/firebase/firebase.utils";


export const ProductsContext = createContext({
    products:[]
});

export const ProductsProvider =({children}) =>{
     const [ products, setProducts] = useState({});
     const value ={products};

    
    //  useEffect(()=>{
    //     addCollectionAndDocuments('categories',SHOP_DATA)
    // },[]);
    useEffect(() => {
        const getCategoriesMap = async () => {
        const categoryMap = await getCategoriesAndDocuments('categories');
        console.log(categoryMap);
        setProducts(categoryMap);
        }

        getCategoriesMap();
      }, []);


    return (  
        <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>
    )
} 