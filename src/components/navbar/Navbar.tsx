import { Link } from "react-router-dom"
import Container from "../container/Container"
import Button from "../button/Button"
import { useAppCartContext } from "../../context/AppContext"
import { FaBars,FaTimes,FaShoppingCart }from "react-icons/fa"



function Navbar() {
  const { getQtyItems } = useAppCartContext() 
 


  return (
  <nav className="w-full bg-white shadow ">
      <Container>
          <div className="h-16 flex justify-between items-center px-4">
            <ul className=" hidden md:flex items-center gap-3 cursor-pointer">
              <li className="hover:shadow px-4 py-2"><Link to="/">Home</Link></li>
              <li className="hover:shadow px-4 py-2"><Link to="/store">Store</Link></li>
              <li className="hover:shadow px-4 py-2"><Link to="/">About us</Link></li>
            </ul>
                <Button 
                className=" relative block md:hidden p-2 text-gray-900 focuse:outline">
                  <FaTimes className="w-6 h-6 text-red-700"/> <FaBars className="w-6 h-6"/>
                </Button>
           <div className=" absolute top-18 md:hidden pb-4 px-4 rounded bg-white border-t shadow">
             <ul className="flex flex-col gap-2 pt-2 cursor-pointer">
              <li className="hover:shadow px-4 py-2"><Link to="/">Home</Link></li>
              <li className="hover:shadow px-4 py-2"><Link to="/store">Store</Link></li>
              <li className="hover:shadow px-4 py-2"><Link to="/">About us</Link></li>
            </ul>
            </div>
            <div className="flex items-center">
                <Button className="hedden md:flex flex-col" >
              <Link to="/cart" className="relative">
              <FaShoppingCart className="w-6 h-6 text-green-700" />
              <span className="w-5 h-5 absolute -top-2 -right-2 bg-red-500 text-green-950 font-bold flex items-center justify-center rounded-full">{ getQtyItems()}</span>
              </Link>
              </Button>
            </div>

          </div>  
      </Container>
    </nav>

  )
}

export default Navbar