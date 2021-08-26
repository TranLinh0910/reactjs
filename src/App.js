import logo from "./logo.svg";
import "./App.css";
import Product from "./components/website/Product";
import Todoadd from "./components/website/Todoadd";
import React, { useState, useEffect } from "react";
import Routes from "./router";
import ProductApi from "./api/ProductApi";
import { Router } from "react-router";
import categoryApi from "./api/categoryApi";
import Category from "./components/admin/category";



function App() {
  //chữa dữ liệu của api lưu từ useeffect về
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: product } = await ProductApi.getAll(); 
        setProducts(product);
        //trả dữ liệu về set 
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  //Khai báo hàm
  
  const onHandLeAdd = async (pd) => {
    console.log(pd);
    try {
      await ProductApi.add(pd);
      setProducts([...products, pd]);
    } catch (error) {
      console.log(error.response.data.error);
    }
  };

  const removeItem = async (id) => {
    try {
      await ProductApi.remove(id);
      const newProducts = products.filter((item) => item._id != id);
      //lọc id nào bằng với cái id mà mình xóa thì nó sẽ xóa
      setProducts(newProducts);
    } catch (error) {
      console.log(error.response.data.error);
    }
  };
  //tạo ra hàm edit
  //truyền xuống thuộc tính edit
  //lấy id từ url
  //đổ thông tin san phẩm
  //khai báo react hook from
  //lấy dữ liệu từ form
  //gọi thuộc tính edit=>props.edit
  //truyền id với product lên app
  //từ app gọi api và đẩy product lên server
  const onHandleEdit=async(id, product)=>{
  console.log(product);
  try {
    await ProductApi.update(id, product);
    const newProducts=products.map((item)=> item._id ==id ? product:item);
    setProducts(newProducts)
  } catch (error) {
    console.log(error);
  }
  };

  const onHandleAddCategory=async(category)=>{
    console.log(category);
    try{
      await categoryApi.add(category);
      setCategory([...categories,category]);
    }catch(error){
      console.log(error);
    }
  };

  const removeCate = async (id) => {
    try {
      await categoryApi.remove(id);
      const newCategory = categories.filter((item) => item._id != id);
      setCategory(newCategory);
    } catch (error) {
      console.log(error);
    }
  };

  const[categories,setCategory]=useState([]);
  useEffect(()=>{
 const fetchCategory=async()=>{
   try {
     const {data:category}=await categoryApi.getAll();
     setCategory(category);
   }catch(error){
     console.log(error);
   }
 }
  fetchCategory()
  }, [])



  const onHandleEditCate=async(id,category)=>{
    console.log(category);
  try {
    await categoryApi.update(id, category);
    const newCategory=categories.map ((item)=> item._id ==id ? category:item);
    setCategory(newCategory)
  } catch (error) {
    console.log(error);
  }
  };

  return (
    //truyền dữ liệu bằng product bằng set
    <div className="container mx-auto">
      
      <Routes
      //trả dữ liệu state về
        category={categories}
        onDelete={removeItem}
        product={products}
        onAdd={onHandLeAdd}
        onEdit={onHandleEdit}
        onAddCate={onHandleAddCategory}
        onEditCate={onHandleEditCate}
        onDeleteCate={removeCate}
      />

      {/* <TodoList todos={todos} onDelete={removeItem}/> */}
      {/* <button onClick={() => addItem(fakeObj)}>Add item</button> */}
    </div>
  );
  }

export default App;
