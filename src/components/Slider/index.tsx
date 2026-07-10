import React from "react";
import { type CSSProperties } from "react";
import styles from "./index.module.css";

type SliderProps = {
  children?: React.ReactNode;
  className?: string;
};

interface SliderStyle extends CSSProperties {
  "--slides"?: number;
  "--gap"?: string;
}

// Sli8der Multiplier Size
const sliderStyle: SliderStyle = {
  "--slides": 1.2,
  "--gap": "1rem",
};

export default function Slider({ children, className }: SliderProps) {
  return (
    <div className={styles.sliderContainer}>
      <div
        className={`${styles.sliderContent} ${className}`}
        style={sliderStyle}
      >
        {children}
      </div>
    </div>
  );
}
