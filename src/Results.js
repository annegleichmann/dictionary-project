import Reacht from "react";
import Meaning from "./Meaning";

export default function Results(props) {
  if (props.result) {
    return (
      <div className="Results">
        <section className="section">
          <h2>{props.result.word}</h2>
        </section>
        {props.result.meanings.map(function (meaning, index) {
          return <Meaning meaning={meaning} key={index} />;
        })}
      </div>
    );
  } else {
    return null;
  }
}
