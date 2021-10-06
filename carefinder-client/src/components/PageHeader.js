import React from "react";
import "../css/styles.css";

// Simple Page Header Component.
// Maybe didn't needs this but wanted some practice with components and props.
const PageHeader = (props) => {
      return <h1>{props.heading}</h1>;
};

export default PageHeader;
