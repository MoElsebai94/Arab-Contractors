import React from "react";

function Featurebox(props) {
  return (
    <a href={props.linker} className="a-box" target="_blank">
      <div className="a-b-img">
        <img src={props.image} alt="" />
      </div>
      <div className="a-b-text">
        <h2> {props.title}</h2>
        <p>{}</p>
      </div>
    </a>
  );
}

export default Featurebox;

