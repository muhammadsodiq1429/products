import axios from "axios";
import React, { useEffect, useState } from "react";
import Popup from "../../ui/Popup";
import { GoStarFill } from "react-icons/go";

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
      <div className="products__wrapper container mx-auto px-5 grid grid-cols-4 gap-5 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1">
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
                className="aspect-square object-contain hover:scale-[1.07] transition-[0.9ms] ease-linear"
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
              "w-[80vw] h-[80vh] bg-white flex items-center rounded-4xl justify-center gap-3"
            }
            onClick={() => setSelectedCard(null)}
          >
            <div className="popup__img w-[40%]">
              <img src={selectedCard.image} alt="" className="object-contain" />
            </div>
            <div className="popup__body w-[40%] h-[80%] p-2.5 flex flex-col justify-center gap-2">
              <h1 className="text-3xl font-semibold">{selectedCard.title}</h1>
              <p className="font-bold text-green-500 text-2xl">
                ${selectedCard.price}
              </p>
              <p>{selectedCard.description}</p>
              <p className="flex gap-2 text-2xl items-center">
                <GoStarFill className="text-amber-400" />
                {selectedCard.rating.rate}
              </p>
            </div>
          </Popup>
        )}
      </div>
    </section>
  );
};

export default Products;
