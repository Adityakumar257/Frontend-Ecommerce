import React from 'react'
import { Hero } from '../Components/Hero'
import { Popular } from '../Components/Popular/Popular'
import { Offer } from '../Components/offers/Offer'
import NewCollections from '../Components/NewComponents/NewCollections'
import { NewsLetter } from '../Components/NewsLetter/NewsLetter'
// import { CardAni } from '../Components/cardAnimation/CardAni'


const Shop = () => {
  return (
    <div>
    <Hero/>
    <Popular/>
    <Offer/>
    <NewCollections/>
    <NewsLetter/>
   
    </div>
  )
}

export default Shop