import React from "react";

const Contact = () => {
  return (
    <div>
       
      <div className=" text-lg font-medium border-dotted border-b-2 border-light-blue-500 mt-6">
        GỬI THÔNG TIN LIÊN HỆ
      </div>
      <div className="grid  grid-cols-2 mx-auto gap-4 mt-8 ">
        <div>
          <p>BEAUTY GARDEN - HỆ THỐNG PHÂN PHỐI MỸ PHẨM CHÍNH HÃNG</p>
          <label>Họ tên</label>
          <input
            type="text "
            className="border border-green-200 rounded p-1 w-full"
            placeholder="Vui lòng nhập họ và tên..."
          />
         <label>Số điện thoại</label>
          <input
            type="text "
            className="border border-green-200 rounded p-1 w-full"
            placeholder="Vui lòng nhập số điện thoại..."
          />
         <label>Email</label>
          <input
            type="text "
            className="border border-green-200 rounded p-1 w-full"
            placeholder="Vui lòng nhập email..."
          />
          <label>Nội dung</label>
          <textarea
            className="border border-green-200 rounded p-1 w-full"
            id="content"
            placeholder=""
          ></textarea>
          <button className=" border border-green-400 rounded p-1 mb-4">Gửi</button>
        </div>
        <div className="mb-4">
        <iframe   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3928.8353936675835!2d105.77405951461576!3d10.030438692830304!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31a08971e3f5f793%3A0xc181dffcb885ba2e!2zQmVhdXR5IEdhcmRlbiAoSOG7hyBUaOG7kW5nIE3hu7kgUGjhuqltIENow61uaCBIw6NuZyk!5e0!3m2!1svi!2s!4v1621952818503!5m2!1svi!2s" width={600} height={350} style={{border: 0}} allowFullScreen loading="lazy" />


        </div>
      </div>
    </div>
  );
};

export default Contact;
