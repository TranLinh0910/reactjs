import React from 'react'
import {Link} from 'react-router-dom'

const LayoutAdmin = ({children}) => {
    return (
            <div>
                <nav className="bg-gray-800">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex items-center justify-between h-16">
                            <div className="flex items-center">
                                <div className="flex-shrink-0">
                                    <img className="h-8 w-8" src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg" alt="Workflow" />
                                </div>
                                <div className="hidden md:block">
                                    <div className="ml-10 flex items-baseline space-x-4">
    
                                        <Link to="/admin/dashboard" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Dashboard</Link>
    
                                        <Link to="/admin/products" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Product</Link>
    
                                        <Link to="/admin/categories" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Category</Link>
                                        
                                    </div>
                                </div>
                            </div>
                            <div className="hidden md:block">
                                <div className="ml-4 flex items-center md:ml-6">
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
    
                <main>
                    <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
    
                    </div>
                </main>
                <div className="grid grid-cols-[250px,1fr] border-l-2 border-fuchsia-600 ">
                    <div className="  ">
                        <ul >
                            <li className="m-3 list-none"><Link className=" no-underline" to="/admin">Dashbord</Link></li>
                            <li className="m-3 list-none"><Link className=" no-underline" to="/admin/categories">Category Page</Link></li>
                            <li className="m-3 list-none"><Link className=" no-underline" to="/admin/products">Product</Link></li>
                            
                            <li className="m-3 list-none"><Link className=" no-underline" to="/">Quay lại Trang chủ</Link></li>
                        </ul>
                    </div>
                    <div>
                        {children}
                    </div>
                </div>
            </div>
    
    
    
        )
    }

export default LayoutAdmin
