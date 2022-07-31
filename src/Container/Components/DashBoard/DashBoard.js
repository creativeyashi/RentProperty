import Card from "../card/Card";
import Filter from "../filterComp/Filter";
import Nav from "../header/Header.js";
import "./DashBoard.css";
import { useSelector } from "react-redux";
const DashBoard = () => {
  const state = useSelector((state) => state.filterReducer);

  return (
    <>
      <Nav />;
      <div className="main">
        <h1 className="heroHeading">Search properties to rent</h1>
        <Filter />
        <div className="cardDiv">
          {state.length ? (
            state.map((data, index) => <Card key={index} data={data} />)
          ) : (
            <h1 className="noData">No Property Available To Show</h1>
          )}
        </div>
      </div>
    </>
  );
};

export default DashBoard;
