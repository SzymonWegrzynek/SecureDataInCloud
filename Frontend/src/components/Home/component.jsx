import "./style.scss";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <main className="home">
      <section>
        <div className="link">
          <NavLink className="decrypt" to="/decrypt">
            ODSZYFRUJ DANE
          </NavLink>
        </div>
        <div className="link">
          <NavLink className="encrypt" to="/encrypt">
            ZASZYFRUJ DANE
          </NavLink>
        </div>
      </section>
    </main>
  );
};

export default Home;
