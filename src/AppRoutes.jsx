import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Home from "./Components/Home/Home";
import Footer from "./Components/Footer/Footer";
import UseState from "./Components/UseState/UseState";
import Dropdown from "./Components/Dropdown/Dropdown";
import RandomColor from "./Components/RandomColor/RandomColor";
import StarRating from "./Components/StarRating/StarRating";

function AppRoutes() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Main" element={<Main />} />
        <Route path="/UseState" element={<UseState />} />
        <Route path="/Dropdown" element={<Dropdown />} />
        <Route path="/RandomColor" element={<RandomColor />} />
        <Route path="/Stars" element={<StarRating />} />
      </Routes>
      <Footer />
    </>
  );
}

export default AppRoutes;
