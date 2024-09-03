import React ,{useState}from 'react';
import { data } from './data'
function Impact() {

    
        return (
           <div className='testomonial padding '>
           <div className='container'>
         
      <div className="d-flex wrap justify">

           {data.map((item) => {
             return(
            <>
                    <div className='box-1'>
                    <div className='img-bar'>
                        <img src={item.img}/>
                    </div>
                    <div className='content-bar'>
                        <div className='head'>
                            <a href='#'>{item.head}</a>
                        </div>
                        <div className='title'>
                            <a href='#'>{item.title}</a>
                        </div>
                    </div>
                </div>
            
            </>
                )
            })
          }
       
    </div>
            
            </div>
            </div>
        )      
}

 

export default Impact