import React from "react";
import { useTranslation } from "react-i18next";
import "../styles/main.css";
import "../styles/product.css";

function Main() {
  const { t } = useTranslation();
  const products = t("products", { returnObjects: true });

  return (
    <main>
      <div className="product-wrapper">
        {products.map((product) => {
          return (
            <div className="product" key={product.id}>
              <img
                src={product.image}
                alt={`bu yer shu id:${product.id} li productni rasmi bor`}
              />
              <div className="price">
                <strong style={{ color: "#FF4343" }}>
                  {product.price.toLocaleString()}
                </strong>
                <strong className="oldPrice">{product.oldPrice}</strong>
              </div>
              <p>{product.description}</p>
            </div>
          );
        })}
      </div>
    </main>
  );
}

export default Main;
