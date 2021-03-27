import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const StyledContainer = styled.div`
    display: block;
    width: 100%;
    height: max-content;
    position: relative;
    z-index: 20;
`;

export const PictureBlock = styled.div`
    display: inline-flex;
    width: auto;
    flex-flow: column;
    margin: 0;
`;

export const Picture = styled.div<{isRightSide?:boolean}>`

    @media (min-width:1500px){
        transition: all 0.6s ease;
        display: block;
        flex-flow: wrap;
        width: auto;
        min-width: 400px;
        height: max-content;
        margin: 10px 0px;
        min-height: 250px;
        position: relative;
        overflow: hidden;
        z-index: 30;
        .label{
            margin: 0;
            color: ${props=> props.theme.color.body.text.overPic};
            font-family: "Fredoka One";
            font-size: 2em;
            text-transform: uppercase;
            width: 25vh;
            position: absolute;
            top: 10%;
            left: ${props=> props.isRightSide ? '30%':'70%'};
            z-index: 20;
            transform: translate(-50%, -50%);
        }
    
        img{
            width: 100vh;
            min-height: max-content;
            position: relative;
        };
    
        .text-box{
            vertical-align: center;
            display: inline-block;
            width: 55vh;
            height: auto;
            background: ${props=> props.theme.background.body.overPic};
            color: ${props=> props.theme.color.body.text.default};
            top: 10%;
            ${props=> props.isRightSide ? 'right:0':'left: 0; text-align: end'};
            margin: 0;
            position: absolute;
            z-index: 10;
    
            .text{
                width: 70%;
                max-width: 400px;
                font-size: 1em;
                margin: ${props=> props.isRightSide ? "30px auto 30px 50px" : "30px 50px 30px auto"};
            }
            &:after{
                content: '';
                position: absolute;
                ${props=> props.isRightSide ? 'left:0':'right: 0'};
                top:0;
                margin: ${props=> props.isRightSide ? '0px auto 0px 6%':'0px 6% 0px auto'};
                width: 2px;
                height: 75%;
                border: none;
                border-radius: 2px;
                background: ${props=> props.theme.color.body.styledElements};
                transition: all 0.5s;
            }
        }
    }
    @media (min-width:1425px) and (max-width:1499px){
        transition: all 0.6s ease;
        display: block;
        flex-flow: wrap;
        width: auto;
        min-width: 400px;
        height: max-content;
        margin: 10px 0px;
        min-height: 250px;
        position: relative;
        overflow: hidden;
        z-index: 30;
        .label{
            margin: 0;
            color: ${props=> props.theme.color.body.text.overPic};
            font-family: "Fredoka One";
            font-size: 2em;
            text-transform: uppercase;
            width: 25vh;
            position: absolute;
            top: 10%;
            left: ${props=> props.isRightSide ? '30%':'70%'};
            z-index: 20;
            transform: translate(-50%, -50%);
        }
    
        img{
            width: 100vh;
            min-height: max-content;
            position: relative;
        };
    
        .text-box{
            vertical-align: center;
            display: inline-block;
            width: 55vh;
            height: auto;
            background: ${props=> props.theme.background.body.overPic};
            color: ${props=> props.theme.color.body.text.default};
            top: 10%;
            ${props=> props.isRightSide ? 'right:0':'left: 0; text-align: end'};
            margin: 0;
            position: absolute;
            z-index: 10;
    
            .text{
                width: 70%;
                max-width: 400px;
                font-size: 1em;
                margin: ${props=> props.isRightSide ? "30px auto 30px 50px" : "30px 50px 30px auto"};
            }
            &:after{
                content: '';
                position: absolute;
                ${props=> props.isRightSide ? 'left:0':'right: 0'};
                top:0;
                margin: ${props=> props.isRightSide ? '0px auto 0px 6%':'0px 6% 0px auto'};
                width: 2px;
                height: 75%;
                border: none;
                border-radius: 2px;
                background: ${props=> props.theme.color.body.styledElements};
                transition: all 0.5s;
            }
        }
    }
    @media (min-width: 100px) and (max-width: 1424px){
        transition: all 0.6s ease;
        display: block;
        flex-flow: wrap;
        width: 100%;
        min-width: 100px;
        height: max-content;
        margin: 10px 0px;
        min-height: 250px;
        position: relative;
        overflow: hidden;
        z-index: 30;
        .label{
            margin: 0;
            color: ${props=> props.theme.color.body.text.overPic};
            font-family: "Fredoka One";
            font-size: 2em;
            text-transform: uppercase;
            width: 25%;
            position: absolute;
            top: 20%;
            left: ${props=> props.isRightSide ? '30%':'70%'};
            z-index: 20;
            transform: translate(-50%, -50%);
        }
    
        img{
            width: 100%;
            min-height: max-content;
            position: relative;
        };
    
        .text-box{
            vertical-align: center;
            display: inline-block;
            width: 55%;
            height: auto;
            background: ${props=> props.theme.background.body.overPic};
            color: ${props=> props.theme.color.body.text.default};
            top: 20vh;
            ${props=> props.isRightSide ? 'right:0':'left: 0; text-align: end'};
            margin: 0;
            position: absolute;
            z-index: 10;
    
            .text{
                width: 70%;
                max-width: 400px;
                font-size: 1em;
                margin: ${props=> props.isRightSide ? "30px auto 30px 10%" : "30px 10% 30px auto"};
            }
            &:after{
                content: '';
                position: absolute;
                ${props=> props.isRightSide ? 'left:0':'right: 0'};
                top:0;
                margin: ${props=> props.isRightSide ? '0px auto 0px 6%':'0px 6% 0px auto'};
                width: 2px;
                height: 75%;
                border: none;
                border-radius: 2px;
                background: ${props=> props.theme.color.body.styledElements};
                transition: all 0.5s;
            }
        }
    }

    
`