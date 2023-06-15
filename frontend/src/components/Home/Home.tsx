import styles from "./Home.module.css";
import Carousel from "./Carousel/Carousel";
import RandomClothes from "./RandomClothes/RandomClothes";

const Home = () => {
  return (
    <div className={styles.wrapper}>
      <Carousel />

      <RandomClothes />
    </div>
  );
};

export default Home;
