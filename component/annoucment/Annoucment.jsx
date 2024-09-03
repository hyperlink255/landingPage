import React from 'react'
import { annouc } from './annouc'
import ShowAnnoucment from '../annoucment/ShowAnnoucment'

function Annoucment() {
  return (
    <div>
        <section className='annoucment'>
            <div className='container'>
                <h1 className='heading'>Announcements</h1>
                <div className='d-flex flex-direction'>
               {
                annouc.map((item,index) => {
                
                    return(
                        <>
                        <ShowAnnoucment key={index} item={item}/>
                        </>
                    )
                })
               }
                </div>
            </div>
        </section>
    </div>
  )
}

export default Annoucment