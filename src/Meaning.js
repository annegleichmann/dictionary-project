import React from "react";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h5>{props.meaning.partOfSpeech}</h5>
      <p>
        <strong className="definition">Definition: </strong>
        {props.meaning.definition}
      </p>
    </div>
  );
}
