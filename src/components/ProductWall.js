import styled from 'styled-components';
import Card from './ProductCard';

const ProductWall = (props) => {
    return(
        <Container>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </Container>
    )
}

const Container = styled.div`
    display: grid;
    grid-gap: 25px;
    gap: 25px;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    margin: 25px;

    @media (max-width: 768px) {
        grid-template-columns: repeat(1, minmax(0, 1fr));
    }
`;

export default ProductWall;