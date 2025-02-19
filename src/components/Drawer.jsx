import React, { useState } from "react";

function Drawer(props) {
  return (
    <div className="overlay">
      <div className="drawer d-flex flex-column">
        <h2 className="mb-30 d-flex justify-between">
          Корзина
          <img
            onClick={props.offClickCart}
            className="removeBtn"
            src="/img/remove.svg"
            alt="remove btn"
          />
        </h2>

        <div className="items flex">
          <div className="cartItem d-flex align-center mb-20">
            <div
              style={{ backgroundImage: "url(/img/1.jpg)" }}
              className="cartItemImg"
            ></div>

            <div className="mr-20">
              <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
              <b>12 999 руб.</b>
            </div>
            <div>
              <img className="removeBtn" src="/img/remove.svg" alt="" />
            </div>
          </div>
          <div className="cartItem d-flex align-center mb-20">
            <div
              style={{ backgroundImage: "url(/img/1.jpg)" }}
              className="cartItemImg"
            ></div>

            <div className="mr-20">
              <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
              <b>12 999 руб .</b>
            </div>
            <div>
              <img className="removeBtn" src="/img/remove.svg" alt="" />
            </div>
          </div>
          <div className="cartItem d-flex align-center mb-20">
            <div
              style={{ backgroundImage: "url(/img/1.jpg)" }}
              className="cartItemImg"
            ></div>

            <div className="mr-20">
              <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
              <b>12 999 руб.</b>
            </div>
            <div>
              <img className="removeBtn" src="/img/remove.svg" alt="" />
            </div>
          </div>
          <div className="cartItem d-flex align-center mb-20">
            <div
              style={{ backgroundImage: "url(/img/1.jpg)" }}
              className="cartItemImg"
            ></div>

            <div className="mr-20">
              <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
              <b>12 999 руб.</b>
            </div>
            <div>
              <img className="removeBtn" src="/img/remove.svg" alt="" />
            </div>
          </div>
        </div>
        <div className="cartTotalBlock">
          <ul>
            <li className="d-flex">
              <span>Итого: </span>
              <div></div>
              <b>21 698 руб. </b>
            </li>
            <li className="d-flex">
              <span>Налог 5%: </span>
              <div></div>
              <b>1074 руб. </b>
            </li>
          </ul>
        </div>
        <button className="greenButton">
          Оформить заказ <img src="/img/arrow.svg" alt="" />
        </button>
      </div>
      <div></div>
    </div>
  );
}

export default Drawer;
