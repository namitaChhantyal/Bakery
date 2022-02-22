import Styled from 'styled-components'

const ImageDisplay = Styled.div`
    width: ${props => props.width || '18rem'};
    height: ${props => props.height || '15rem'};
    margin: ${props => props.margin || 'auto'};
    background-position: center;
    background-size: cover;
    background-image: url(${props => props.img || 'red'});
`
export default ImageDisplay;