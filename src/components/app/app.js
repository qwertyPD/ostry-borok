import { Routes, Route, Link } from "react-router-dom";
import AboutPlace from "../pages/aboutPlace/aboutPlace";
import Gallery from "../pages/gallery/gallery";
import HowTo from "../pages/howTo/howTo";
import Background from "../background/background";
import bg from "../assets/bg.jpeg";
import Navbar from "../navbar/navbar";

const App = () => {
    return (
        <div className="App">
            <Navbar />
            {/* <AboutPlace /> */}
            <Gallery />
            <Background imageSrc={ bg } />
        </div>
    )
};

export default App;