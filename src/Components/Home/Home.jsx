import styles from "./home.module.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <main className={styles.main_Rew}>
      <div className={styles.upper_Main__Wrapper}>
        <div className={styles.left_Upper}></div>
        <div className={styles.right_Upper}>
          <h2>25 Greats and Ease React Projects</h2>
          <span>Practice is everithing!</span>
          <button className={styles.start}>Start now, is free!</button>
        </div>
      </div>
      <div className={styles.separator}>
        <h2>What You can Find In Here</h2>
      </div>
      <div className={styles.down_Main__Wrapper}>
        <Link to="/UseState">
          <div className={styles.hooks}>
            <div className={styles.wrapper_up}>
              <img src="src/assets/react_logo.svg" alt="React Logo" />
              <p>UseState()</p>
            </div>
            <div className={styles.wrapper_down}></div>
          </div>
        </Link>

        <div className={styles.hooks}>
          <div className={styles.wrapper_up}>
            <img src="src/assets/react_logo.svg" alt="React Logo" />
            <p>UseEffect()</p>
          </div>
          <div className={styles.wrapper_down}></div>
        </div>
        <div className={styles.hooks}>
          <div className={styles.wrapper_up}>
            <img src="src/assets/react_logo.svg" alt="React Logo" />
            <p>Props</p>
          </div>
          <div className={styles.wrapper_down}></div>
        </div>
        <div className={styles.hooks}>
          <div className={styles.wrapper_up}>
            <img src="src/assets/react_logo.svg" alt="React Logo" />
            <p>API</p>
          </div>
          <div className={styles.wrapper_down}></div>
        </div>
        <div className={styles.hooks}>
          <div className={styles.wrapper_up}>
            <img src="src/assets/react_logo.svg" alt="React Logo" />
            <p>Components</p>
          </div>
          <div className={styles.wrapper_down}></div>
        </div>
      </div>
      <div className={styles.down_Main__Wrapper}>
        <Link to="/Dropdown">
          <div className={styles.hooks}>
            <div className={styles.wrapper_up}>
              <img src="src/assets/react_logo.svg" alt="React Logo" />
              <p>Dropdown</p>
            </div>
            <div className={styles.wrapper_down}></div>
          </div>
        </Link>
        <Link to="/RandomColor">
          <div className={styles.hooks}>
            <div className={styles.wrapper_up}>
              <img src="src/assets/react_logo.svg" alt="React Logo" />
              <p>Random Color</p>
            </div>
            <div className={styles.wrapper_down}></div>
          </div>
        </Link>

        <div className={styles.hooks}>
          <div className={styles.wrapper_up}>
            <img src="src/assets/react_logo.svg" alt="React Logo" />
            <p>Props</p>
          </div>
          <div className={styles.wrapper_down}></div>
        </div>
        <div className={styles.hooks}>
          <div className={styles.wrapper_up}>
            <img src="src/assets/react_logo.svg" alt="React Logo" />
            <p>API</p>
          </div>
          <div className={styles.wrapper_down}></div>
        </div>
        <div className={styles.hooks}>
          <div className={styles.wrapper_up}>
            <img src="src/assets/react_logo.svg" alt="React Logo" />
            <p>Components</p>
          </div>
          <div className={styles.wrapper_down}></div>
        </div>
      </div>
    </main>
  );
}

export default Home;
