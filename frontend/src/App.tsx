import { Route, Routes } from "react-router-dom";
import styles from "./App.module.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import FullCard from "./components/Card/FullCard/FullCard";
import Footer from "./components/Footer/Footer";
import AboutUs from "./components/AboutUs/AboutUs";
import Contacts from "./components/Contacts/Contacts";
import Favorites from "./components/Favorites/Favorites";
import Catalog from "./components/Catalog/Catalog";
import Search from "./components/Search/Search";

function App() {
  return (
    <div className={styles.wrapper}>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="/full/:id" element={<FullCard />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/search" element={<Search />} />
        </Route>
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
