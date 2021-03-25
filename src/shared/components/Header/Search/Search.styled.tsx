import { css } from '@emotion/react';
import styled from '@emotion/styled';


const hiddenSearch = css`
    display: none;
    .search-icon-hidden{
        display: block;
    }
`;

const activeSearch = css`
    height: min-content;
    .search-icon-hidden{
        display: none;
    }
`;

export const SearchBlock = styled.div`
    width: 50px;
    height: 30px;
    margin: auto 0px 10px 0px;
    display: inline-block;
    position: relative;
    .search-icon-hidden, .search-icon-dropped{
        display: block;
        margin: 10px auto 5px auto;
    };    
`;

export const SearchDropdown = styled.div<{active:boolean}>`
    z-index: 10;
    width: 40vh;
    position: relative;
    right: 30vh;
    top: 12px;
    background: ${props=> props.theme.background.header.subcontainer};
    display: inline-flex;

    ${props=> props.active? activeSearch:hiddenSearch};

    input{
        width: max-content;
        height: 25px;
        margin: 2px 0px 2px 5px;
        background: transparent;
        border: none;
    }
`;

