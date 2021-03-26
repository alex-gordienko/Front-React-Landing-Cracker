import styled from '@emotion/styled';

export const SelectContainer = styled.div`
  position: relative;
  display: flex;
  width: 200px;
  margin: 0 auto 5px 100px;

  background: transparent;
  
  border: 1px solid ${props=>props.theme.color.body.text.colored};
  border-radius: 20px;
  outline: none;
  height: 35px;
  z-index: 100;

  -webkit-touch-callout: none;
  -webkit-user-select: none;   
  -khtml-user-select: none;    
  -moz-user-select: none;     
  -ms-user-select: none;       
  user-select: none;
  
  &:hover{
    transition: all 0.3s;
    background: ${props=>props.theme.background.body.hover};
    border-color: ${props=>props.theme.color.body.text.hover};
  }
`;

export const Selection = styled.p`
  font-family: 'Avenir';
  font-size: 1em;
  font-weight: bolder;
  text-align: center;
  color: ${props=>props.theme.color.body.text.colored};
  margin: auto;
`;

export const Dropdown = styled.div<{visible:boolean}>`
  display: ${props=> props.visible? 'block': 'none'};
  position: absolute;
  width: inherit;
  border: 1px solid ${props=>props.theme.color.body.text.colored};
  border-radius: 15px;
  outline: none;
  max-height: 90px;
  background: ${prop=> prop.theme.background.body.overPicWhite};
  z-index: 100;
  top: 40px;
`;

export const Option = styled.div`
  border-radius: 35px;
  outline: none;
  padding: 4px 20px;
  text-align: center;
  font-family: 'Avenir';
  font-size: 1em;
  font-weight: bolder;
  color: ${props=>props.theme.color.body.text.colored};
  cursor: pointer;
  &:hover{
    transition: all 0.3s;
    background: ${props=>props.theme.background.body.hover};
  }
`
