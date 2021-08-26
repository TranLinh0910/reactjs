import React from 'react'
import { isAuthenticate } from '.'

import {Redirect,Route} from 'react-router'
//tạo ra privaterouter children là những cái nằm trong thẻ privaterouter
const PrivateRoute = ({children}) => {
    return (
        // phân quyền router check cái token nếu lưu vào localstogare check cái token nếu mà tồn tại thì sẽ trả về children
        //children là usedashoard là thông tin người dùng
        //không tông tại thì nó sẽ chuyển hướng về trang login
            <Route render={()=>{
return isAuthenticate() ? children : <Redirect to={{pathname:'/user/signin'}}/>
            }} />
      
    )
}

export default PrivateRoute
