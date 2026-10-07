import { Navigate, Outlet } from "react-router-dom"
import { useAppCartContext } from "../../context/AppContext"



function PrivateRote() {
    const {isLogin}= useAppCartContext()
  return (
    <>
        {
            isLogin ? <Outlet /> :<Navigate to="/login" />
        }
    </>
  )
}

export default PrivateRote