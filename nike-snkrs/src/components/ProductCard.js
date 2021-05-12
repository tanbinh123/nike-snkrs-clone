import styled from "styled-components";
import { Link } from "react-router-dom";

const ProductCard = (props) => {
  // Product Information
  const product = props.product;

  return (
    <Card>
      {props.product.type === "sneaker" ? (
        <div className="prod-img">
          <Link to={`/product/${product._id}`}>
            <img
              src={product.main.img1}
              alt={product.name + " " + product.model}
            />
            <div className="img-overlay"></div>
          </Link>
        </div>
      ) : (
        <div className="prod-img">
          <img
            src={product.main.img1}
            alt={product.name + " " + product.model}
          />
          <div className="img-overlay"></div>
        </div>
      )}
      <div className={product.type === "post" ? "prod-info post" : "prod-info"}>
        <span id="model">{product.model}</span>
        <span id="collection">{product.name}</span>

        {props.product.type === "sneaker" ? (
          <Link to={`/product/${product._id}`}>
            {product.availability === "Sold Out" ? (
              <button id="cta-btn" className="sold-out">
                {product.availability}
              </button>
            ) : (
              <button id="cta-btn">{product.availability}</button>
            )}
          </Link>
        ) : product.availability === "Sold Out" ? (
          <button id="cta-btn" className="sold-out">
            {product.availability}
          </button>
        ) : (
          <button id="cta-btn">{product.availability}</button>
        )}
      </div>
    </Card>
  );
};

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .prod-img {
    position: relative;
  }

  img {
    max-width: 100%;
    object-fit: contain;
    cursor: pointer;
  }

  .img-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgb(255, 255, 255, 0.1);
    transition: opacity 250ms ease-in-out 250ms;
    opacity: 0;

    &:hover {
      cursor: pointer;
      opacity: 1;
    }
  }

  .prod-info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 50px;
    align-items: center;
    margin: 25px 25px 50px;
    text-align: center;
  }

  .prod-info #model {
    font-size: 16px;
    line-height: 28px;
  }

  .prod-info #collection {
    font-size: 24px;
    font-weight: 500;
  }

  .prod-info button {
    background-color: black;
    border-radius: 25px;
    padding: 25px;
    height: 50px;
    color: white;
    font-size: 16px;
    border: none;
    display: none;
  }

  .post span {
    display: none;
  }

  .post button {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  &:hover span {
    display: none;
  }

  &:hover button {
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
      background-color: rgb(0, 0, 0, 0.8);
      cursor: pointer;
    }
  }

  &:hover .sold-out {
    background-color: #f3f3f3;
    color: rgb(0, 0, 0, 0.2);
    cursor: pointer;

    &:hover {
      background-color: #f3f3f3;
      color: rgb(0, 0, 0, 0.2);
    }
  }
`;

export default ProductCard;
