import { Link, NavLink } from "react-router-dom";
import { useContexto } from "../../Context/myContext";
import ItemCart from "./ItemCart";

const Cart = () => {
  const { cart, totalPrice, deleteCart, clearCart, deleteOneProduct } =
    useContexto();

  return (
    <>
      <h3 className="titleForContainers">Carrito</h3>
      <div id="cartContainer">
        {cart.map((desc) => (
          <ItemCart
            key={desc.id}
            item={desc}
            deleteOneProduct={() => deleteOneProduct(desc)}
            deleteCart={() => deleteCart(desc)}
          />
        ))}

        {cart.length > 0 ? (
          <div id="cartInfoFooter">
            <p id="totalPrice">Total: ${totalPrice} </p>
            <div>
              <NavLink to={"/Payment"}>
                <button className="bntCart">Comprar</button>
              </NavLink>
              <button onClick={clearCart} className="bntCart">
                Vaciar carro
              </button>
            </div>
          </div>
        ) : (
          <>
            <p id="cartEmptyMessage">Tu carro sigue vacio...</p>
            <Link to="/products">
              <button className="bntCart">Volver a los productos</button>
            </Link>
          </>
        )}
      </div>
    </>
  );
};

export default Cart;