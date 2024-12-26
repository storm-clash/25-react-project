import styles from "./rating.module.css";
import React, { useState } from "react";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomOneLight } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleUser,
  faUser,
  faUserTie,
  faPhone,
  faEnvelope,
  faStar,
} from "@fortawesome/free-solid-svg-icons";

function StarRating() {
  const codeString = `import styles from "./rating.module.css";
import React, { useState } from "react";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomOneLight } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleUser,
  faUser,
  faUserTie,
  faPhone,
  faEnvelope,
  faStar,
} from "@fortawesome/free-solid-svg-icons";

function StarRating() {
  const [contact, setContact] = useState(true);
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const handleClick = (currentIndex) => {
    setRating(currentIndex);
  };

  const handleMouseEnter = (currentIndex) => {
    setHover(currentIndex);
  };

  const handleMouseLeave = (currentIndex) => {
    setHover(rating);
  };

  const mapStar = [...Array(5)].map((_, index) => {
    index += 1;
    return (
      <FontAwesomeIcon
        icon={faStar}
        key={index}
        className={index <= (hover || rating) ? styles.active : styles.inactive}
        onClick={() => handleClick(index)}
        onMouseMove={() => handleMouseEnter(index)}
        onMouseLeave={() => handleMouseLeave()}
      />
    );
  });

  const copyToClipboard = () => {
    navigator.clipboard.writeText(codeString).then(
      () => alert("Code copied to clipboard!"),
      () => alert("Failed to copy code")
    );
  };

  return (
    <main className="flex_Column">
      <h2>Star Rating in REACT</h2>
      <div className={styles.card_Wrapper}>
        <div className={styles.left_Card__Wrapper}>
          <div className={styles.left_Up__Wrapper}>
            <FontAwesomeIcon icon={faCircleUser} className={styles.icon} />
          </div>
          <div className={styles.left_Dowm__Wrapper}>{mapStar}</div>
        </div>
        <div className={styles.right_Card__Wrapper}>
          <h4>User Profile</h4>
          <div className="flex_Row">
            <FontAwesomeIcon icon={faUser} className={styles.icon_Right} />
            <p>Jesus Manuel Garcia Valladares</p>
          </div>
          <div className="flex_Row">
            <FontAwesomeIcon icon={faUserTie} className={styles.icon_Right} />
            <p>Software Engineer</p>
          </div>
          <div className="flex_Row">
            <FontAwesomeIcon icon={faPhone} className={styles.icon_Right} />
            <p>775-846-2367</p>
          </div>
          <div className="flex_Row">
            <FontAwesomeIcon icon={faEnvelope} className={styles.icon_Right} />
            <p>profile@gmail.com</p>
          </div>
          <div className="flex_Row">
            <input
              type="checkbox"
              name="contact"
              value={contact}
              id="profile_Check"
              className={styles.check}
            />
            <label htmlFor="profile_Check">Can Contact</label>
          </div>
        </div>
      </div>
      <div className={styles.code_Wrapper}>
        <h2>Code For it</h2>
        <SyntaxHighlighter language="javascript" style={atomOneLight}>
          {codeString}
        </SyntaxHighlighter>
        <button onClick={copyToClipboard}>Copy Code</button>
      </div>
    </main>
  );
}

export default StarRating;
`;
  const [contact, setContact] = useState(true);
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const handleClick = (currentIndex) => {
    setRating(currentIndex);
  };

  const handleMouseEnter = (currentIndex) => {
    setHover(currentIndex);
  };

  const handleMouseLeave = (currentIndex) => {
    setHover(rating);
  };

  const mapStar = [...Array(5)].map((_, index) => {
    index += 1;
    return (
      <FontAwesomeIcon
        icon={faStar}
        key={index}
        className={index <= (hover || rating) ? styles.active : styles.inactive}
        onClick={() => handleClick(index)}
        onMouseMove={() => handleMouseEnter(index)}
        onMouseLeave={() => handleMouseLeave()}
      />
    );
  });

  const copyToClipboard = () => {
    navigator.clipboard.writeText(codeString).then(
      () => alert("Code copied to clipboard!"),
      () => alert("Failed to copy code")
    );
  };

  return (
    <main className="flex_Column">
      <h2>Star Rating in REACT</h2>
      <div className={styles.card_Wrapper}>
        <div className={styles.left_Card__Wrapper}>
          <div className={styles.left_Up__Wrapper}>
            <FontAwesomeIcon icon={faCircleUser} className={styles.icon} />
          </div>
          <div className={styles.left_Dowm__Wrapper}>{mapStar}</div>
        </div>
        <div className={styles.right_Card__Wrapper}>
          <h4>User Profile</h4>
          <div className="flex_Row">
            <FontAwesomeIcon icon={faUser} className={styles.icon_Right} />
            <p>Jesus Manuel Garcia Valladares</p>
          </div>
          <div className="flex_Row">
            <FontAwesomeIcon icon={faUserTie} className={styles.icon_Right} />
            <p>Software Engineer</p>
          </div>
          <div className="flex_Row">
            <FontAwesomeIcon icon={faPhone} className={styles.icon_Right} />
            <p>775-846-2367</p>
          </div>
          <div className="flex_Row">
            <FontAwesomeIcon icon={faEnvelope} className={styles.icon_Right} />
            <p>profile@gmail.com</p>
          </div>
          <div className="flex_Row">
            <input
              type="checkbox"
              name="contact"
              value={contact}
              id="profile_Check"
              className={styles.check}
            />
            <label htmlFor="profile_Check">Can Contact</label>
          </div>
        </div>
      </div>
      <div className={styles.code_Wrapper}>
        <h2>Code For it</h2>
        <SyntaxHighlighter language="javascript" style={atomOneLight}>
          {codeString}
        </SyntaxHighlighter>
        <button onClick={copyToClipboard}>Copy Code</button>
      </div>
    </main>
  );
}

export default StarRating;
