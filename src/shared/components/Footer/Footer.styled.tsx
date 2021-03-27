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
    font-family: 'Avenir';
    font-size: 1em;
    font-weight: bolder;
    text-align: center;
`;

export const FooterList = styled.ul`
    list-style: none;
    padding: 0;
    height: 50%;
    margin: 10px auto;
    display: inline-flex;
    flex-flow: column;
    width: 100%;
`;

export const FooterListItem = styled.li`
    margin: 5px 2px;
    text-align: center;
`;


export const FooterLeftBlock = styled.div`
    color: ${props => props.theme.color.footer.text.default};
    margin: 0px auto 0px auto;
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
