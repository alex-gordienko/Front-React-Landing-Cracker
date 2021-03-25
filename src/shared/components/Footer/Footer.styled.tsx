import styled from '@emotion/styled';

export const StyledFooter = styled.footer`
    width: 100%;
    max-height: 250px;
    display: inline-flex;
    margin: 10px auto;
`;

export const FooterLabel = styled.p`
    font-weight: bolder;
    color: ${props => props.theme.color.footer.text.label};
    margin-left: 20px;
`;

export const FooterList = styled.ul`
    list-style: none;
    margin-left: 20px;
    padding: 0;
    width: 100%;
    height: 50%;
    display: inline-block;
`;

export const FooterListItem = styled.li`
    margin: 5px 2px;
`;


export const FooterLeftBlock = styled.div`
    color: ${props => props.theme.color.footer.text.default};
    margin: 0px auto 0px 50px;
    width: calc(100%/3 - 80px);
    position: relative;

    &:after{
        content: '';
        position: absolute;
        right: 0;
        top:0;
        margin: 0px auto 0px 5%;
        width: 2px;
        height: 25%;
        border: none;
        border-radius: 2px;
        background: ${props=> props.theme.color.body.styledElements};
        transition: all 0.5s;
    }
`;

export const FooterCenterBlock = styled.div`
    color: ${props => props.theme.color.footer.text.default};
    margin: 0px auto 0px auto;
    width: calc(100%/3 + 160px);
    position: relative;

    ul{
        li{
            width: 45%;
            display: inline-flex;
            flex-flow: row;
        }
    };

    &:after{
        content: '';
        position: absolute;
        right: 0;
        top:0;
        margin: 0px auto 0px 5%;
        width: 2px;
        height: 25%;
        border: none;
        border-radius: 2px;
        background: ${props=> props.theme.color.body.styledElements};
        transition: all 0.5s;
    }
`;

export const FooterRightBlock = styled.div`
    color: ${props => props.theme.color.footer.text.default};
    margin: 0px 50px 0px auto;
    width: calc(100%/3 - 80px);
`;
