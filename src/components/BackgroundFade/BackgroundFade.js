import Styled from 'styled-components';

const Fade = Styled.header`
    position: absolute;
    top: 0;
    z-index:-1000;
    width: 100%;
    height: 100%;
    background: rgb(255,255,255);
    background: linear-gradient(0deg, rgba(255,255,255,0) 25%, rgba(253,223,223,1) 100%); 
`

export default Fade;