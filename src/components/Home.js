import styled from 'styled-components';
import Menu from './Menu';
import ProductWall from './ProductWall';
import Footer from './Footer';

const Home = (props) => {
    return(
        <Container>
            <Menu />
            <ProductWall />
            <Footer />
        </Container>
    )
}

const Container = styled.div`
    height: 100%;
    width: 100%;
`;

export default Home;