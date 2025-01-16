import React from "react";
import Synonyms from "./Synonyms";
import "./Meaning.css";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      <div>
        <p>
          {props.meaning.definition}
          <br />
          <em>{props.meaning.example}</em>
        </p>
      </div>
      <div className="synonym">
        <Synonyms synonyms={props.meaning.synonyms} />
      </div>
    </div>
  );
}
