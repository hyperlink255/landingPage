import React from 'react'
import { foot } from './foot'

function Footer() {
  return (
    <footer  style={{margin:"0"}}>
        <div className='container'>
        <div className='d-flex  justify'>
            {
             foot.map((item,index) => {
                console.log(item.li)
                return(
                <div className='footer-col' key={index}>
                 <div className='footer-tittle'>
                  <h2>{item.head}</h2>
                  </div>
                  <ul className='footer-list'>
                    <li><a href='#'>{item.li1}</a></li>
                    <li><a href='#'>{item.li2}</a></li>
                    <li><a href='#'>{item.li3}</a></li>
                    <li><a href='#'>{item.li4}</a></li>
                    <li><a href='#'>{item.li5}</a></li>
                  </ul>
                 
                </div>
                )
             })
            }
        </div>
        </div>
    </footer>
  )
}

export default Footer