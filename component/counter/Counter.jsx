import React from 'react'
import { count } from './count'
function Counter() {
  return (
    <section className='counter-section padding' style={{marginBottom:'0'}}>
      <div className='container'>
        <div className='couter-head'>
          <h1>Registered Stakeholders as on Dec. 2019</h1>
        </div>
        <div className='d-flex justify'>

          {
            count.map((item) => {
              return(
              <div className='col-3'>
            <div className='counter-name'>
              <h1>{item.count}</h1>
              <span>{item.span}</span>
            </div>
            
           </div>
            )
          })
          }

            
            </div>
            <div className='couter-head ' style={{marginTop:'20px'}}>
              <h1>SO Bharat Expanse </h1>
            </div>
            <div className='d-flex'>
            <div className='col-3'>
            <div className='counter-name'>
              <h1>688</h1>
              <span>Districts</span>
            </div>
            
           </div>
           <div className='col-3'>
            <div className='counter-name'>
              <h1>34</h1>
              <span>States & Union Territories </span>
            </div>
            
           </div>
         
         
            </div>
          </div>
          
    </section>
  )
}

export default Counter