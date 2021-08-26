import React from "react";

const Footer = () => {
  return (
    <div className="bg-gray-100 ">
      <div className="grid   grid-cols-4 mx-auto gap-4 ">
        <div className=" ">
          <p className=" text-lg font-medium border-dotted border-b-2 border-light-blue-500">
            HỆ THỐNG CỬA HÀNG
          </p>
          <p className="text-sm">Quận 3 TP Hồ Chí Minh</p>
          <p className="text-sm">Hà Nội -150 Chùa Bộc, Đống Đa, Hà Nội</p>
          <p className="text-sm">Hà Nội -165C Xuân Thủy, Cầu Giấy, Hà Nội</p>
          <p className="text-sm">
            Đà Nẵng -264 Trung Nữ Vương, P.Bình Thuận, Q.Hải Châu
          </p>
        </div>
        <div>
          <p className=" text-lg font-medium border-dotted border-b-2 border-light-blue-500">
            VỀ CHÚNG TÔI
          </p>
          <p className="text-sm">Hệ thống cửa hàng</p>
          <p className="text-sm">Giới thiệu Beautygarden</p>
          <p className="text-sm">Liên kết</p>
        </div>
        <div>
          <p className=" text-lg font-medium border-dotted border-b-2 border-light-blue-500">
          
            HỖ TRỢ
          </p>
          <p className="text-sm">Giải đáp thắc mắc</p>
          <p className="text-sm">Hướng dẫn mua hàng</p>
          <p className="text-sm">Chính sách đổi trả</p>
        </div>
        <div>
          <p className=" text-lg font-medium border-dotted border-b-2 border-light-blue-500">
            
            ĐĂNG KÝ NHẬN THÔNG TIN
          </p>
          <input
            type="buton"
            className="placeholder-gray-500 border-2 border-green-200 rounded p-1 mt-2"
            placeholder="Vui lòng nhập mail..."
          />
          <button className=" border border-green-400 rounded p-1">Gửi</button>
        </div>
        <div>
          <p className=" text-lg font-medium border-dotted border-b-2 border-light-blue-500">
            TRỤ SỞ CHÍNH
          </p>
          <p className="text-sm">
            Địa chỉ: 255 Bình Lợi, P. 13, Q. Bình Thạnh. Tp.HCM Tel: 02 873 000
            283 - Email: info@beautygarden.vn Website: www.beautygarden.vn
          </p>
        </div>
        <div>
          
        </div>
      </div>
    </div>
  );
};

export default Footer;
