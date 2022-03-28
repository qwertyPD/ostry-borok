import { Route, Routes } from "react-router-dom";
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
            <Routes>
                <Route path="/" element={ <AboutPlace /> } />
                <Route path="/gallery" element={ <Gallery /> } />
                <Route path="/howTo" element={ <HowTo /> } />
            </Routes>
                    
            <Background imageSrc={ bg } />
        </div>
    )
};

export default App;