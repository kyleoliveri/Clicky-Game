import React from "react";
import "./CharacterCard.css";

function CharacterCard(props) {
  return (
    <div className="row">
      <div className="col s3 m3 l3">
        <div className="card">
          <div className="card-image">
            <img onClick={() => props.updateSelected(props.name)} name={props.name} src={props.image} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CharacterCard;