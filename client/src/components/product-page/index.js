import styles from "./product-page.module.scss";
import { useState, useEffect } from "react";
import Preloader from "../preloader";
import axios from "../../axios";

const Product = ({ match }) => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetchProduct();
  }, [product]);

  async function fetchProduct() {
    await axios.get(`/snkrs/${match.params.id}`).then((response) => {
      setProduct(response.data);
    });
  }

  if (product.main === undefined) {
    return <Preloader />;
  }

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.gallery}>
          {Object.values(product.main).map(
            (prodImg, key) =>
              prodImg.length > 0 && (
                <img
                  key={key}
                  src={prodImg}
                  alt={`${product.name} ${product.model}`}
                />
              )
          )}
        </div>
        <div className={styles.info}>
          <div className={styles.prodInfo}>
            <p className={styles.model}>{product.model}</p>
            <p className={styles.name}>{product.name}</p>
            <p className={styles.price}>{product.price}</p>
            <div className={styles.description}>
              <p>{product.description}</p>
            </div>
            <button>Add to Bag</button>
          </div>
        </div>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.wideGallery}>
          {Object.values(product.wide).map(
            (wideImg, key) =>
              wideImg.length > 0 && (
                <img key={key} src={wideImg} alt={product} />
              )
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;
