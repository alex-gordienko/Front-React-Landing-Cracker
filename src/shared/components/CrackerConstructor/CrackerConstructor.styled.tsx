import styled from '@emotion/styled'

export const CrackerConstructorContainer = styled.div`
    background: ${props=> props.theme.background.body.overPicWhite};
    position: absolute;
    width: 50%;
    height: max-content;
    left: 50%;
    bottom: 0px;
    z-index: 20;
    transform: translate(-50%, -10%);
`;

export const Label = styled.div`
    color: ${props=> props.theme.color.body.text.overPic};
    font-family: "Fredoka One";
    font-size: 2em;
    text-transform: uppercase;
    width: max-content;
    position: relative;
    left: 50%;
    z-index: 20;
    transform: translate(-50%, 10%);
`;

export const CurrentValue = styled.div`
    width: max-content;
    text-align: center;
    margin: 20px auto 0px auto;
    text-transform: uppercase;
    font-family: "Lato";
`