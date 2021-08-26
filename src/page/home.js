import React from 'react'
// import ListCategory from '../components/website/ListCategory'
import Products from '../components/website/Product'
import Slide from '../components/website/Slider'


const HomePage = (props) => {
    return (
        <div>
          <Slide />
          {/* <ListCategory {...props}/> */}
           <Products {... props} />
        
        </div>
    )
}

export default HomePage
