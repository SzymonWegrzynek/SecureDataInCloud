import "./style.scss";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div className="Home">
      <ul className="list">
        <li className="link">
          <NavLink className="nav-link" to="/decrypt">
            ODSZYFRUJ DANE
          </NavLink>
        </li>
        <li className="link">
          <NavLink className="nav-link" to="/encrypt">
            ZASZYFRUJ DANE
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Home;
