import styled from 'styled-components';

const Footer = (props) => {
    return (
        <Container>
            <Wrap>
                <Content>
                    <Directory>
                        <ul>
                            <li id='main'>Find a store</li>
                            <li id='main'>Sign up for email</li>
                            <li id='main'>Become a member</li>
                            <li id='main'>Feedback</li>
                        </ul>
                        <ul>
                            <li id='main'>Get Help</li>
                            <li>Order Status</li>
                            <li>Shipping and Delivery</li>
                            <li>Returns</li>
                            <li>Payment Options</li>
                            <li>Contact Us</li>
                        </ul>
                        <ul>
                            <li id='main'>About Nike</li>
                            <li>News</li>
                            <li>Careers</li>
                            <li>Investors</li>
                            <li>Sustainability</li>
                        </ul>
                    </Directory>
                    <Socials>
                        <img src='/images/tw-icon.svg' alt='twitter' />
                        <img src='/images/fb-icon.svg' alt='facebook' />
                        <img src='/images/yt-icon.svg' alt='youtube' />
                        <img src='/images/ig-icon.svg' alt='instagram' />
                    </Socials>
                </Content>
                <Legal>
                    <div id='credits'>
                        <span>Clone of Nike SNKRS made by <a href='https://www.github.com/kareemelgendy'>Kareem Elgendy</a></span>
                    </div>
                    <div id='other-links'>
                        <span>Guides</span>
                        <span>Terms of Use</span>
                        <span>Terms of Sale</span>
                        <span>Company Details</span>
                        <span>Privacy &amp; Cookie Policy</span>
                        <span>Cookie Settings</span>
                    </div>
                </Legal>
            </Wrap>
        </Container>
    )
}

const Container = styled.div `
    background-color: black;
    width: 100%;
    min-height: 200px;
    color: white;
    display: flex;
    flex-direction: column;
`;

const Wrap = styled.div`
    margin: auto;
    padding: 40px;
`;

const Content = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Directory = styled.div`
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    
    ul {
        list-style: none;
        margin-right: 50px;
        
        #main {
            text-transform: uppercase;
            font-weight: 400;
            font-size: 12px;
            color: white;
        }

        li {
            margin: 7px 0;
            color: #757575;

            &:hover {
                color: white;
            }
        }
    }

    @media (max-width: 768px){
        grid-template-columns: repeat(1, minmax(0, 1fr));
    }
`;

const Socials = styled.div`
    img {
        margin: 0 10px;
    }

    @media(max-width: 768px){
        display: none;
    }
`;

const Legal = styled.div`
    display: flex;
    justify-content: space-between;
    color: #757575;
    font-size: 12px;
    margin-left: 40px;
    
    a {
        text-decoration: none;
        color: white;

        &:hover {
            text-decoration: underline;
        }
    }

    #other-links span {
        margin-left: 12px;
    
        &:hover {
            color: white;
        }
    }

    @media (max-width: 1000px){
        #other-links {
            display: none;
        }
    }
`;

export default Footer;