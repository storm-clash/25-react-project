import styles from "./color.module.css";
import React, { useState, useEffect } from "react";

function RandomColor() {
  const [selectedRadio, setSelectedRadio] = useState("HSL");
  const [numColors, setNumColors] = useState(6);
  const [colors, setColors] = useState([]);

  const handleRadioChange = (e) => {
    setSelectedRadio(e.target.value);
    console.log(e.target.value);
  };

  const generateRandomColors = (numColors) => {
    let newColors = [];
    if (selectedRadio === "HSL") {
      for (let i = 0; i < numColors; i++) {
        const hue = Math.floor(Math.random() * 360);
        const saturation = Math.floor(Math.random() * 101);
        const lightness = Math.floor(Math.random() * 101);
        newColors.push(`hsl(${hue}, ${saturation}%, ${lightness}%)`);
      }
    } else if (selectedRadio === "Hex") {
      for (let i = 0; i < numColors; i++) {
        const randomHex =
          "#" + Math.floor(Math.random() * 16777215).toString(16);
        newColors.push(randomHex);
      }
    } else if (selectedRadio === "RGB") {
      for (let i = 0; i < numColors; i++) {
        const red = Math.floor(Math.random() * 256);
        const green = Math.floor(Math.random() * 256);
        const blue = Math.floor(Math.random() * 256);
        newColors.push(`rgb(${red}, ${green}, ${blue})`);
      }
    }
    setColors(newColors);
  };

  useEffect(() => {
    generateRandomColors(numColors);
  }, [selectedRadio, numColors]);

  const copyToClipboard = (color) => {
    navigator.clipboard
      .writeText(color)
      .then(() => {
        alert(`Copied: ${color}`);
      })
      .catch((err) => {
        alert("Failed to copy!");
        console.error("Copy error: ", err);
      });
  };

  const getLuminance = (color) => {
    let r, g, b;

    if (color.startsWith("rgb")) {
      [r, g, b] = color.match(/\d+/g).map(Number);
    } else if (color.startsWith("hsl")) {
      const [h, s, l] = color.match(/\d+/g).map(Number);
      const c = (1 - Math.abs((2 * l) / 100 - 1)) * (s / 100);
      const x = c * (1 - Math.abs(((h / 60) % 2) - 1));
      const m = l / 100 - c / 2;

      let r1, g1, b1;
      if (h >= 0 && h < 60) {
        [r1, g1, b1] = [c, x, 0];
      } else if (h >= 60 && h < 120) {
        [r1, g1, b1] = [x, c, 0];
      } else if (h >= 120 && h < 180) {
        [r1, g1, b1] = [0, c, x];
      } else if (h >= 180 && h < 240) {
        [r1, g1, b1] = [0, x, c];
      } else if (h >= 240 && h < 300) {
        [r1, g1, b1] = [x, 0, c];
      } else {
        [r1, g1, b1] = [c, 0, x];
      }

      r = Math.round((r1 + m) * 255);
      g = Math.round((g1 + m) * 255);
      b = Math.round((b1 + m) * 255);
    } else if (color.startsWith("#")) {
      r = parseInt(color.slice(1, 3), 16);
      g = parseInt(color.slice(3, 5), 16);
      b = parseInt(color.slice(5, 7), 16);
    }

    [r, g, b] = [r, g, b].map((val) => val / 255);

    const a = [r, g, b].map((c) =>
      c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4)
    );

    return 0.2126 * a[0] + 0.7152 * a[1] + 0.0722 * a[2];
  };

  const getTextColor = (bgColor) => {
    const luminance = getLuminance(bgColor);
    return luminance > 0.5 ? "black" : "white";
  };

  const mapColors = colors.map((color, index) => (
    <div
      className={styles.color_Wrapper}
      key={index}
      style={{
        backgroundColor: color,
        color: getTextColor(color),
      }}
    >
      {color}
      <button onClick={() => copyToClipboard(color)}>Copy</button>
    </div>
  ));

  return (
    <main className={styles.flex_Column}>
      <div className={styles.selector_Wrapper}>
        <div className={styles.flex_Row}>
          <input
            id="Hex"
            type="radio"
            name="colorType"
            value="Hex"
            checked={selectedRadio === "Hex"}
            onChange={handleRadioChange}
          />
          <label htmlFor="Hex">Hex Color</label>
        </div>
        <div className={styles.flex_Row}>
          <input
            id="rgb"
            type="radio"
            name="colorType"
            value="RGB"
            checked={selectedRadio === "RGB"}
            onChange={handleRadioChange}
          />
          <label htmlFor="rgb">RGB Color</label>
        </div>
        <div className={styles.flex_Row}>
          <input
            id="hsl"
            type="radio"
            name="colorType"
            value="HSL"
            checked={selectedRadio === "HSL"}
            onChange={handleRadioChange}
          />
          <label htmlFor="hsl">HSL Color</label>
        </div>
      </div>
      <button onClick={() => generateRandomColors(numColors)}>More</button>
      <div className={styles.scolor_Display__Wrapper}>
        {colors.length > 0 ? mapColors : null}
      </div>
    </main>
  );
}

export default RandomColor;
