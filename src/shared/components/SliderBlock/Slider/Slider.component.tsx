import React from 'react';

import {
    StyledSlider
} from './Slider.styled';

interface ISlider {
    id?: string;
    color: string;
    value: number;
    disabled?: boolean;
    maxVal: number;
    onChange: (e: React.FormEvent<HTMLInputElement>) => void;
}

const Slider = ({id, color, disabled, value, maxVal, onChange}:ISlider)=>{

    return(
        <StyledSlider color={color}>
            <input 
            disabled={disabled}
            id={id}
            type="range" 
            value={value} 
            min='0' 
            max={maxVal} 
            step='10'
            onChange={onChange}
        />
        <p>{value}%</p>
        </StyledSlider>
        
    )
}

export default Slider