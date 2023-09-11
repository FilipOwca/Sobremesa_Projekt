import React from 'react'
import '../App.css'
import HeroSection from '../components/HeroSection'
import Cards from '../components/Cards'
import BlockSection from '../components/BlockSection'
import {blockObjFour, blockObjOne, blockObjThree, blockObjTwo} from '../pages/Data'
import Pricing from '../components/Pricing'

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <Cards />
      <BlockSection {...blockObjOne} />
      <BlockSection {...blockObjTwo} />
      <BlockSection {...blockObjThree} />
      <BlockSection {...blockObjFour} />
      <Pricing />
    </>
  ); 
}

export default HomePage;