import styled from '@emotion/styled'

export const CrackerConstructorContainer = styled.div`
    box-shadow: 4px 4px 10px ${props=> props.theme.color.body.text.colored};
    display: inline-flex;
    flex-flow: row;
    
    @media (min-width:1500px){
        position: absolute;
        width: 50%;
        height: min-content;
        left: 50%;
        bottom: 10vh;
        z-index: 100;
        transform: translate(-50%, 0%);

        vertical-align: center;
        display: inline-block;
        margin: 0;
    }
    @media (min-width:1200px) and (max-width:1499px){
        position: absolute;
        width: 50%;
        height: min-content;
        left: 50%;
        bottom: 10vh;
        z-index: 100;
        transform: translate(-50%, 0%);

        vertical-align: center;
        display: inline-block;
        margin: 0;
        background:${props=> props.theme.background.body.overPicWhite};
    }
    @media (min-width: 100px) and (max-width: 1199px){
        position: relative;
        width: 50%;
        height: min-content;
        left: 50%;
        z-index: 100;
        transform: translate(-50%, 0%);

        vertical-align: center;
        display: inline-block;
        margin: 0;
    }
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
    display: block;
    text-align: center;
    margin: 20px auto 0px auto;
    text-transform: uppercase;
    font-family: "Lato";
`;

export const AddtoCart = styled.div`
    display: flex;
    vertical-align: middle;
    width: max-content;
    min-width: 30px;
    height: 30px;
    margin: 15px 100px 20px auto;
    border-radius: 15px;
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
        font-size: 1em;
        font-weight: bolder;
        color: ${props=>props.theme.color.body.text.default};

        &:before{
            transition: all 0.3s;
            content: '+';
        }
    }
    
    &:hover{
        .butt-content:before{
            transition: all 0.3s;
            width: auto;
            content: 'Add to cart +';
            margin: 0px 20px;
        }
    }
`;