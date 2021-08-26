import React from 'react'
import {useForm} from "react-hook-form"
import {useHistory} from "react-router"
import firebase from '../../../firebase'
const CategoryAddPage = ({onAddCate}) => {
    const{
        register,
        handleSubmit,
        formState:{errors},
    } =useForm();
    const history=useHistory();
    const onHandleSubmit=(data)=>{
        const categoryImage=document.querySelector("#category-image").files[0];
        let storageRef =firebase.storage().ref(`images/${categoryImage.name}`);
        storageRef.put(categoryImage).then(function(){
            storageRef.getDownloadURL().then((url)=>{
            const category={
                ...data,
                image:url,
            };
            console.log(category);
            onAddCate(category);
            history.push("/admin/categories");
            });
        });
        
    };
    return (
        <div>
        
        <h1 className="text-3xl text-center  font-bold text-gray-900">Thêm Danh mục</h1>
        
        <form action="" className="mt-6" onSubmit={handleSubmit(onHandleSubmit)}>
        <label htmlFor="product-name">Tên sản phẩm</label>
            <input {...register("name",{required:true})}
            placeholder="Tên  sản phẩm" 
            className="border border-green-200 rounded p-1 w-full"
            id=""
            
            type="text" />
            
            {errors.name && (
                <span className="text-danger mt-2">Không được để trống</span>
            )}
            <div>
            <label htmlFor="product-name">Ảnh sản phẩm</label>
            <input type="file"
            className="border border-green-200 rounded p-1 w-full" name=""
            id="category-image" {...register('image', {required: true})}/>
              {errors.image && <div>Bạn chưa thêm ảnh!</div>}
             
            
            <button type="submit" className="border border-green-400 rounded p-1 mb-4 mt-4">Thêm </button>
            </div>
        </form>
        </div>
    )
}

export default CategoryAddPage
