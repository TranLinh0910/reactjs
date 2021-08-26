import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory, useParams } from "react-router";
import productsApi from "../../../api/ProductApi";
import firebase from "../../../firebase";

const EditProduct = ({ onEdit, category }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [product, setProduct] = useState([]);
  const { id } = useParams();
  //lấy tất cả các thông tin của sp
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const { data: products } = await productsApi.get(id);
        setProduct(products);
        reset(products);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProduct();
  }, []);
  const history = useHistory();
  const onHandleSubmit = () => {
    //trường hợp ko chọn ảnh
    if (document.querySelector("#update-image").value == "") {
      const product = {
        name: document.querySelector("#update-name").value,
        cateId: document.querySelector("#update-cateId").value,
        image: document.querySelector("#update-hidden-image").value,
        price: document.querySelector("#update-price").value,
        quantity: document.querySelector("#update-quantity").value,
        
      };
      onEdit(id, product);
      history.push("/admin/products");
      //trường hợp chọn ảnh
    } else {
      const productImage = document.querySelector("#update-image").files[0];
      let storageRef = firebase.storage().ref(`images/${productImage.name}`);
      storageRef.put(productImage).then(function () {
        storageRef.getDownloadURL().then((url) => {
          const product = {
            name: document.querySelector("#update-name").value,
            cateId: document.querySelector("#update-cateId").value,
            image: url,
            price: document.querySelector("#update-price").value,
            quantity: document.querySelector("#update-quantity").value,
            
          };
          onEdit(id, product);
          history.push("/admin/products");
        });
      });
    }
  };
  return (
    <div >
     <h1 className="text-3xl text-center  font-bold text-gray-900">Sửa Sản Phẩm</h1>
      <form action="" onSubmit={handleSubmit(onHandleSubmit)}>
      <label htmlFor="product-name">Tên sản phẩm</label>
        <input
          {...register("name", { required: true })}
          type="text"
          name=""
          id="update-name"
          className="border border-green-200 rounded p-1 w-full"
          defaultValue={product.name}
        />
        {errors.name && <span className="mt-2">This field is required</span>}
        <label htmlFor="product-name">Ảnh sản phẩm</label>
        <input
          type="file"
          name=""
          id="update-image"
          className="border border-green-200 rounded p-1 w-full"
        />
        
        <img src={product.image} alt="" className="w-40" />
        <input
          type="hidden"
          name=""
          id="update-hidden-image"
          defaultValue={product.image}
        />
        <div className="mb-2">
         <div className="mb-2">
         <label>Danh mục sản phẩm</label>
         </div>
       <select className="p-2 border border-gray-300" name="" defaultValue={product.cateId} id="update-cateId" {...register('cateId')}>
          {category.map(item=>{
            return <option value={item._id}>{item.name}</option>
          })}
        </select>
       </div>
       <label htmlFor='product-price'>Giá sản phẩm</label>
      
       <input
                        type='number'
                        className='border border-green-200 rounded p-1 w-full'
                        id='update-price'
                        defaultValue={product.price}
                        placeholder='Giá sản phẩm'
                        {...register("price", { required: true, min: 0 })}
                    />
                   
                    {errors.price && (
                        <span className='text-danger mt-2'>
                            giá sản phẩm phải lớn hơn 0
                        </span>
                    )}
                    <label htmlFor='product-price'>Số lượng sản phẩm</label>
        <input
                        type='number'
                        className='border border-green-200 rounded p-1 w-full'
                        id='update-quantity'
                        defaultValue={product.quantity}
                        placeholder='Số lượng sản phẩm'
                        {...register("quantity", { required: true, min: 0 })}
                    />
                    
                    {errors.price && (
                        <span className='text-danger mt-2'>
                            số lượng sản phẩm phải lớn hơn 0
                        </span>
                    )}
       
        <button type="submit" className="border border-green-400 rounded p-1 mb-4 mt-4">
          {" "}
          Update
        </button>
      </form>
    </div>
  );
};

export default EditProduct;
