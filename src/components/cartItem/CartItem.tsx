
import { useAppCartContext } from "../../context/AppContext"
import Button from "../button/Button"
import { useEffect, useState } from "react";
import { getProduct } from "../../services/api";
import type { Products } from "../../type/servers";
import { HiOutlineTrash } from "react-icons/hi";

interface ICartItem {
  id: string;
  qty:number;
}
function CartItem({id,qty}:ICartItem) {
  const { hadleIncreaseProductQty,handleDecreaseProductQty ,handleRemoveProduct} = useAppCartContext();
  const [item,setItem]= useState<Products>();
  useEffect(()=>{
    getProduct(id).then((result)=>{
      setItem(result)
    })
  },[])
 
  return (
    <div className="w-full shadow-2xl p-2 flex flex-col sm:flex-row gap-4 md:flex-row md:flex-wrap md:justify-between lg:flex-nowrap  items-center my-8">
        <img className="w-ful sm:w-32 lg:w-40 h-48 sm:h-32 lg:h-28 object-contain rounded" src={item?.images} alt="" />
        <div className="w-fullmd:flex-1 md:px-4 text-sm text-center md:text-left">
       <div>
         <h3 className="font-bold text-sm md:text-lg lg:text-xl text-gray-900">Title: {item?.title}</h3>
        <h6 className="text-gray-700 text-xs md:text-sm lg:text-base font-medium">Price: ${item?.price}</h6>
       </div>
        <div className="flex justify-center sm:justify-start items-center mt-2">
        <div className="flex justify-center items-center  px-1 py-2 shadow rounded ">
            <Button
            onClick={()=> hadleIncreaseProductQty(id)} 
            className="font-bold rounded-2xl mx-1">+</Button>
            <span className="font-bold rounded-2xl mx-1">{qty}</span>
             <Button
             onClick={()=>handleDecreaseProductQty(id)} className="font-bold rounded-2xl mx-1">-</Button>
        </div>
        <Button 
        onClick={()=>handleRemoveProduct(id)}><HiOutlineTrash className="text-red-700" /></Button>

        </div>
        </div>
        <div className=" md:w-full lg:w-auto lg:ms-auto p-4 shadow rounded">

          <h3 className="text-sm md:text-lg lg:text-xl text-gray-900">Total Price: ${(item?.price ?? 0) * qty}</h3>

        </div>
    </div>
  )
}

export default CartItem