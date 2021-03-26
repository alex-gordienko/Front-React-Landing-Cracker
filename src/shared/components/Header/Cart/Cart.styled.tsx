import styled from '@emotion/styled';

export const CartContainer = styled.div`
    width: 50%;
    height: 100%;
    display: inline-flex;
    margin: auto;

    -webkit-touch-callout: none;
    -webkit-user-select: none;   
    -khtml-user-select: none;    
    -moz-user-select: none;     
    -ms-user-select: none;       
    user-select: none;
`;

export const CartLabel = styled.div`
    color: ${props=> props.theme.color.header.text.default};
    text-transform: uppercase;
    font-family: "Lato";
    font-size: 2vh;
    margin: auto 20px auto auto;
    display: inline-flex;
    p{
        margin-right: 30px;

        i{
            border: solid ${props=> props.theme.color.header.text.default};
            border-width: 0 3px 3px 0;
            display: inline-block;
            padding: 3px;
            margin-left: 10px;
        }
        .up{
            transform: rotate(-135deg);
        }
        .down{
            transform: rotate(45deg);
        }
    }
`;

export const Dropdown = styled.div<{visible: boolean}>`
    display: ${prop=>prop.visible? 'grid':'none'};
    flex-flow: column;
    width: 50%;
    height: 150px;
    overflow-x: auto;
    background: ${props=> props.theme.background.body.container};
    position: absolute;
    top: 40px;
    z-index: 1000;
    box-shadow: 2px 2px 15px black;
`;

export const OptionsTable = styled.table`
    display: inline-flex;
    flex-flow: column;
    width: 80%;
    margin: auto;
`;

export const OptionRow = styled.tr<{firstChild?:boolean}>`
    display: table-cell;
    border: none;
    position: relative;
    width: 100%;
    margin: 5px auto;
    
    &:before{
        content: '';
        width: 82%;
        height: 1px;
        position: absolute;
        bottom: 0;
        left: 0;
        background: ${props=> props.firstChild? 'transparent':props.theme.background.header.container};
        transition: all 0.5s;
    };
`;

export const OptionCell = styled.th`
    color: ${props=> props.theme.color.header.text.active};
    font-size: 2vh;
    text-transform: uppercase;
    font-family: "Lato";
    width: 12%;
    display: inline-flex;
`;

export const OptionBigCell = styled.tr`
    color: ${props=> props.theme.background.header.container};
    font-size: 3vh;
    text-transform: uppercase;
    font-family: "Lato";
    width: 16%;
    display: inline-flex;
    flex-flow: row-reverse;
`;


export const BottomBlock = styled.div`
    display: inline-flex;
    width: max-content;
    margin: auto 40px auto auto;

    p{
        text-transform: uppercase;
        font-family: "Lato";
        font-size: 3vh;
        margin: auto 20px auto auto;
    }
`;

export const Checkout = styled.div`
    display: flex;
    vertical-align: middle;
    width: max-content;
    min-width: 30px;
    height: 30px;
    margin: 15px 0px 15px 0px;
    border-radius: 15px;
    border: 1px solid ${props=>props.theme.color.body.text.colored};
    background: ${props=>props.theme.color.body.text.colored};


    .butt-content{
        margin: auto 10px;
        width: auto;
        height: min-content;
        font-family: 'Avenir';
        font-size: 1em;
        font-weight: bolder;
        color: ${props=>props.theme.color.body.text.default};
    }
    
    &:hover{
        border-color: ${props=>props.theme.color.body.text.hover};
        background: ${props=>props.theme.color.body.text.hover};
    }
`;
