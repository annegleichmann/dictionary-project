import React from "react";
import Meaning from "./Meaning";
import "./Results.css";

export default function Result(props) {
  if (props.result) {
    return (
      <div className="Result">
        <section>
          <h2>{props.result.word}</h2>
          <p className="phonetics">{props.result.phonetic}</p>
        </section>
        {props.result.meanings.map(function (meaning, index) {
          return (
            <section key={index}>
              <Meaning meaning={meaning} />
            </section>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
