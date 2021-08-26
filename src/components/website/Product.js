import React from 'react';
import { Link } from 'react-router-dom';
 const Products = (props) => {
    // const onHandleRemove=(id)=>{
    //     props.onDelete(id);
    // }
   
    return (
        <div >
        <div className="mt-6 font-medium">SẢN PHẨM BÁN CHẠY</div>
            <div className="grid grid-cols-5 gap-4 ">
               {props.product.map((item,index)=>(
               <div className="mb-2" key={index}>
                   
               <img className="h-[250px] w-250 object-cover mt-3 border border-[#A7F3D0]-600 " src={item.image} alt="" />
               <div className="mt-3">
               <p className ="text-gray-900 title-font text-base  font-medium"> {item.name}</p>
          
              <p className="mt-1" >{item.price}</p>
              
               </div>
              <Link to={`/product/${item._id}`}> <button className="mr-4 border border-green-400 rounded p-1">Chi tiết</button></Link>
             

               {/* <button onClick={()=> onHandleRemove(item._id)}>Delete</button> */}
              </div>
               ))}
              
              </div>


        </div>
    )
}
export default Products

