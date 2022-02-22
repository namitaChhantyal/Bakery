import Styled from 'styled-components';
import DefaultImg from '../../images/cakespread.png'
const defaultHeight = '40vh'

const StyledHero = Styled.header`
    min-height: ${props => props.height ? props.height : defaultHeight};
    background: url(${props => props.img ? props.img : DefaultImg});
    display: flex;
    align-items: center;
    justify-content: center;
    background-attachment: ${props => props.parax ? props.parax : 'none'};
    background-position: ${props => props.position ? props.position : 'center'};
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    z-index: -2000;
`

export default StyledHero;