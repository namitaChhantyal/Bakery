import Styled from 'styled-components'

const SubTitle = Styled.div`
    color: ${props => props.color || "var(--secondary-color)" };
    width: 60%;
    margin: 2rem auto;
    text-align: ${props => props.align || "center"};
    letter-spacing: .2rem;
    text-transform: capitalize; 

    h2{
        font-size: 2rem;
        margin: .5rem;
        padding: 0; 
    }

    p {
        text-transform: none; 
        text-align: center;
        font-size: 1.5rem;
    }

`

export default SubTitle;

