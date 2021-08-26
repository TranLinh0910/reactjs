import React from 'react'
import { Link } from 'react-router-dom'


const Product = ({product}) => {
    return (
        <div>
         <section>
         <div className="flex bd-highlight mb-3">
          
          <div className="p-2 bd-highlight">
            <Link to="/" style={{textDecoration: 'none', color: 'black'}}> Trang chủ  </Link>
          </div>
          <div className="p-2 bd-highlight">
            /
          </div>
          <div className="p-2 bd-highlight">
            <Link to="/products" style={{textDecoration: 'none', color: 'black'}}>Sản phẩm</Link>
          </div>
        </div>
     
      </section> 
            
            <section className="text-gray-600 body-font">
        <div className="container  py-2 mx-auto">
          <div className="flex flex-wrap -m-4">
            {product.map(item=>{return(
               <div className="lg:w-1/5 md:w-1/2 p-4 w-full">
               <a className="block relative h-50 rounded overflow-hidden">
                 <img alt="ecommerce" className="h-[250px] w-150 object-cover mt-3 border border-[#A7F3D0]-600" src={item.image} />
               </a>
               <div className="mt-4">
                 
                 <h2 className="text-gray-900 title-font text-lg font-medium">{item.name}</h2>
                 <p className="mt-1">{item.price}</p>
                 <Link to={`/product/${item._id}`}> <button className="mr-4 border border-green-400 rounded p-1">Chi tiết</button></Link>
               </div>
             </div>
              
            )})}
           </div>
          </div>
      </section>
        </div>
    )
}

export default Product
