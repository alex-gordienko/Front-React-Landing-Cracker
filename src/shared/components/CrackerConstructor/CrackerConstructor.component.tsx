import React, { useState } from 'react';

import {
    CrackerConstructorContainer,
    Label,
    CurrentValue,
    AddtoCart
} from './CrackerConstructor.styled';

import SliderBlock from '../SliderBlock';
import Select from '../Select';
import { ICracker, zeroCart } from '../../../App';


interface ICrackerConstructor{
    maxSum: number;
    onSetCracker: (cracker: ICracker)=> void;
}

const CrackerConstructor = ({maxSum, onSetCracker}:ICrackerConstructor)=>{

    const [ingridients, setIngridients] = useState(zeroCart);

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

    const onPackSelect = (item: number)=>{
        setIngridients({
            ...ingridients,
            value:(ingridients.ing1*0.45
                +ingridients.ing2*0.3
                +ingridients.ing3*0.6
                +ingridients.ing4*0.4)*item,
            packSize:item
        })
    }

    return(
        <CrackerConstructorContainer>
            <Label>
                Cracker constructor
            </Label>
            <CurrentValue>
                Current value: {ingridients.value} €
            </CurrentValue>
            <SliderBlock maxSum={maxSum} onSetCracker={getIngridients}/>
            <Select items={[['Small Pack', 2], ['Medium Pack', 4], ['Large Pack', 10]]} onSelect={onPackSelect}/>
            <AddtoCart onClick={()=>onSetCracker(ingridients)}>
                <div className='butt-content'></div>
            </AddtoCart>
        </CrackerConstructorContainer>
    )

}

export default CrackerConstructor