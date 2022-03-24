import { useState } from "react";
import "./gallery.css";
import img1 from "./img/1.jpg";
import img2 from "./img/2.jpg";
import img3 from "./img/3.jpg";
import img4 from "./img/4.jpg";
import img5 from "./img/5.jpg";
import img6 from "./img/6.jpg";
import img7 from "./img/7.jpg";
import iconClose from "./img/close.png";

const Gallery = () => {

    const data = [
        { id: 1, src: img1 },
        { id: 2, src: img2 },
        { id: 3, src: img3 },
        { id: 4, src: img4 },
        { id: 5, src: img5 },
        { id: 6, src: img6 },
        { id: 7, src: img7 }
    ];

    const [fullScreen, setFullscreen] = useState(false);
    const [temporImgSrc, setTemporImgSrc] = useState('');



    const getImgSrc = (imgSrc) => {
        setFullscreen(true);
        setTemporImgSrc(imgSrc);
    };

    return (
        <div className="gallery">
            <div className={ fullScreen ? "bigPicture open" : "bigPicture"}>
                <img className="gallery__fullScreenImage" src={ temporImgSrc } alt="" />
                <img className="gallery__iconClose" src={ iconClose } onClick={ () => setFullscreen(false) } />
            </div>
            { data.map((item) => {
                    return (
                        <div className="gallery__itemContainer" key={ item.id } onClick={ () => getImgSrc(item.src) }>
                            <img src={ item.src } className="gallery__item" alt="img" />
                        </div>
                    )
            })}
        </div>
    )
};

export default Gallery;