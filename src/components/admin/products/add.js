import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";
import firebase from "../../../firebase";
const ProductAddPage = ({ onAdd, category }) => {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();
  const history = useHistory();
  const onHandleSubmit = (data) => {
    const productImage = document.querySelector("#product-image").files[0];
    let storageRef = firebase.storage().ref(`images/${productImage.name}`);
    storageRef.put(productImage).then(function () {
      storageRef.getDownloadURL().then((url) => {
        const product = {
          ...data,
          image: url,
        };
        console.log(product);
        onAdd(product);
        history.push("/admin/products");
      });
    });
  };
  return (
    <div>
      <h1 className="text-3xl text-center  font-bold text-gray-900">
        Thêm Sản Phẩm
      </h1>

      <form action="" className="mt-6" onSubmit={handleSubmit(onHandleSubmit)}>
        <label htmlFor="product-name">Tên sản phẩm</label>
        <input
          {...register("name", { required: true })}
          placeholder="Tên sản phẩm"
          className="border border-green-200 rounded p-1 w-full"
          id=""
          type="text"
        />
        {errors.name && <span className="text-danger mt-2"></span>}

        <label htmlFor="product-name">Ảnh sản phẩm</label>
        <input
          type="file"
          className="border border-green-200 rounded p-1 w-full"
          name=""
          id="product-image"
        />
        <div className="mb-2">
          <div className="mb-2">
            <label>Danh mục sản phẩm</label>
          </div>
          <select
            className="p-2 border border-gray-300"
            name=""
            id=""
            {...register("cateId")}
          >
            {category.map((item) => {
              return <option value={item._id}>{item.name}</option>;
            })}
          </select>
        </div>

        <label htmlFor="product-price">Giá sản phẩm</label>
        <input
          className="border border-green-200 rounded p-1 w-full"
          type="number"
          name=""
          id="product-price"
          placeholder="Giá sản phẩm"
          {...register("price", { required: true, min: 0 })}
        />
        <label htmlFor="product-price">Số lượng sản phẩm</label>
        <input
          type="number"
          name=""
          className="border border-green-200 rounded p-1 w-full"
          id="product-quantity"
          placeholder="Số lượng sản phẩm"
          {...register("quantity", { required: true, min: 0 })}
        />

        <button
          type="submit"
          className="border border-green-400 rounded p-1 mb-4 mt-4"
        >
          Thêm{" "}
        </button>
      </form>
    </div>
  );
};

export default ProductAddPage;
