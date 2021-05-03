import styled from 'styled-components';

const ProductWall = (props) => {
    return(
        <Container>
            <Wrap>
                <img src='/images/travis-6.jpeg' alt='Travis Scott Air Jordan 6' />
                <div className='prod-info'>
                    <span id='model'>Air Jordan 6</span>
                    <span id='collection'>Travis Scott</span>
                </div>
            </Wrap>
            <Wrap>
                <img src='/images/travis-6.jpeg' alt='Travis Scott Air Jordan 6' />
                <div className='prod-info'>
                    <span id='model'>Air Jordan 6</span>
                    <span id='collection'>Travis Scott</span>
                </div>
            </Wrap>
            <Wrap>
                <img src='/images/travis-6.jpeg' alt='Travis Scott Air Jordan 6' />
                <div className='prod-info'>
                    <span id='model'>Air Jordan 6</span>
                    <span id='collection'>Travis Scott</span>
                </div>
            </Wrap>
            <Wrap>
                <img src='/images/travis-6.jpeg' alt='Travis Scott Air Jordan 6' />
                <div className='prod-info'>
                    <span id='model'>Air Jordan 6</span>
                    <span id='collection'>Travis Scott</span>
                </div>
            </Wrap>
            <Wrap>
                <img src='/images/travis-6.jpeg' alt='Travis Scott Air Jordan 6' />
                <div className='prod-info'>
                    <span id='model'>Air Jordan 6</span>
                    <span id='collection'>Travis Scott</span>
                </div>
            </Wrap>
            <Wrap>
                <img src='/images/travis-6.jpeg' alt='Travis Scott Air Jordan 6' />
                <div className='prod-info'>
                    <span id='model'>Air Jordan 6</span>
                    <span id='collection'>Travis Scott</span>
                </div>
            </Wrap>
            <Wrap>
                <img src='/images/travis-6.jpeg' alt='Travis Scott Air Jordan 6' />
                <div className='prod-info'>
                    <span id='model'>Air Jordan 6</span>
                    <span id='collection'>Travis Scott</span>
                </div>
            </Wrap>
            <Wrap>
                <img src='/images/travis-6.jpeg' alt='Travis Scott Air Jordan 6' />
                <div className='prod-info'>
                    <span id='model'>Air Jordan 6</span>
                    <span id='collection'>Travis Scott</span>
                </div>
            </Wrap>
            <Wrap>
                <img src='/images/travis-6.jpeg' alt='Travis Scott Air Jordan 6' />
                <div className='prod-info'>
                    <span id='model'>Air Jordan 6</span>
                    <span id='collection'>Travis Scott</span>
                </div>
            </Wrap>
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

const Wrap = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    img {
        max-width: 100%;
        object-fit: contain;
    }

    .prod-info {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 25px;
    
        #model {
            font-size: 16px;
            line-height: 28px;
        }

        #collection {
            font-size: 24px;
            font-weight: 500;
        }
    }
`;

export default ProductWall;