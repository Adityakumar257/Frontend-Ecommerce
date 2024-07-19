import React,{useEffect} from 'react'
import './Offer.css'
import exclusive_image from './../../Assets/exclusive_image.png'
import AOS from 'aos'
import "aos/dist/aos.css"


export const Offer = () => {
  useEffect(() =>{
    AOS.init();
  
  })
  return (
    <div className='offer'>
     <div className="offer-left">
    
     <h1 data-aos="fade-right" data-aos-duration="1700">Offers For You</h1>
     <p data-aos="fade-left" data-aos-duration="1700">ONLY ON BEST SELLERS PRODUCT</p>
     <button>Chek Now</button>
     </div>
     <div className='offer-right'>
     <img src={exclusive_image} alt=''/>
     </div>
    </div>
  )
}
