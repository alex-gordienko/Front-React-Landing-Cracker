import styled from '@emotion/styled';


export const HeaderContainer = styled.header`
    width: 100%;
    min-width: max-content;
    
    background: ${props=> props.theme.background.header.container};
    position: fixed;
    z-index: 30;

`;

export const HeaderFullTopBlock = styled.div`
    width: 100%;
    height: 40px;
    background: ${props=> props.theme.background.header.topMenu};
    display: inline-flex;
`;

export const HeaderFullBottomBlock = styled.div`
    width: 100%;
    height: 60px;
    display: inline-flex;
`;

export const HeaderBottomLeftBlock = styled.div`
    display: block;
    margin: auto auto auto 50px;
    background: ${props=> props.theme.background.header.subcontainer};
    height: 100%;

    font-size: 60px;
    font-family: "Kristi";
    color: rgb( 247, 247, 247 );
    line-height: 1.016;
    text-align: center;
`;

export const HeaderBottomCenterBlock = styled.div`
    width: 40%;
    min-width: max-content;
    margin-left: auto;
    display: inline-flex;
    background: ${props=> props.theme.background.header.subcontainer};
    height: 100%;

    .link{
        text-decoration: none;
        position: relative;
        transition: all 1s;
        min-width: max-content;
        width: inherit;
        margin-right: 1px;
        color: ${props=> props.theme.color.header.text.default};
        background: ${props=> props.theme.background.header.elements};
        text-align: center;
        padding: 25px 2px 2px 2px;

        &:before{
            content: '';
            width: 0;
            height: 4px;
            position: absolute;
            bottom: 0;
            left: 0;
            background: ${props=> props.theme.background.header.elements};
            transition: all 0.5s;
        };
        &:hover{
            color: ${props=> props.theme.color.header.text.hover};
                &:before{
                    width: 100%;
                    left:0;
                    background: ${props=> props.theme.color.header.text.hover};
                }
        }
        &:last-child{
            margin-right:0;
        }
    };
    
    .link--active{
        color: ${props=> props.theme.color.header.text.active};
            &:before{
                width: 100%;
                left:0;
                background: ${props=> props.theme.color.header.text.active};
            }
    };
`;

export const HeaderBottomRightBlock = styled.div`
    height: 100%;
    width: 200px;
    min-width: max-content;
    margin: 0px auto 10px 80px;
    position: relative;
    display: inline-flex;
`;