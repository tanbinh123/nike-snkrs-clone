import styled from 'styled-components';
import Menu from './Menu';
import Feed from './Feed';
import Footer from './Footer';

const Home = (props) => {
    return(
        <Container>
            <Menu />
            <Feed />
            <Footer />
        </Container>
    )
}

const Container = styled.div`
    height: 100%;
    width: 100%;
`;

export default Home;