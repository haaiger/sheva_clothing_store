import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import FullCard from "./components/Card/FullCard/FullCard";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Home />} />
        <Route path="/full" element={<FullCard />} />
      </Route>
    </Routes>
  );
}

export default App;
