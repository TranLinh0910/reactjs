import React from "react";
import { Link } from "react-router-dom";

const AboutPage = () => {
  return (
    <div>
      
      <section>
         <div className="flex bd-highlight mb-3">
          
          <div className="p-2 bd-highlight">
            <Link to="/" style={{textDecoration: 'none', color: 'black'}}> Trang chủ  </Link>
          </div>
          <div className="p-2 bd-highlight">
            /
          </div>
          <div className="p-2 bd-highlight">
            <Link to="/about" style={{textDecoration: 'none', color: 'black'}}>Giới thiệu </Link>
          </div>
        </div>
     
      </section> 
      <div className="grid grid-cols-2 gap-4">
        <div className="mt-8">
          <img
            src="https://beautygarden.vn/lib/images/left_img.png?v=001"
            alt=""
          />
        </div>
        <div className="mt-8">
          <p className="text-6xl text-right text-green-900"> Beauty Garden </p>
          <p className="text-2xl text-center text-green-900"> WHERE </p>
          <p className="text-2xl  text-center text-green-900">BEAUTY SHINES</p>
          <div className="flex mt-9 ">
            <img
              className="mx-8 h-[250px]"
              src="https://beautygarden.vn/lib/images/center_img.png?v=1"
              alt=""
            />
            <img
              className="h-[300px]"
              src="https://beautygarden.vn/lib/images/right-img.png?v=1  "
              width={350}
              alt=""
            />
          </div>
        </div>
      </div>
      <div className=" text-center">
        <p className="text-2xl text-green-900">
          Beauty Garden là hệ thống phân phối
        </p>
        <p className="text-2xl mb-8 text-green-900">
          Mỹ phẩm chính hãng hàng đầu Việt Nam
        </p>
        <p className="text-xl mb-8">
          Cung cấp mỹ phẩm làm đẹp chính hãng – chất lượng tốt – giá tốt nhất
          thị trường
        </p>
        <div className="flex justify-center">
          <img
          
          src="https://beautygarden.vn/lib/images/icon-img.png?v=1"
          alt=""
        /></div>
        
        <p className="text-justify mt-4 mb-4">
          Với mục tiêu mang đến cơ hội trải nghiệm các sản phẩm làm đẹp chất
          lượng tốt – giá tốt nhất thị trường, góp phần đắp đầy những vẻ đẹp
          khuyết thiếu, truyền cảm hứng dùng mỹ phẩm và giúp vẻ đẹpViệt tỏa
          sáng, Beauty Garden luôn không ngừng phấn đấu để hoàn thiện chất lượng
          dịch vụ của chính mình.
        </p>
        <p className="text-justify mb-4">
          Gần 7 năm kinh nghiệm hoạt động trong lĩnh vực mỹ phẩm làm đẹp, hiện
          đội ngũ nhân viên của Beauty Garden đã lên đến 150 người cùng hệ thống
          cửa hàng trải khắp ba miền đất nước. Beauty Garden đang dần khẳng định
          được vị thế của mình trên thương trường và chiếm được tin yêu của đông
          đảo quý khách hàng
        </p>
      </div>
      <div className="grid grid-cols-2 gap-4 bg-yellow-50">
        <div className="ml-8 mt-8 ">
          <img
            className=""
            src="https://beautygarden.vn/lib/images/left_img_w.png?v=1"
            alt=""
          />
          <p className=" text-green-900 mt-4 text-4xl">BEAUTY GARDEN</p>
          <p className="text-green-900 text-4xl">CÓ NHỮNG GÌ ?</p>
        </div>
        <div className="mt-8">
          <img
            src="https://beautygarden.vn/lib/images/right_img_w.png?v=1"
            alt=""
          />
          <p className="text-justify mt-8  ">
            Beauty Garden - Giảm Đến 60% Mỹ Phẩm Chính Hãng Tặng Nàng Ngàn Qùa
            Tặng Nhân Dịp Khai Trương 24/10/2017
          </p>
          <p className="text-justify ">
            Từ ngày 11-14/11 thương hiệu mỹ phẩm chính hãng Beauty Garden sẽ
            khai trương thêm chi nhánh mới tại thành phố Pleiku, nâng tổng số
            lên 5 cửa hàng trên toàn quốc. Với vô số ưu đãi siêu hoành tráng
            không thể bỏ lỡ: GIẢM GIÁ ĐẾN 60% - GHÉ SHOP LÀ CÓ QUÀ VÀ TRÚNG LIỀN
            HÀNG NGÀN GIẢI THƯỞNG GIÁ TRỊ. Khuyến mãi dành riêng cho những cô
            nàng đam mê làm đẹp phố Núi Gia Lai.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 ">
        <div className="text-justify mt-6">
          <p>
            Phân phối mỹ phẩm chính hãng có xuất xứ nguồn gốc rõ ràng: Hàng nhập
            khẩu, hàng nhập khẩu từ Mỹ, Pháp, Anh, Nhật, Hàn, Thái Lan,...
          </p>
          <p>
            Sản phẩm đa dạng: makeup, chăm sóc da, chăm sóc tóc, thực phẩm chức
            năng, phụ kiện làm đẹp,... đảm bảo phục vụ nhu cầu làm đẹp của chị
            em.
          </p>
          <img className="mt-4" src="https://beautygarden.vn/lib/images/center_img_for.png?v=1" alt="" />
        </div>
        <div><img className="h-[300px] w-full mt-6 mb-3" src="https://beautygarden.vn/lib/images/right_img_for.png?v=1" alt=""/></div>
      </div>
      <div>
        <div className="grid grid-cols-2 gap-4">
          <div className="mt-3 mb-8">
            <img
              className="h-[300px] w-full"
              src="https://beautygarden.vn/lib/images/left_img_fi.png?v=1"
              alt=""
            />
          </div>
          <div className="mt-3 ml-8">
            <p>
              Mỹ phẩm chính hãng – chất lượng tốt – giá tốt nhất thị trường.
            </p>
            <ul className="mt-3">
              <li className="mt-2">
                Đội ngũ nhân viên tư vấn chuyên nghiệp, giàu kinh nghiệm và tận
                tâm với nghề.
              </li>
              <li className="mt-2">
                Hệ thống 11 chi nhánh tại 3 miền khách tiện lợi đến tận nơi xem
                hàng. Dễ dàng mua hàng online qua fanpage hoặc website.
              </li>
              <li className="mt-2">Hình thức thanh toán linh hoạt: chuyển khoản, ship COD </li>
              <li className="mt-2">
                Công ty uy tín, nhiều năm kinh nghiệm phát triển trong lĩnh vực
                mỹ phẩm làm đẹp.
              </li>
              <li className="mt-2">
                Là đối tác của nhiều thương hiệu mỹ phẩm nổi tiếng The Face
                Shop, TonyMoly, The Body Shop, Mac,...sss
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
