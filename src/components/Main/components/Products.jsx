import axios from "axios";
import React, { useEffect, useState } from "react";
import Popup from "../../ui/Popup";

const Products = () => {
  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCard, setSelectedCard] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => setProducts(res.data))
      .catch((err) => {
        setError(err);
      });
  }, []);

  return (
    <section className="products">
      <div className="products__wrapper container mx-auto grid grid-cols-4 gap-5 max-lg:grid-cols-3 max-md:grid-cols-2">
        {products?.map((p) => (
          <div
            className="product border-green-500 border-2 rounded-2xl overflow-hidden"
            key={p.id}
            onClick={() => setSelectedCard(p)}
          >
            <div className="product__img object-contain">
              <img
                src={p.image}
                alt=""
                className="h-[400px] object-contain hover:scale-[1.07] transition-[0.9ms] ease-linear"
              />
            </div>
            <div className="product__body p-4">
              <h1 className="text-[22px] line-clamp-1" title={p.title}>
                {p.title}
              </h1>
              <p className="font-bold">{p.price} USD</p>
            </div>
          </div>
        ))}
        {selectedCard && (
          <Popup
            className={
              "w-[80vw] h-[80vh] bg-white flex items-center rounded-4xl"
            }
            onClick={() => setSelectedCard(null)}
          >
            <div className="popup__img w-[40%] border">
              <img src={selectedCard.image} alt="" className="object-contain" />
            </div>
          </Popup>
        )}
      </div>
    </section>
  );
};

export default Products;
