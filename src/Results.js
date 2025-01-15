import Reacht from "react";
import Meaning from "./Meaning";

export default function Result(props) {
  if (props.result) {
    return (
      <div className="Result">
        <h2>{props.result.word}‚</h2>
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
