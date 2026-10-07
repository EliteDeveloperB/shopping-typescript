
import type { Products } from "../../type/servers";


type TProductItem = Products;


function ProductsItem({title,price,images,descripction}:TProductItem ) {
  return (
    <div className="h-full shadow border border-gray-400 rounded">
        <img src={images} alt="" className=" rounded-t " />
        <div className="flex justify-between items-center p-2">
        <h3 className=" font-bold text-sm md:text-lg lg:text-xl text-gray-900">Title:{title}</h3>
        <p className="text-gray-800 text-xs md:text-sm lg:text-base font-medium">Price: ${price}</p>
        </div>
        <div className="p-2">
            <p className="line-clamp-2 text-gray-700 text-xs sm:text-sm md:text-base leading-relaxed">{descripction}</p>
        </div>
    </div>
  )
}

export default ProductsItem