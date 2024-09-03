import React from 'react'
import {pro} from './pro'

function Product() {
  return (
    <section className='product-section'>

     <div class="container">
        <h1>Partners in Inclusion</h1>
     <div className="row">  
     <div className="row sliderBar">
        <div className='slide-track'>
            {
                pro.map((item) => {
                    return(
                    <div className='slide'>
                        <img src={item.img} />
                     </div>
                    )
                })
            }
        </div>
     </div>
     </div>
     </div>
     </section>
 )
}

export default Product