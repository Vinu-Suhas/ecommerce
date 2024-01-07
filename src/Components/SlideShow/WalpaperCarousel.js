import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const WallpaperCarousel = () => {
  const wallpaperData = [
    "https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/b6d0f4b7a5e55fbc.jpg?q=20",
    "https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/585a93b0ebfd39c2.jpg?q=20",
    "https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/fd68bbdcaea79197.jpg?q=20",
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 2,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <Slider {...settings}>
      {wallpaperData.map((wallpaper, index) => (
        <div key={index}>
          <img
            src={wallpaper}
            alt={`Wallpaper ${index + 1}`}
            style={{ width: "100%", height: "auto" }}
          />
        </div>
      ))}
    </Slider>
  );
};
