import { useState } from "react";
import setData from "../../../redux/actions/filterActions";
import { useDispatch } from "react-redux";
import "./Filter.css";

const Filter = () => {
  const dispatch = useDispatch();
  const location = [
    "Select",
    "Delhi",
    "Punjab",
    "Uttarakhand",
    "Varanasi",
    "Agra",
    "Mysore",
    "Jaipur",
    "Mumbai",
    "Chennai",
    "Kerala",
  ];

  const minPrice = [
    "Select",
    3000,
    6000,
    9000,
    12000,
    15000,
    18000,
    21000,
    24000,
  ];

  const maxPrice = [
    "Select",
    6000,
    9000,
    12000,
    15000,
    18000,
    21000,
    24000,
    27000,
  ];

  const property = [
    "Select",
    "Apartment",
    "Indepandent House",
    "Independent floor",
    "Duplex",
    "Penthouse",
    "Villa",
  ];

  const [propertyLocation, setPropertyLocation] = useState("");
  const [listingDate, setListingDate] = useState("");
  const [propertyMinPrice, setPropertyMinPrice] = useState(0);
  const [propertyMaxPrice, setPropertyMaxPrice] = useState(0);
  const [propertType, setPropertyType] = useState("");

  const selectedData = {
    location: propertyLocation,
    date: listingDate,
    minPrice: parseInt(propertyMinPrice),
    maxPrice: parseInt(propertyMaxPrice),
    type: propertType,
  };

  return (
    <div className="filterContainer">
      <div>
        <h5 className="filterHeading filterLocation">Location : </h5>
        <select
          onChange={(e) => {
            setPropertyLocation(e.target.value);
          }}
        >
          {location.map((data, index) => (
            <option className="locOp" key={index} value={data}>
              {data}
            </option>
          ))}
        </select>
      </div>
      <div>
        <h5 className="filterHeading filterDate">Select Move In Date :</h5>
        <input
          onChange={(e) => {
            setListingDate(e.target.value);
          }}
          type="date"
          placeholder="MM/DD/YYYY"
        />
      </div>
      <div>
        <h5 className="filterHeading filterMinPrice">Min Price :</h5>
        <select
          onChange={(e) => {
            setPropertyMinPrice(e.target.value);
          }}
        >
          {minPrice.map((data, index) => (
            <option key={index}>{data} ₹</option>
          ))}
        </select>
      </div>

      <div>
        <h5 className="filterHeading filterMaxPrice">Max Price :</h5>
        <select
          onChange={(e) => {
            setPropertyMaxPrice(e.target.value);
          }}
        >
          {maxPrice.map((data, index) => (
            <option key={index}>{data} ₹</option>
          ))}
        </select>
      </div>
      <div>
        <h5 className="filterHeading filterProperty">Property Type :</h5>
        <select
          onChange={(e) => {
            setPropertyType(e.target.value);
          }}
        >
          {property.map((data, index) => (
            <option key={index}>{data}</option>
          ))}
        </select>
      </div>
      <button
        className="filterBtn"
        onClick={() => dispatch(setData(selectedData))}
      >
        Search
      </button>
    </div>
  );
};
export default Filter;
