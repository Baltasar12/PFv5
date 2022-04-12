import React from "react";

const ItemCart = ({ item, deleteOneProduct, deleteCart }) => {
  return (
    <>
      <div className="cartItem">
        <img src={item.img} alt="description" className="productImg" />
        <div className="infoContainer ">
          <h4 className="cardTitle">{item.name}</h4>
          <h5 className="cardInfo">Precio por unidad: $ {item.price}</h5>
          <h5 className="cardInfo">Cantidad: {item.quantity}</h5>
          <h5 className="cardInfo">
            Precio total: $ {item.price * item.quantity}
          </h5>
          <div id="cartButtonContainer">
            <button
              onClick={deleteOneProduct}
              className="cartButtonForDeleteItems"
            >
              Borrar 1
            </button>
            <button onClick={deleteCart} className="cartButtonForDeleteItems">
              Borrar todo
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemCart;