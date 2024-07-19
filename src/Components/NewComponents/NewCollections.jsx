import React, { useEffect} from 'react'
import "./NewCollections.css";
import new_collections from "../../Assets/new_collections"
import Item from './../item/Item';
import AOS from 'aos'
import "aos/dist/aos.css"
// import { useState } from 'react';
// import new_collections from './../../../../Admin/src/assets/new_collections';


const NewCollections = () => {

  //dynamic code to add from database

  // const [new_collections,setNew_collection] = useState([])

  // useEffect (()=>{
  //   fetch('http://localhost:4000/newcollections')
  //   .then((response)=>response.json())
  //   .then((data)=>setNew_collection(data));
  // },[])

  useEffect(() =>{
    AOS.init();
  
  })
  

  return (
    <div className="NewCollections">
      <h1 data-aos="fade-right" data-aos-duration="1700">New Collections</h1>
      <hr />
      <div className="collections">
        {new_collections.map((item, i) => {
          return <Item key={i} id={item.id} name={item.name} image={item.image}  new_price={item.new_price} old_price={item.old_price}
            />
        })}
      </div>
    </div>
  )
}

export default NewCollections;