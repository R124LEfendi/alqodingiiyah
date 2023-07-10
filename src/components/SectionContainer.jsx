import React from "react";
import styles from "./SectionContainer.module.css";

function SectionContainer({ children, style }) {
  return <div className={styles.container} style={style}>{children}</div>;
}

export default SectionContainer;
