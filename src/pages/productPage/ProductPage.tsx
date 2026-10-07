import { useNavigate, useParams } from "react-router-dom"
import Container from "../../components/container/Container"
import Button from "../../components/button/Button"
import { useEffect, useState } from "react"
import { getProduct } from "../../services/api"
import type { Products } from "../../type/servers"
import { useAppCartContext } from "../../context/AppContext"

function ProductPage() {
    const params = useParams<{id:string}>();
    const {hadleIncreaseProductQty,cartItems }= useAppCartContext();
    const [product,setProduct] = useState<Products>()
    const navigate = useNavigate();
    
    useEffect(()=>{
        getProduct(params.id as string).then((result)=>{
            setProduct(result)
        })
    },[]);
    console.log(cartItems)
  return (
      <Container>
        <div className="max-w-md w-full shadow mt-10 rounded-2xl ">
        <div>
            <img src={product?.images} alt="" className="w-full max-h-72 h-auto object-contain rounded-t-2xl" />
            <div className="flex justify-between items-center border-b-2 border-gray-300 px-2 py-4 m-4">
                <h2  className=" font-bold text-sm md:text-lg lg:text-xl text-gray-900"> Title: {product?.title}</h2>
                <p  className="text-gray-800 text-xs md:text-sm lg:text-base font-medium">Price: ${product?.price}</p>
            </div>
                <div className="px-4 pb-4">
                <p className="line-clamp-2 text-gray-700 text-xs sm:text-sm md:text-base leading-relaxed">{product?.descripction}</p>
                </div>

        </div>
        <Button
         onClick={()=> {hadleIncreaseProductQty(params.id as string),
            navigate("/store")
         }}
         className="bg-green-600 w-full p-2 text-white text-2xl rounded-b-2xl"
         >Add To Cart</Button>
          

        </div>
    </Container>
  )
}

export default ProductPage