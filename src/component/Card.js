import React from "react";

const Card = ({ name, email, id }) => {
  return (
    <div className="bg-light-green tc pa3 grow dib br3 ma2 bw2 shadow-5">
      <img alt="robot" src={`https://robohash.org/${id}?200x200`} />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
