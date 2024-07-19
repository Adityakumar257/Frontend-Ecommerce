import React, { useEffect } from 'react'
import './Popular.css'
import data_product from './../../Assets/data';
import Item from './../item/Item';
import AOS from 'aos'
import "aos/dist/aos.css"

export const Popular = () => {

  useEffect(() =>{
    AOS.init();
  
  })
// const [popularProducts,setpopularProducts] = useState([])


// useEffect(()=>{
//   fetch('http://localhost:4000/popularinwomen')
//   .then((response)=>response.json())
//   .then((data)=>setpopularProducts(data));
// },[])


  return (
    <div className='Popular'>
    <h1 data-aos="flip-left" data-aos-duration="1700">POPULAR IN WOMEN</h1>
    <hr/>
    <div className='popular-item'>
    {data_product.map((item,i)=>{
        return <Item key = {i} id={item.id} name={item.name} image ={item.image} new_price={item.new_price} old_price ={item.old_price}/>
    })}
    </div>
    </div>
  )
}
