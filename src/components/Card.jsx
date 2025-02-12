import React, { useState } from "react";

function Card(props) {
  const [IsAdded, setIsAdded] = useState(false);

  const onClickPlus = () => {
    setIsAdded(!IsAdded);
  };

  return (
    <div className="card">
      <div className="favorite" onClick={props.onFavorite}>
        <img src="/img/unliked-heart.svg" alt="" />
      </div>
      <img width={133} height={112} src={props.imageUrl} alt="" />
      <h5>{props.title}</h5>
      <div className="d-flex justify-between ">
        <div className="d-flex flex-column">
          <span>Цена:</span>
          <b>{props.price}</b>
        </div>

        <img
          className="cu-p"
          onClick={onClickPlus}
          src={IsAdded ? "/img/btn-checked.svg" : "/img/plus-btn.svg"}
          alt="added"
        />
      </div>
    </div>
  );
}

export default Card;
