import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ProductCard = (props) => {
    return(
        <Card>
            <img src='/images/travis-6.jpeg' alt='Travis Scott Air Jordan 6' />
            <div className='prod-info'>
                <span id='model'>Air Jordan 6</span>
                <span id='collection'>Travis Scott</span>
                {/* <Link to={'/sneaker/' + sneaker.id}> */}
                    <button>
                        Buy Now
                    </button>
                {/* </Link> */}
            </div>
        </Card>
    )
}


const Card = styled.div`
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
        height: 50px;
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

        button {
            background-color: black;
            border-radius: 25px;
            width: 200px;
            height: 50px;
            color: white;
            font-size: 16px;
            border: none;
            display: none;
        }
    }

    &:hover {
        transition: opacity 500ms ease-in-out 0s;

        span{
            display: none;
        }

        button {
            display: flex;
            justify-content: center;
            align-items: center;

            &:hover {
                background-color: rgb(0, 0, 0, 0.8);
            }
        }
    }
`;

export default ProductCard;