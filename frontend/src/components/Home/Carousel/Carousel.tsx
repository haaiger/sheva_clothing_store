import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "./Carousel.css";
import styles from "./Carousel.module.css";
import { IProduct } from "../../../types/common";

const Carousel = ({ products }: { products: IProduct[] | null }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    adaptiveHeight: true,
    initialSlide: 1,
    autoplay: true,
  };

  return (
    <div className={styles.carousel}>
      <Slider {...settings}>
        {products &&
          products.map((product: IProduct, index: number) => (
            <div key={index} className={styles.wrapperImage}>
              <Link to={`/full/${product.id}`}>
                <img
                  key={product.id}
                  src={product.photos[3]}
                  alt={`Image ${product.id}`}
                  className={styles.image}
                />
              </Link>
            </div>
          ))}
      </Slider>
    </div>
  );
};

export default Carousel;
