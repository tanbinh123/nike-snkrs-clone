import styled from "styled-components";

const Invalid = () => {
  return (
    <Container>
      <Error>
        <h1>404 Error</h1>
        <p>The page you are looking for does not exist.</p>
        <a href="/launch">
          <button>Return to Home</button>
        </a>
      </Error>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
  width: 100vw;
`;

const Error = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    text-transform: uppercase;
    font-family: Futura;
    font-weight: bold;
    font-size: 48px;
    margin: 0;
  }

  p {
    margin-bottom: 35px;
    font-size: 16px;
    font-weight: 400;
  }

  button {
    background-color: black;
    height: 40px;
    width: 175px;
    border-radius: 25px;
    font-size: 16px;
    color: white;
    border: none;

    &:hover {
      background-color: rgb(0, 0, 0, 0.8);
    }
  }
`;

export default Invalid;
