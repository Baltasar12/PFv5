import ItemDetail from "../itemDetail/ItemDetail";
import Swal from "sweetalert2";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../firebase";
import { getDoc, doc, collection } from "firebase/firestore";

const ItemDetailContainer = () => {
  let [desc, setDesc] = useState([]);
  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    const prodCollection = collection(db, "items");
    const refDoc = doc(prodCollection, id);
    getDoc(refDoc)
      .then((snapshop) => {
        const id = snapshop.id;
        const data = snapshop.data();
        const producto = {
          id: id,
          ...data,
        };
        setDesc(producto);
        setLoading(false);
      })

      .catch((error) => {
        Swal.fire({
          icon: "warning",
          text: "Something is not working, please try again",
        });
      });
  }, [id]);

  return (
    <>
      {loading ? (
        <div id="productsContainer">
          <h3 className="titleForContainers">Cargando nuestros productos...</h3>
        </div>
      ) : (
        <ItemDetail description={desc} />
      )}
    </>
  );
};

export default ItemDetailContainer;