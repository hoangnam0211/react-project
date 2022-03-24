import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "./SliderBrand.scss";

const SliderBrand = () => {
  return (
    <section className="SliderBrand">
      <div className="container">
        <div className="wrapper">
          <Swiper
            navigation={true}
            modules={[Navigation]}
            spaceBetween={50}
            slidesPerView={5}
            arrow={"true"}
          >
            <SwiperSlide>
              <img
                src="https://electro.madrasthemes.com/wp-content/uploads/2021/03/themeforest1.png"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://electro.madrasthemes.com/wp-content/uploads/2021/03/themeforest2.png"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://electro.madrasthemes.com/wp-content/uploads/2021/03/themeforest3.png"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://electro.madrasthemes.com/wp-content/uploads/2021/03/themeforest4.png"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://electro.madrasthemes.com/wp-content/uploads/2021/03/themeforest5.png"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://electro.madrasthemes.com/wp-content/uploads/2021/03/themeforest6.png"
                alt=""
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default SliderBrand;
