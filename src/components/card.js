import React from "react";
const Card = ({data, removeCard}) => {
    const formatMs =(time) =>{
      const res = time.toString().split('.')
      return `${res[0]}, ${res[1]?res[1]:0}`
    }

  return (
    <div class="mb-3 px-3 py-2 btn-secondary rounded close c1">
    <div><span className="fr" onClick={() => removeCard(data.uid)}>X</span></div>
      <h3 class="f-700">{formatMs(data.rem/1000)}</h3>
      <div class="d-flex">
        <p>{data.date}</p>
   
      </div>
    </div>
  );
};

export default Card;
