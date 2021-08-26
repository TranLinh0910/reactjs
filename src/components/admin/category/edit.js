import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory, useParams } from "react-router";
import firebase from "../../../firebase";
import categoryApi from '../../../api/categoryApi'
const EditCategory = ({ onEditCate }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [category, setCategory] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    const fetchCategory= async () => {
      try {
        const { data: categories } = await categoryApi.get(id);
        setCategory(categories);
        reset(categories);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCategory();
  }, []);
  const history = useHistory();
  const onHandleSubmit = () => {
    if (document.querySelector("#update-image").value == "") {
      const category = {
        name: document.querySelector("#update-name").value,
        image: document.querySelector("#update-hidden-image").value,
      };
      onEditCate(id, category);
      history.push("/admin/categories");
    } else {
      const categoryImage = document.querySelector("#update-image").files[0];
      let storageRef = firebase.storage().ref(`images/${categoryImage.name}`);
      storageRef.put(categoryImage).then(function () {
        storageRef.getDownloadURL().then((url) => {
          const category = {
            name: document.querySelector("#update-name").value,
            image: url,
          };
          onEditCate(id, category);
          history.push("/admin/categories");
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
          className="border border-green-200 rounded p-1 w-full "
          defaultValue={category.name}
        />
        {errors.name && <span className="mb-6">This field is required</span>}
        <br />
        <label className="mb-6" htmlFor="product-name ">Ảnh sản phẩm</label>
        <input
          type="file"
          name=""
          id="update-image"
          className="border border-green-200 rounded p-1 w-full"
        />
        
        <img src={category.image} alt="" className="w-40" />
        <input
          type="hidden"
          name=""
          id="update-hidden-image"
          defaultValue={category.image} {...register('image', {required: true})}
        />
        {errors.image && <div>Bạn chưa thêm ảnh!</div>}
        <button type="submit" className="border border-green-400 rounded p-1 mb-4 mt-4">
          {" "}
          Update
        </button>
      </form>
    </div>
  );
};

export default EditCategory;
