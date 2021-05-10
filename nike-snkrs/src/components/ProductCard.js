import styled from "styled-components";
import { Link } from "react-router-dom";

const ProductCard = (props) => {
  const product = props.product;

  return (
    <Card>
      <Link to={`/product/${product._id}`}>
        <img src={product.main.img1} alt={product.name + " " + product.model} />
      </Link>
      <div className="prod-info">
        <span id="model">{product.model}</span>
        <span id="collection">{product.name}</span>
        <Link to={`/product/${product._id}`}>
          {product.availability === "Sold Out" ? (
            <button id="cta-btn" className="sold-out">
              {product.availability}
            </button>
          ) : (
            <button id="cta-btn">{product.availability}</button>
          )}
        </Link>
      </div>
    </Card>
  );
};

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    max-width: 100%;
    object-fit: contain;
  }

  .prod-info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 50px;
    align-items: center;
    margin: 25px 25px 50px;

    #model {
      font-size: 16px;
      line-height: 28px;
    }

    #collection {
      font-size: 24px;
      font-weight: 500;
    }

    button {
      background-color: black;
      border-radius: 25px;
      width: 200px;
      height: 50px;
      color: white;
      font-size: 16px;
      border: none;
      display: none;
    }
  }

  &:hover {
    transition: opacity 500ms ease-in-out 0s;

    span {
      display: none;
    }

    button {
      display: flex;
      justify-content: center;
      align-items: center;

      &:hover {
        background-color: rgb(0, 0, 0, 0.8);
        cursor: pointer;
      }
    }

    .sold-out {
      background-color: #f3f3f3;
      color: rgb(0, 0, 0, 0.2);
      cursor: pointer;

      &:hover {
        background-color: #f3f3f3;
      }
    }

    .post {
      display: block;
    }
  }
`;

export default ProductCard;
