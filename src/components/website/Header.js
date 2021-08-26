import React, { useEffect, useState } from "react";
import { Link, useHistory,useLocation } from "react-router-dom";
import { SignOut, isAuthenticate } from "../auth";


const Header = (props) => {
  const history = useHistory();
  const { pathname } = useLocation();
  const [isLogged, setIsLogged] = useState(false);
  useEffect(() => {
    isAuthenticate() && setIsLogged(true);
  }, [pathname, isLogged]);
  const {user}=isAuthenticate()
  const [search,setSearch]=useState("")
  return (
    <div>
      <nav className="flex justify-between  mt-4">
        <div>
          <input
            type="text"
            className="placeholder-gray-500 border-2 border-green-200 rounded p-1 "
            placeholder="Tìm kiếm..."
            onChange={(e)=>setSearch(e.target.value)}
          />
          <button className=" border border-green-400 rounded p-1">
            Tìm kiếm
          </button>
          {props.product.filter(val =>{
            if(search==""){
              return ""
            }
            else if(val.name.toLowerCase().includes(search.toLowerCase())){
              return val
            }
          }).map(item=>{
            return(
              <Link to={`/product/${item._id}`}>
                <div className="bg-white p-4 hover:bg-gray-200">
                <div className="w-40">{item.name}</div>
                <div><img src={item.image} className="w-20"/></div></div>
              </Link>
            )
          })}
        </div>
        <div>
          <img
            src="https://adminbeauty.hvnet.vn/images/logomoi-compressor.png?v=10042020"
            alt=""
          />
        </div>
        <div className="flex justify-between ">
          <div>
           <ul>
           <li className="inline-block group relative">
            <Link className="hover:text-black ">
              <i className="fas fa-user text-black"></i><button className="mr-4  border border-green-400 rounded p-1"> Tài khoản</button>
            </Link>
            <ul
              className="absolute text-black z-50 left-0 w-[100px] mt-14 opacity-0 invisible 
                group-hover:opacity-100 group-hover:visible group-hover:mt-5
                transition-all duration-500 shadow-md bg-white"
            >
              {!isLogged && (
                <>
                  <li className="p-2">
                    {" "}
                    <Link to="/user/signup">Đăng kí</Link>
                  </li>
                  <li className="p-2">
                    {" "}
                    <Link to="/user/signin">Đăng nhập</Link>
                  </li>
                </>
              )}
              {isLogged && (
                <>
                <li className="p-2">
                  <Link to={user.role == 1 ?"/admin/dashboard" : "/user/dashboard"}>Đăng nhập</Link>
                </li>
                <li className="p-2">
                  <a
                    href=""
                    activeClassName="active"
                    style={{ cursor: "pointer" }}
                    onClick={() =>
                      SignOut(() => {
                        setIsLogged(false);
                        history.push("/");
                      })
                    }
                  >
                    {" "}
                    Đăng xuất
                  </a>
                </li>
                </>
              )}
            </ul>
          </li>
           </ul>
      
          </div>
          <div>  <button className="mr-4 border border-green-400 rounded p-1">
            Giỏ hàng
          </button></div>
        
        </div>
      </nav>
      <nav>
        <ul className="flex bg-[#1f601f] justify-around py-3 text-white ">
          <li>
            <Link to="/" className="px-4">
              {" "}
              Trang chủ
            </Link>
          </li>
          <li>
            {" "}
            <Link to="/about" className="px-4">
              Giới thiệu
            </Link>
          </li>
          <li  className="inline-block group relative">
            <Link to="/products" >
            <i className="fas fa-user text-black"></i>San Pham
              
            </Link>
            <ul   className="absolute text-black z-50 left-0 w-[200px] mt-14 opacity-0 invisible 
                group-hover:opacity-100 group-hover:visible group-hover:mt-5
                transition-all duration-500 shadow-md bg-white">
                
                 {props.category.map((item)=>{
                   return(
                     <li>
                       <Link to={`/category/${item._id}` } className="block p-2 bg-white">{item.name}</Link>
                     </li>
                   );
                 })}

            </ul>
          </li>
          <li>
            <Link to="/contact">Liên hệ</Link>
          </li>
          <li>
            <Link to="/user/dashboard" className="px-4">
              {" "}
              Dashbosrd
            </Link>
          </li>
          {/* <li className="inline-block group relative">
            <Link className="hover:text-black ">
              <i className="fas fa-user text-black"></i> Tài khoản
            </Link>
            <ul
              className="absolute text-black z-50 left-0 w-[100px] mt-14 opacity-0 invisible 
                group-hover:opacity-100 group-hover:visible group-hover:mt-5
                transition-all duration-500 shadow-md bg-white"
            >
              {!isLogged && (
                <>
                  <li className="p-2">
                    {" "}
                    <Link to="/user/signup">Đăng kí</Link>
                  </li>
                  <li className="p-2">
                    {" "}
                    <Link to="/user/signin">Đăng nhập</Link>
                  </li>
                </>
              )}
              {isLogged && (
                <li className="p-2">
                  <a
                    href=""
                    activeClassName="active"
                    style={{ cursor: "pointer" }}
                    onClick={() =>
                      SignOut(() => {
                        setIsLogged(false);
                        history.push("/");
                      })
                    }
                  >
                    {" "}
                    Đăng xuất
                  </a>
                </li>
              )}
            </ul>
          </li> */}
        </ul>
      </nav>
    </div>
  );
};

export default Header;
