import React,{ useEffect} from 'react'
import './Newsletter.css'
import AOS from 'aos'
import "aos/dist/aos.css"

export const NewsLetter = () => {
  useEffect(() =>{
    AOS.init();
  
  })
  
  return (
    <div className='NewsLetter'>
    <h1 data-aos="fade-left" data-aos-duration="1700">Get Exclisive offer on Your email</h1>
    <p data-aos="fade-right" data-aos-duration="1700">Subscribe Our Newsletter and Stay Updated</p>
    <div>
    <input type='email' placeholder='Your Email id'/>
    <button>Subscribe</button>
    </div>
    </div>
  )
}
