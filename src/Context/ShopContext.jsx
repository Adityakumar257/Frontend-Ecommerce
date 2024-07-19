import React,{createContext,useState}from "react"
import all_product from './../Assets/all_product';




export const ShopContext = createContext(null);
const getDefaultCart = () =>{
    let cart = {};

    for (let index = 0; index < all_product.length+1; index++) {
        cart[index] = 0;
        
    }
    return cart;

}


const ShopContexProvider = (Props) =>{

    // const [all_product,setAll_product] = useState([])
    const [cartItems, setCartItems] = useState(getDefaultCart());
    
    // useEffect(()=>{
    //     fetch('http://localhost:4000/allproducts')
    //     .then((response)=>response.json())
    //     .then((data)=>setAll_product(data))

    //     if(localStorage.getItem('auth-token')){
    //         fetch('http://localhost:4000/getcart')
    //     }

    // },[])

    const addToCart = (itemId)  =>{
        setCartItems((prev)=>({
            ...prev,[itemId]:prev[itemId]+1}));
            console.log(cartItems);
            // if(localStorage.getItem('auth-token')){
            //     fetch('http://localhost:4000/addtocart',{
            //         method:'POST',
            //         headers:{
            //             Accept:'application/form-data',
            //             'auth-token':`${localStorage.getItem('auth-token')}`,
            //             'content-Type':'application/json',
            //         },
            //         body:JSON.stringify({"ItemId":ItemId}),
            //     })
            //     .then((response)=>response.json())
            //     .then((data)=>console.log(data))
            // }
        
    }
    const removeFromCart = (itemId)  =>{
        setCartItems((prev)=>({
            ...prev,[itemId]:prev[itemId]-1 }))
            // if(localStorage.getItem('auth-token')){

            //     fetch('http://localhost:4000/removefromcart',{
            //         method:'POST',
            //         headers:{
            //             Accept:'application/form-data',
            //             'auth-token':`${localStorage.getItem('auth-token')}`,
            //             'content-Type':'application/json',
            //         },
            //         body:JSON.stringify({"ItemId":ItemId}),
            //     })
            //     .then((response)=>response.json())
            //     .then((data)=>console.log(data))
            // }
       
    }
    
    const getTotalCartAmount = () =>{
        let totalAmount =0;
        for(const item in cartItems){
            if(cartItems[item]>0)
            {
                let iteminfo = all_product.find((product)=>product.id===Number(item))
                totalAmount +=iteminfo.new_price * cartItems[item]
            }
           
        }
        return totalAmount;
    }

    const getTotalcartItems = () =>{
        let totalItem = 0;
        for(const item in cartItems)
        {
            if (cartItems[item]>0)
    {
        totalItem+=cartItems[item];
    }
    }
    return totalItem;
}
   
    const contexValue = {getTotalcartItems,getTotalCartAmount,all_product,cartItems,addToCart,removeFromCart};
    return (
        <ShopContext.Provider value={contexValue}>
            {Props.children}
        </ShopContext.Provider>
    )
}
export default ShopContexProvider; 