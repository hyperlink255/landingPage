import React from 'react'
import IMG1  from '../imgas/Sports.jpg'
import IMG2  from '../imgas/Health.jpg'
import IMG3  from '../imgas/youth.jpg'
import IMG4  from '../imgas/leadership.jpg'
import { IoMdBasketball } from "react-icons/io";

import { IoIosPulse } from "react-icons/io";
import { TfiRulerPencil } from "react-icons/tfi";
import { TfiCup } from "react-icons/tfi";





function Spotes() {
  return (
    <div>
        <section className='our-bar'>
        <div className='container'>
        <div className='row'>
            <div className='box'>
                <div className='img-menu'>
                    <img src={IMG1}/>
                    <div className='img-overlay'>
                    <IoMdBasketball className='icon'/>
                    </div>
                </div>
                <h2>Sports</h2>
            </div>
            <div className='box'>
                <div className='img-menu'>
                    <img src={IMG2}/>
                    <div className='img-overlay'>
                 
                    <IoIosPulse className='icon'/>
                    </div>
                   </div>
                <h2>Health</h2>
            </div>
            <div className='box'>
                <div className='img-menu'>
                    <img src={IMG3}/>
                    <div className='img-overlay'>
                 
                <TfiRulerPencil className='icon'/>
                </div>
                </div>
                <h2>Sports</h2>
            </div>
            <div className='box'>
                <div className='img-menu'>
                    <img src={IMG4}/>
                    <div className='img-overlay'>
                        <TfiCup className='icon'/>
                        </div>
                </div>
                <h2>Sports</h2>
            </div>
        </div>
        </div>
        </section>
    </div>
  )
}

export default Spotes