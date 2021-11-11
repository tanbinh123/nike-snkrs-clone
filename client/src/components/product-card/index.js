import styles from "./product-card.module.scss";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => (
  <div className={styles.container}>
    {product.type === "sneaker" ? (
      <div className={styles.prodImg}>
        <Link to={`/product/${product._id}`}>
          <img
            src={product.main.img1}
            alt={`${product.name} ${product.model}`}
          />
          <div className={styles.imgOverlay} />
        </Link>
      </div>
    ) : (
      <div className={styles.prodImg}>
        <img src={product.main.img1} alt={`${product.name} ${product.model}`} />
        <div className={styles.imgOverlay} />
      </div>
    )}
    <div
      className={
        product.type === "post"
          ? `${styles.prodInfo} ${styles.post}`
          : styles.prodInfo
      }
    >
      <span className={styles.model}>{product.model}</span>
      <span className={styles.collection}>{product.name}</span>
      {product.type === "sneaker" ? (
        <Link to={`/product/${product._id}`}>
          {product.availability === "Sold Out" ? (
            <button id="cta-btn" className={styles.soldOut}>
              {product.availability}
            </button>
          ) : (
            <button className="cta-btn">{product.availability}</button>
          )}
        </Link>
      ) : product.availability === "Sold Out" ? (
        <button id="cta-btn" className={styles.soldOut}>
          {product.availability}
        </button>
      ) : (
        <button id="cta-btn">{product.availability}</button>
      )}
    </div>
  </div>
);

export default ProductCard;
