import { StarOutlined } from "@ant-design/icons";
import "./Card.css";
const Card = ({ data }) => {
  const { price, address, location, size, imgSrc, beds, bathrooms, popular } =
    data;
  return (
    <div className="cardContainer">
      <div className="imgContainer">
        <img src={imgSrc} alt="Property" />
      </div>
      {popular ? (
        <h4 className="Badge">
          <StarOutlined /> Popular
        </h4>
      ) : null}
      <div className="cardContent">
        <h3>
          <span className="price">{price}₹</span>/month
        </h3>
        <h2>{location}</h2>
        <address>{address}</address>
        <hr />
        <div className="propertyInfo">
          {beds} beds | {bathrooms} bathrooms | {size} m<sup>2</sup>
        </div>
      </div>
    </div>
  );
};

export default Card;
