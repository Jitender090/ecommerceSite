import React from 'react'
import Hero from './Hero'
import './style/Home.css'
import Sec_1 from './Sec_1'
import Featureproduct from './Featureproduct'
import Sec_2 from './Sec_2'
import Partner from './Partner'


export default function Home() {
  return (
    <div className="hm-container">
      <Hero/>
      <Sec_1/>
      <Featureproduct/>
     
      <Partner/>
      <Sec_2/>
     
    </div>
  )
}
