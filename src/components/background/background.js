import "./backgroundImage.css";

const Background = ({ imageSrc }) => {
    return (
        <div className="background">
            <img src={ imageSrc } className="background__item" alt="background-image" />   
        </div>
    )
}

export default Background;