import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./Carousel.css";
import styles from "./Carousel.module.css";
import image1 from "../../../../public/photo/image1.jpg";
import image2 from "../../../../public/photo/image2.jpg";

const images = [
  image1,
  image2,
  image1,
  image2,
  image1,
  image2,
  image1,
  image2,
  image1,
  image2,
  image1,
  image2,
  image1,
  image2,
  image1,
  image2,
  image1,
  image2,
];

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    adaptiveHeight: true,
    initialSlide: 1,
  };

  return (
    <div className={styles.carousel}>
      <Slider {...settings}>
        {images.map((image: string, index: number) => (
          <div key={index} className={styles.wrapperImage}>
            <img src={image} alt={`Image ${index}`} className={styles.image} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
