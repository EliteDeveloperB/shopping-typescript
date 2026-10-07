import axios from "axios";

const client = axios.create({
    baseURL: "https://6ac69ae7bea0e72cf5c92bfb.mockapi.io/"
});
export async function getProducts(){
    const {data} = await client("/products")

    return data;
}
export async function getProduct(id:string){
    const {data} = await client(`/products/${id}`)
    
    return data;
}
export async function login(username:string,password:string){
    const {data} = await client({
        method :"POST",
        url:"/login",
        data:{
            username,
            password
        }
    })
    
    return data;
}