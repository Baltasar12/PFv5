import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1 className="titleForContainers">Bienvenidos!!</h1>
      <p className="homeSubtitle">
        Please feel free to browser into our categories or start directly with
        all the products
      </p>
      <Link to={"/products"}>
        <div id="catalogImg" className="homeCardsImg">
          <img
            src="/assets/linkImg/all.jpg"
            alt="all prod img"
            className="catImg"
          />
          <p className="catText">Todos los productos</p>
        </div>
      </Link>

      <div id="categoriesContainer">
        <Link to={"category/teclados"}>
          <div className="homeCardsImg">
            <img
              src="/assets/linkImg/TE.jpg"
              alt="Teclado"
              className="catImg"
            />
            <p className="catText">Teclados</p>
          </div>
        </Link>
        <Link to={"category/auriculares"}>
          <div className="homeCardsImg">
            <img
              src="/assets/linkImg/AU.png"
              alt="Auriculares"
              className="catImg"
            />
            <p className="catText">Auriculares</p>
          </div>
        </Link>
        <Link to={"category/notebooks"}>
          <div className="homeCardsImg">
            <img
              src="/assets/linkImg/NO.jpg"
              alt="Notebook"
              className="catImg"
            />
            <p className="catText">Notebooks</p>
          </div>
        </Link>
        <Link to={"category/mouses"}>
          <div className="homeCardsImg">
            <img
              src="/assets/linkImg/MO.jpg"
              alt="Mouse"
              className="catImg"
            />
            <p className="catText">Mouses</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Home;