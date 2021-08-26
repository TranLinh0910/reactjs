import React from 'react'
import { Link } from 'react-router-dom';
const Category = (props) => {
    const onHandLeRemove=(id)=>{
            props.onDeleteCate(id);
        }
    return (
        <div>

            <h1 className="text-3xl font-bold text-gray-900 text-center">Category</h1>
            <Link to="/admin/category/add"> <button className="border border-green-400 rounded p-1 ml-5 mx-4 my-5">Thêm Category </button>
        </Link>
            <table className="table table-bordered mx-8">
                <thead>
                    <tr className="text-center mx-8  ">
                        <th>#</th>
                        <th>Name</th>
                        <th>Image</th>
                       
                    </tr>
                </thead>
                <tbody>
                    {props.category.map((item, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{item.name}</td>
                            <td><img className="h-16" src={item.image} alt />
                            </td>
                           
                            
                          
                            <td className="text-center">
                                <button onClick={() => onHandLeRemove(item._id)} className="border border-green-400 rounded p-1 mx-4">Xóa</button>
                                <Link to={`/admin/category/edit/${item._id}`} ><button className="border border-green-400 rounded p-1">Sửa</button></Link>
                               
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div>
                {/* <ul>
                    {props.ProductApi.map((item,index)=>{
                        return (
                        <li key={index}>
                            <Link to={`/product/${item._id}`}>{item.name}</Link>
                            <button onClick={()=>onHandleRemove(item._id)} className="p-1 border-1 border-gray-500">Delete</button>
                        </li>)
                    })}
                </ul> */}
            </div>
        </div>
    )
}

export default Category
