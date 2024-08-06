import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroSlider = () => {
  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="slider-container">
      <Slider {...settings} className="w-[100vw]">
        <div className="w-screen">
          <img
            className="w-full rounded-lg"
            src="https://assets.tatacliq.com/medias/sys_master/images/52727296098334.jpg"
            alt=""
          />
        </div>
        <div>
          <div className="w-screen">
            <img
              className="w-full"
              src="https://assets.tatacliq.com/medias/sys_master/images/52727295967262.jpg"
              alt=""
            />
          </div>
        </div>
        <div>
          <div className="w-screen">
            <img
              className="w-full"
              src="https://assets.tatacliq.com/medias/sys_master/images/52727296163870.jpg"
              alt=""
            />
          </div>
        </div>
        <div>
          <div className="w-screen">
            <img
              className="w-full"
              src="https://assets.tatacliq.com/medias/sys_master/images/52675364782110.jpg"
              alt=""
            />
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default HeroSlider;
