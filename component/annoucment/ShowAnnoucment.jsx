import React from 'react'

function ShowAnnoucment({item}) {
  return (
    <div>
        <div className='annouce-bar'>
            <div className='d-flex gap'>
                <div className='icon-bar'>
                 {item.icon}
                </div>
                <div className='annoucment-content'>
                    <h1>{item.h1}</h1>
                    <h4>{item.h4}</h4>
                    <div className='para'>
                        <p>{item.para}</p>
                        <p>{item.para1}</p>
                    </div>
                    <div className='account'>
                        <span>{item.anddtional?.span1}</span>
                        <span>{item.anddtional?.span2}</span>
                    </div>
                    <ul className='content-list'>
                        <li>{item.list?.li1}</li>
                        <li>{item.list?.li2}</li>
                        <li>{item.list?.li3}</li>
                    </ul>
                </div>
            </div>
        </div>
        </div>
  )
}

export default ShowAnnoucment