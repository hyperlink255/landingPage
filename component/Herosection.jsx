import React, { useState } from 'react'
import IMG from '../imgas/back.jpg'

function Herosection() {
   return (
    <div>
        <div className='hero-section'>
          <img src={IMG} alt='background'/>
            <div className=' back-secound'>
              <h1>An Ability rather than a Disability</h1>
            </div>
        </div>
        </div>
  )
}

export default Herosection