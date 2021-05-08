import styled from "styled-components";
import { useState, useEffect } from "react";
import Axios from "../Axios";

const Product = ({ match }) => {
  const [item, setItem] = useState({});

  useEffect(() => {
    fetchItem();
  }, []);

  const fetchItem = async () => {
    const response = await Axios.get(`/snkrs/${match.params.id}`);
    setItem(response.data);
  };

  return (
    <Container>
      <Wrap>
        <Gallery>
          <img src={item.mainImg} alt={item.name + " " + item.model} />
          <img src={item.prodImg1} alt={item.name + " " + item.model} />
          <img src={item.prodImg2} alt={item.name + " " + item.model} />
          <img src={item.prodImg3} alt={item.name + " " + item.model} />
          <img src={item.prodImg4} alt={item.name + " " + item.model} />
          <img src={item.prodImg5} alt={item.name + " " + item.model} />
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
          <img src={item.wideImg1} alt={item.name + " " + item.model} />
          <img src={item.wideImg2} alt={item.name + " " + item.model} />
          <img src={item.wideImg3} alt={item.name + " " + item.model} />
          {item.wideImg4 == '' ? (
            <img src="" alt="" />
            ) : (
            <img src={item.wideImg4} alt={item.name + " " + item.model} />
          )}
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
`;

const Info = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 25px;
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
`;

const WideGallery = styled.div`
  width: 100%;

  img {
    margin-bottom: 20px;
    object-fit: contain;
  }
`;

export default Product;
