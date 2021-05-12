import styled from "styled-components";
import { useState, useEffect } from "react";
import Axios from "../Axios";
import Card from "./ProductCard";
import Preloader from "./Preloader";

const Feed = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetchData();
  }, [cards]);

  // Fetching API data
  async function fetchData() {
    await Axios.get("/snkrs/s/feed").then((response) => {
      setCards(response.data);
    });
  }

  // If not all pages are loaded
  if (cards.length < 9) {
    return <Preloader />;
  }

  return (
    <Container>
      {cards.map((product, key) => (
        <Card key={key} product={product} />
      ))}
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  grid-gap: 25px;
  gap: 25px;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  margin: 25px;

  @media (max-width: 1250px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;

export default Feed;
