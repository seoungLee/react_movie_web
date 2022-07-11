import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className={styles.navber}>
      <h1>
        <Link to="/react_movie_web">HomeMovie</Link>
      </h1>
    </div>
  );
}

export default Navbar;
