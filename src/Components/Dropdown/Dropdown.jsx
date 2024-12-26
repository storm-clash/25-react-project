import data from "../../AccordianData";
import styles from "./drop.module.css";
import React, { useState } from "react";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomOneLight } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

function Dropdown() {
  const codeString = `iimport data from "../../AccordianData";
import styles from "./drop.module.css";
import React, { useState } from "react";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomOneLight } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

function Dropdown() {
  const [selected, setSelected] = useState(null);

  const handleSingleSelection = (currentId) => {
    setSelected(currentId === selected ? null : currentId);
  };

  const mapData = data.map((dataItem) => (
    <div className={styles.item} key={dataItem.id}>
      <div
        onClick={() => handleSingleSelection(dataItem.id)}
        className={styles.title}
      >
       <div className={styles.row}>
          <h3>{dataItem.question}</h3>
          <FontAwesomeIcon
            icon={faChevronDown}
            style={{
              transform:
                selected === dataItem.id ? "rotate(180deg)" : "rotate(0deg)",
              transition: "transform .6s ease",
            }}
          />
        </div>
    </div>
  ));

  return (
    <main className={styles.Accordion}>
      {" "}
      <h1>This is How you can Create an Accordion on React!</h1>
      <div className={styles.Accordion_Wrapper}>
        <div className={styles.accordian}>
          {data && data.length > 0 ? mapData : <div>No data Found</div>}
        </div>
      </div>
      <div className={styles.accordion_Code__Wrapper}></div>
    </main>
  );
}

export default Dropdown;`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(codeString).then(
      () => alert("Code copied to clipboard!"),
      () => alert("Failed to copy code")
    );
  };

  const [selected, setSelected] = useState(null);

  const handleSingleSelection = (currentId) => {
    setSelected(currentId === selected ? null : currentId);
  };

  const mapData = data.map((dataItem) => (
    <div className={styles.item} key={dataItem.id}>
      <div
        onClick={() => handleSingleSelection(dataItem.id)}
        className={styles.title}
      >
        <div className={styles.row}>
          <h3>{dataItem.question}</h3>
          <FontAwesomeIcon
            icon={faChevronDown}
            style={{
              transform:
                selected === dataItem.id ? "rotate(180deg)" : "rotate(0deg)",
              transition: "transform .6s ease",
            }}
          />
        </div>

        {selected === dataItem.id ? (
          <div className={styles.content}>{dataItem.answer}</div>
        ) : null}
      </div>
    </div>
  ));

  return (
    <>
      <main className={styles.Accordion}>
        {" "}
        <h1>This is How you can Create an Accordion on React!</h1>
        <div className={styles.Accordion_Wrapper}>
          <div className={styles.accordian}>
            {data && data.length > 0 ? mapData : <div>No data Found</div>}
          </div>
        </div>
        <div className={styles.accordion_Code__Wrapper}>
          <h2>Code For it</h2>
          <SyntaxHighlighter language="javascript" style={atomOneLight}>
            {codeString}
          </SyntaxHighlighter>
          <button onClick={copyToClipboard}>Copy Code</button>
        </div>
      </main>
    </>
  );
}

export default Dropdown;
