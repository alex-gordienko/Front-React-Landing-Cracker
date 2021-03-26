import React, { ReactComponentElement } from 'react';

import {
    StyledSlider
} from './Slider.styled';

interface ISlider {
    Icon?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
    id?: string;
    color: string;
    value: number;
    disabled?: boolean;
    maxVal: number;
    onChange: (e: React.FormEvent<HTMLInputElement>) => void;
}

const Slider = ({id, Icon, color, disabled, value, maxVal, onChange}:ISlider)=>{

    return(
        <StyledSlider color={color}>
            {Icon? <Icon style={{width: '30px', height:'30px', fill:color}}/>: null}
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