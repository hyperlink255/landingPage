import React from 'react'

function Latest() {
  return (
    <section className='latest-section padding'>
        <div className='container'>
            <div className='latest-inner'>
                <div className='d-flex'>
                    <div className='latest-content'>
                        <h1>Latest Reports</h1>
                        <h2>
                       <strong> Annual Report 2022 </strong><br/>
                         <a href='#'>click here</a>
                        <strong className='down'>to Download</strong>
                        </h2>
                        <div className='btn-3 margin'>
                        <button className='btn'>view all</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Latest