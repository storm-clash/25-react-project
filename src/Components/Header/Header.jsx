import styles from "./header.module.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <header>
      <div className={styles.left_Header_Wrapper}>
        <picture>
          <img className={styles.logo} src="src/assets/jm.svg" />
        </picture>
      </div>
      <div className={styles.center_Header_Wrapper}>
        <p>
          25 <img src="src/assets/react_logo.svg" alt="React Logo" />
          Project From FreeCodeCamp
        </p>
      </div>
      <div className={styles.right_Header_Wrapper}>
        <ul className={styles.header_ul}>
          <li>
            <Link to="/">
              {" "}
              <FontAwesomeIcon icon={faHouse} />
              <span>Home</span>
            </Link>
          </li>
          <li>Home</li>
          <li>Home</li>
          <li>Home</li>
          <li>Home</li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
