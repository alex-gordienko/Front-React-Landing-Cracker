import styled from '@emotion/styled';

export const StyledBody = styled.div`
    z-index: 10;
    height: max-content;
`;

export const TasteIt = styled.div`
    position: absolute;
    top: 60%;
    left: 60%;
    z-index: 1000;
    display: flex;
    vertical-align: middle;
    width: 150px;
    height: 50px;
    margin: 15px 100px 20px auto;
    border-radius: 25px;
    border: 1px solid ${props=>props.theme.color.body.text.colored};
    background: ${props=>props.theme.color.body.text.colored};


    -webkit-touch-callout: none;
    -webkit-user-select: none;   
    -khtml-user-select: none;    
    -moz-user-select: none;     
    -ms-user-select: none;       
    user-select: none;

    .butt-content{
        margin: auto;
        width: auto;
        height: min-content;
        font-family: 'Avenir';
        font-size: 2em;
        font-weight: bolder;
        color: ${props=>props.theme.color.body.text.default};

    }
    
    &:hover{
        transition: all 0.3s;
        width: 200px;
        background: ${props=>props.theme.color.body.text.hover};
        border: 1px solid ${props=>props.theme.color.body.text.hover};
    }
`;