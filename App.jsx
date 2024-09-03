import React from 'react'
import Header from './component/Header'
import Herosection from './component/Herosection'
import Annoucment from './component/annoucment/Annoucment'
import Join from './component/Join'
import Impact from './component/impact/Impact'
import Sobharat from './component/Sobharat'
import Latest from './component/Latest'
import Counter from './component/counter/Counter'
import Footer from './component/footer/Footer'
import Spotes from './component/Spotes'
import Product from './component/productlist/Product'
import './style.css'
function App() {

  return (
    <div>
      <Header/>
      <Herosection/>
      <Spotes/>
       <Annoucment/>
       <Join/>
       <Impact/>
       <Sobharat/>
       <Latest/>
       <Product/>
       <Counter/>
       <Footer/>
    </div>
  )
}

export default App