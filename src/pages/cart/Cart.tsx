
import Button from "../../components/button/Button"
import CartItem from "../../components/cartItem/CartItem"
import Container from "../../components/container/Container"
import { useAppCartContext } from "../../context/AppContext"


function Cart() {
  const {cartItems , getQtyItems,getTotalPreice}= useAppCartContext();

  return (
  <Container>
      <div>
        {
          cartItems.map((item) =>(
            <CartItem key={item.id} {...item} />
          ))
         

        }
      </div>
      <div  className="flex flex-col sm:flex-row gap-4 justify-between items-center shadow-2xl p-6 mb-4">
        <div>
        <h2 className="text-sm md:text-lg lg:text-xl text-gray-900">Product Quantity: { getQtyItems()} </h2>
          <h3 className="font-bold text-sm md:text-lg lg:text-xl text-gray-900">Total payable: {getTotalPreice()}</h3>
        </div>
        <Button className="font-bold bg-green-700 text-white rounded-2xl shadow-lg px-4 py-2">Check out</Button>
      </div>
  </Container>
  )
}

export default Cart