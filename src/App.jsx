import React, { useState } from "react";
import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";

const arr = [
  {
    title: "Мужские Кроссовки Nike Blazer Mid Suede",
    price: 12999,
    imageUrl: "/img/1.jpg",
  },
  {
    title: "Мужские Кроссовки Nike Air Max 270",
    price: 14500,
    imageUrl: "/img/2.jpg",
  },
  {
    title: "Мужские Кроссовки Nike Blazer Mid Suede",
    price: 15200,
    imageUrl: "/img/3.jpg",
  },
  {
    title: "Кроссовки Puma X Aka Boku Future Rider",
    price: 19000,
    imageUrl: "/img/4.jpg",
  },
];

function App() {
  const [cartOpened, setcartOpened] = useState(false);
  return (
    <div className="wrapper clear">
      {/* {cartOpened ? <Drawer offClickCart={() => setcartOpened(false)} /> : null} */}
      {cartOpened && <Drawer offClickCart={() => setcartOpened(false)} />}
      <Header onClickCart={() => setcartOpened(true)} />
      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1 className="">Все кроссовки</h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="" />
            <input placeholder="Search..." />
          </div>
        </div>
        <div className="d-flex">
          {arr.map((obj, index) => (
            <Card
              key={index}
              title={obj.title}
              price={obj.price}
              imageUrl={obj.imageUrl}
              onFavorite={() => console.log("tanlandi")}
              onPlus={() => console.log("plus tanlandi")}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
