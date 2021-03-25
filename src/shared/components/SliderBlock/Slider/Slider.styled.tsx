import styled from '@emotion/styled';


export const StyledSlider = styled.div<{color?:string}>`
width: 100%;
display: inline-flex;
margin: auto 10px;

input[type=range] {
    height: 25px;
    -webkit-appearance: none;
    margin: 10px 0;
    width: 80%;
    background: transparent;
  }
  input[type=range]:focus {
    outline: none;
  }
  input[type=range]::-webkit-slider-runnable-track {
    width: 100%;
    height: 2px;
    cursor: pointer;
    animate: 0.2s;
    box-shadow: 0px 0px 0px #000000;
    background: ${p=> p.color? p.color: "#2497E3"};
    border-radius: 1px;
    border: 0px solid #000000;
  }
  input[type=range]::-webkit-slider-thumb {
    box-shadow: 0px 0px 0px #000000;
    border: 1px solid #2497E3;
    height: 18px;
    width: 18px;
    border-radius: 25px;
    background: white;
    cursor: pointer;
    -webkit-appearance: none;
    margin-top: -8px;
  }
  input[type=range]:focus::-webkit-slider-runnable-track {
    background: #2497E3;
  }
  input[type=range]::-moz-range-track {
    width: 100%;
    height: 2px;
    cursor: pointer;
    animate: 0.2s;
    box-shadow: 0px 0px 0px #000000;
    background: #2497E3;
    border-radius: 1px;
    border: 0px solid #000000;
  }
  input[type=range]::-moz-range-thumb {
    box-shadow: 0px 0px 0px #000000;
    border: 1px solid #2497E3;
    height: 18px;
    width: 18px;
    border-radius: 25px;
    background: #A1D0FF;
    cursor: pointer;
  }
  input[type=range]::-ms-track {
    width: 100%;
    height: 2px;
    cursor: pointer;
    animate: 0.2s;
    background: transparent;
    border-color: transparent;
    color: transparent;
  }
  input[type=range]::-ms-fill-lower {
    background: #2497E3;
    border: 0px solid #000000;
    border-radius: 2px;
    box-shadow: 0px 0px 0px #000000;
  }
  input[type=range]::-ms-fill-upper {
    background: #2497E3;
    border: 0px solid #000000;
    border-radius: 2px;
    box-shadow: 0px 0px 0px #000000;
  }
  input[type=range]::-ms-thumb {
    margin-top: 1px;
    box-shadow: 0px 0px 0px #000000;
    border: 1px solid #2497E3;
    height: 18px;
    width: 18px;
    border-radius: 25px;
    background: #A1D0FF;
    cursor: pointer;
  }
  input[type=range]:focus::-ms-fill-lower {
    background: #2497E3;
  }
  input[type=range]:focus::-ms-fill-upper {
    background: #2497E3;
  }
p{
    margin-left: 20px;
}
`;