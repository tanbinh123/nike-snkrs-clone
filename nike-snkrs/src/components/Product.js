import styled from "styled-components";
import { useState, useEffect } from "react";
import Axios from "../Axios";

const Product = ({ match }) => {
  const [item, setItem] = useState({});

  useEffect(() => {
    fetchItem();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [item]);

  async function fetchItem() {
    const response = await Axios.get(`/snkrs/${match.params.id}`);
    setItem(response.data);
  }

  // Wait until all items fetched
  if (item.main === undefined) {
    return <h1>Loading</h1>;
  }

  // Product title
  const product = item.name + " " + item.model;

  return (
    <Container>
      <Wrap>
        <Gallery>
          {Object.values(item.main).map((prodImg, key) => {
            if (prodImg.length > 0) {
              return <img key={key} src={prodImg} alt={product} />;
            }
          })}
        </Gallery>
        <Info>
          <p id="model">{item.model}</p>
          <p id="name">{item.name}</p>
          <p id="price">{item.price}</p>
          <div className="description">
            <p>{item.description}</p>
          </div>
          <div className="checkout">Add to Bag</div>
        </Info>
      </Wrap>
      <Wrap>
        <WideGallery>
          {Object.values(item.wide).map((wideImg, key) => {
            if (wideImg.length > 0) {
              return <img key={key} src={wideImg} alt={product} />;
            }
          })}
        </WideGallery>
      </Wrap>
    </Container>
  );
};

const Container = styled.div`
  height: 100%;
  width: 100%;
`;

const Wrap = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  height: 100%;
  width: 100%;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;

const Gallery = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  padding: 25px;
  grid-gap: 15px;
  gap: 15px;

  img {
    max-width: 100%;
    object-fit: contain;
  }

  div {
    background-color: rgb(0, 0, 0, 0.1);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;

const Info = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 40px;
  margin-top: 15vh;

  .product {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  #model,
  #price,
  .description {
    font-size: 16px;
  }

  #name {
    font-size: 32px;
    line-height: 32px;
    padding: 0;
    margin: 0;
  }

  .description {
    line-height: 1.75;
    padding: 20px;
  }

  .checkout {
    background-color: black;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 30px;
    font-size: 16px;
    border: none;
    height: 60px;
    width: 75%;

    &:hover {
      background-color: rgb(0, 0, 0, 0.8);
    }
  }

  @media (max-width: 1200px) {
    margin-top: 0;
  }
`;

const WideGallery = styled.div`
  width: 100%;

  img {
    margin-bottom: 20px;
    width: 100vw;
    object-fit: contain;
  }
`;

export default Product;
