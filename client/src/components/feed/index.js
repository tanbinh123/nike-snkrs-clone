import styled from "styled-components";
import { useState, useEffect } from "react";
import axios from "../../axios";
import Preloader from "../preloader";
import ProductCard from "../product-card";
import styles from "./feed.module.scss";

const Feed = ({ products }) => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetchData();
  }, [cards]);

  // Fetching API data
  async function fetchData() {
    await axios.get(`/snkrs/s/${products}`).then((response) => {
      setCards(response.data);
    });
  }

  if (cards.length < 9) {
    return <Preloader />;
  }

  return (
    <div className={styles.container}>
      {cards.map((product, key) => (
        <ProductCard key={key} product={product} />
      ))}
    </div>
  );
};

export default Feed;
