import React from "react";
import styles from "./card.module.css";
export default function (props) {
  return (
    <React.Fragment>
      <div className={styles.container}>
        <h2>Card Title</h2>
        <p>Card message</p>
      </div>
      {/* <style jsx>
        {`
          .card-holder {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            padding: 2em 1em;
            max-width: 30%;
          }
          ,
          .card {
            display: block;
            margin: 1em;
            padding: 1em 2em;
            background-color: aqua;
          }
        `}
      </style> */}
    </React.Fragment>
  );
}
