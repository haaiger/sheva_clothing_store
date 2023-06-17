import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import FullCard from "./components/Card/FullCard/FullCard";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="/full/:id" element={<FullCard />} />
        </Route>
      </Routes>

      <Footer />
    </>
  );
}

export default App;
