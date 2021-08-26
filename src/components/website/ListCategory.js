import React from 'react'
import { Link } from 'react-router-dom'

const ListCategory = ({category}) => {
    return (
        <div>
            <ul>
                {category.map(item => {
                   return <li> <Link to={`/category/${item._id}`}> {item.name} </Link></li>
                })}
            </ul>
        </div>
    )
}

export default ListCategory
