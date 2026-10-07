
// import { useState } from "react";
// import Button from "../../components/button/Button"
// import Container from "../../components/container/Container"
// import { useAppCartContext } from "../../context/AppContext"




// function Login() {
//     // const {handleLogin} = useAppCartContext();
//     const [user,setUser] = useState({
//         username: "",
//         password : ""
//     })
//     const handleChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
//         const {name , value } = e.target;
//         setUser({
//             ...user,
//             [name]:value
//         })
//     }
//   return (
//     <div>
//         <Container>

//             <div className="shadow-2xl p-4 rounded flex flex-col mt-12">
//                 <h1 className="font-bold text-sm md:text-lg lg:text-xl text-gray-900">Login</h1>
//                 <input
//                  onChange={handleChange}
//                   className="p-2 border border-gray-200 my-2 rounded"
//                    type="text"
//                     placeholder="Enter your username"
//                      name="username" />
//                 <input
//                  onChange={handleChange}
//                   className="p-2 border border-gray-200 my-2 rounded"
//                    type="password"
//                     placeholder="Enter your password"
//                      name="password" />
//                 {/* <Button onClick={()=> handleLogin(user.username,user.password)} className="w-full bg-green-600 text-white rounded mt-2">Login</Button> */}
//             </div>
//         </Container>
//     </div>
//   )
// }

// export default Login