import { createContext, useContext, useEffect, useState} from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { getProducts } from "../services/api";
import type{ Products } from "../type/servers";




interface ShopingCartProvider{
    children:React.ReactNode;
}
interface cartItem{
    id:string,
    qty:number,
}
interface AppCartContext {
    cartItems:cartItem[];
    hadleIncreaseProductQty:(id:string)=>void;
    handleDecreaseProductQty:(id:string)=>void;
     getProductQty:(id:string)=> number;
     handleRemoveProduct :(id:string)=>void;
      getQtyItems:()=> number;
       getTotalPreice:()=> number;

}  
export const AppCartContext = createContext({} as AppCartContext);
export const useAppCartContext = ()=>{
    return useContext(AppCartContext)
};

export function ShopingCartProvider({children}:ShopingCartProvider){
    const [cartItems,setCartItems]= useLocalStorage<cartItem[]>("cartItems",[]);
    const [allProducts,setAllProducts]=useState<Products[]>([]);
    useEffect(()=>{
        getProducts().then(data =>{
            setAllProducts(data)
        })
    },[])

    const hadleIncreaseProductQty = (id:string)=>{
        setCartItems (currentItems=> {
            let selectItem = currentItems.find((item)=> item.id == id);
            if(selectItem == null){
                return [...currentItems , {id:id ,qty:1}]
            }
            else{
              return currentItems.map(item=>{
                    if(item.id == id){
                        return {...item,qty:item.qty + 1}
                    }else{
                        return item
                    }
                })
            }
        })
    
    }
    const handleDecreaseProductQty = (id:string)=>{
         setCartItems (currentItems => {
            let selectItem = currentItems.find((item)=> item.id == id);
            if (selectItem?.qty === 1){
                return currentItems.filter(item => item.id !== id)
            }       
            else{
              return currentItems.map(item=>{
                    if(item.id == id){
                        return {...item,qty:item.qty - 1}
                    }else{
                        return item
                    }
                })
            }
        })
    }
    const getProductQty = (id:string)=>{
        return cartItems.find((item)=> item.id == id)?.qty || 0;
    }
    const handleRemoveProduct =(id:string)=>{
        setCartItems(currentItems => currentItems.filter((item)=> item.id != id))
    }
    const getQtyItems = ()=>{
        return cartItems.reduce((total , item)=>total + item.qty ,0)
    }
    const getTotalPreice = ()=>{
        return cartItems.reduce((total,item)=> {
            const mainPrice = allProducts.find(p => p.id ===item.id)
            return total + ( mainPrice!.price * item.qty)

        },0)
    }
   

    return(
         <AppCartContext.Provider value={{cartItems,
            hadleIncreaseProductQty,
            handleDecreaseProductQty,
             getProductQty ,
             handleRemoveProduct , 
             getQtyItems,
              getTotalPreice
        
         }}>
            {children}
         </AppCartContext.Provider>
    )
}