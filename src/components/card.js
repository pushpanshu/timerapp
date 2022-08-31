import React from "react";
const Card = ({data, removeCard}) => {
    var nf = new Intl.NumberFormat();

  return (
    <div class="mb-3 px-3 py-2 btn-secondary rounded close c1">
    <div><span className="fr" onClick={() => removeCard(data.uid)}>X</span></div>
      <h3 class="f-700">{nf.format(data.rem)}</h3>
      <div class="d-flex">
        <p>{data.date}</p>
   
      </div>
    </div>
  );
};

export default Card;
