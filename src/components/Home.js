import styled from 'styled-components';
import Menu from './Menu';
import ProductWall from './ProductWall';

const Home = (props) => {
    return(
        <Container>
            <Menu />
            <ProductWall />
        </Container>
    )
}

const Container = styled.div`
    height: 100%;
    width: 100%;
`;

export default Home;