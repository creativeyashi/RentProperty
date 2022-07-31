import { AreaChartOutlined } from "@ant-design/icons";
import "./Header.css";

const Nav = () => {
  return (
    <div className="Header">
      <h1 className="Hero">
        <AreaChartOutlined /> Estatery
      </h1>
      <div className="Items-Conteiner">
        <h3 className="h3Active headerItems">Rent</h3>
        <h3 className="headerItems">Buy</h3>
        <h3 className="headerItems">Sell</h3>
      </div>
      {/* <div className="Btn_Container">
        <button>LogIn</button>
        <button>SignIn</button>
      </div> */}
    </div>
  );
};

export default Nav;
