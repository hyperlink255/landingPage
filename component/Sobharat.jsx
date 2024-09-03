import React from 'react'
import IMG1 from '../imgas/SOB-1.jpg'
import IMG2 from '../imgas/SOB-2-1.jpg'


function Sobharat() {
  return (
    <div>
        <section className='sobahrat-container padding'>
            <div className='container'>
                <div className='show-title'>
                <h1>SO Bharat showcasing abilities globally</h1>
                </div>
                <div className='d-flex gap'>
                    <div className='col-5'>
                        <div className='shobhart-img'>
                            <img src={IMG1} />
            
                        </div>
                    <a href='#'>
                    Special Olympics World Games
                    </a>
                    </div>
                    <div className='col-5'>
                        <div className='shobhart-img'>
                            <img src={IMG2} />
            
                        </div>
                    <a href='#'>
                    International Games
                    </a>
                    </div>

                </div>
            </div>
        </section>
    </div>
  )
}

export default Sobharat