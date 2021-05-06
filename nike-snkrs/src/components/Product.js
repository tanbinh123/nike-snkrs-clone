import styled from 'styled-components';
import Menu from './Menu';

const Product = (props) => {
    return(
        <Container>
            <Menu />
            <Wrap>
                <Gallery>
                    <img src='/images/main-1.jpeg' alt=''/>
                    <img src='/images/main-2.jpeg' alt=''/>
                    <img src='/images/main-3.jpeg' alt=''/>
                    <img src='/images/main-4.jpeg' alt=''/>
                    <img src='/images/main-5.jpeg' alt=''/>
                    <img src='/images/main-6.jpeg' alt=''/>
                </Gallery>
                <Info>
                    <div className='product'>
                        <p id='model'>Air Jordan 6</p>
                        <p id='name'>Travis Scott</p>
                        <p id='price'>CAD 330</p>
                        <div className='description'>
                            <p>
                                Reprising a collaboration with Jordan Brand that originally dropped in 2019, this Air Jordan 6 features a glow-in-the-dark sole and perforated underlays with a reflective design—but this time, the style arrives framed by shades of British Khaki.
                                <br/><br/>Familiar features include a utilitarian pouch on the ankle—but the design now features an additional zip pocket. Cactus Jack branding on the lace lock and right heel combines with a smiley face graphic on the medial midsole to give the look a playful feel. Infrared accents and Nike Air branding on the left heel nod to the OG Air Jordan 6, importing a classic feel to La Flame's latest Jordan Brand creation.
                            </p>
                        </div>
                        <div className='checkout'>Add to Bag</div>
                    </div>
                </Info>
            </Wrap>
        </Container>
    )
}

const Container = styled.div`
    height: 100%;
    width: 100%;
`;

const Wrap = styled.div`
    display: grid;
    grid-template-columns: 2fr 1fr;
`;

const Gallery = styled.div`
    height: 100vh;
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
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 25px;

    .product {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    #model, #price, .description {
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
        width: 80%;

        &:hover {
            background-color: rgb(0, 0, 0, 0.8);
        }
    }
`;

export default Product;