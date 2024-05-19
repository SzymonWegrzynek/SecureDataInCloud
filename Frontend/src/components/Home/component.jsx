import "./style.scss";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <main className="home">
      <section>
        <div className="link">
          <NavLink className="decrypt" to="/decrypt">
            DECRYPT DATA
          </NavLink>
        </div>
        <div className="link">
          <NavLink className="encrypt" to="/encrypt">
            ENCRYPT DATA
          </NavLink>
        </div>
      </section>
    </main>
  );
};

export default Home;
