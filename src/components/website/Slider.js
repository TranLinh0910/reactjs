import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

  const Slide =()=> {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      autoplay:true,
      autoplaySpeed:2000,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div>
       
        <Slider {...settings}>
          <div>
              <img className="w-full" src="https://adminbeauty.hvnet.vn/Upload/Files/banner/Banner-Web-Ultimate-Voucher--Phat-Hanh.png?width=1170&height=450&v=15042020" alt=""/>
          </div>
          <div>
              <img className="w-full" src="https://adminbeauty.hvnet.vn/Upload/Files/banner/cover-sale-onl-web.jpg?width=1170&height=450&v=15042020" alt=""/>
          </div>
          <div>
              <img className="w-full" src="https://adminbeauty.hvnet.vn/Upload/Files/banner/hieu%20dung%20chon%20dung%20su%20dung%20dung.jpg?width=1170&height=450&v=15042020" alt=""/>
          </div>
        </Slider>
      </div>
    );
  }
  export default Slide
