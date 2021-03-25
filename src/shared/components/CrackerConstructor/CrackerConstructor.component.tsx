import React, { useState } from 'react';

import {
    CrackerConstructorContainer,
    Label,
    CurrentValue
} from './CrackerConstructor.styled';

import SliderBlock from '../SliderBlock';


interface ICrackerConstructor{
    maxSum: number;
    onSetCracker: (cracker: {
        ingridient1: number; 
        ingridient2: number; 
        ingridient3: number; 
        ingridient4: number; 
        packSize: number
    })=> void;
}

const CrackerConstructor = ({maxSum, onSetCracker}:ICrackerConstructor)=>{

    const [ingridients, setIngridients] = useState({
        ing1:0, 
        ing2:0, 
        ing3:0, 
        ing4:0, 
        packSize:1,
        value:0
    });

    const getIngridients = (params: {
        ing1: number;
        ing2: number;
        ing3: number;
        ing4: number;
    })=>{
        setIngridients({
            ...params, 
            packSize:ingridients.packSize, 
            value:(params.ing1*0.45
                    +params.ing2*0.3
                    +params.ing3*0.6
                    +params.ing4*0.4)*ingridients.packSize
                    
            })
    }

    return(
        <CrackerConstructorContainer>
            <Label>
                Cracker constructor
            </Label>
            <CurrentValue>
                Current value: {ingridients.value} 
            </CurrentValue>
            <SliderBlock maxSum={maxSum} onSetCracker={getIngridients}/>
        </CrackerConstructorContainer>
    )

}

export default CrackerConstructor