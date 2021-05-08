import styled from "styled-components";
import { Link } from "react-router-dom";

const ProductCard = (props) => {
  const product = props.product;
  console.log(props);

  return (
    // <Link
    //   to={{
    //     pathname: `/product/${product._id}`,
    //     state: {
    //       id: product._id
    //     },
    //   }}
    // >
    <Card>
      <Link to={`/product/${product._id}`}>
        <img src={product.mainImg} alt={product.name + " " + product.model} />
      </Link>
      <div className="prod-info">
        <span id="model">{product.model}</span>
        <span id="collection">{product.name}</span>
        <Link to={`/product/${product._id}`}>
          {product.inventory === "IS" ? (
            <button>Add to Bag</button>
          ) : (
            <button>Sold Out</button>
          )}
        </Link>
      </div>
    </Card>
    // </Link>
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
    cursor: pointer;

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
  }
`;

export default ProductCard;
