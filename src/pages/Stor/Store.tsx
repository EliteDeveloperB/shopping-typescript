import { Link } from "react-router-dom";
import Container from "../../components/container/Container";
import ProductsItem from "../../components/prodactItem/ProductsItem";
import { useEffect, useState } from "react";
import { getProducts } from "../../services/api";
import type { Products } from "../../type/servers";


export default function Store() {
  const [products,setProducts] = useState<Products[]>([])
  useEffect(()=>{
    getProducts().then((result)=>{
    setProducts(result);
    })
  },[])
  return (
    <Container>
      <div>
        <h1 className="my-5 font-bold">New Products</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 items-stretch ">
          {
            products.map((item)=>(
          <Link to={`/product/${item.id}`}>
          <ProductsItem key={item.id} {...item} />
          </Link>

            ))
          }
       
        </div>
      </div>
    </Container>
  );
}
