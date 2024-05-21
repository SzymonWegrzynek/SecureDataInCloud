import "./style.scss";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <main className="home">
      <section>
        <div className="link">
          <NavLink className="decrypt" to="/decrypt">
            DOWNLOAD FILE
          </NavLink>
        </div>
        <div className="link">
          <NavLink className="encrypt" to="/encrypt">
            UPLOAD FILE
          </NavLink>
        </div>
      </section>
    </main>
  );
};

export default Home;
