import styled from "styled-components";

const Preloader = () => {
  return (
    <Container>
      <Circle />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 62vh;
  padding: 50px;
`;

const Circle = styled.div`
  display: block;
  width: 25px;
  height: 25px;
  border: 4px solid rgb(0, 0, 0, 0.1);
  border-bottom-color: black;

  border-radius: 50%;
  margin: auto;

  animation: spin 0.75s infinite linear;

  @keyframes spin {
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default Preloader;
