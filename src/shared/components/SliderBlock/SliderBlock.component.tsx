import React, { useState } from 'react';

import { 
    StyledSliderBlock
} from './SliderBlock.styled';

import { ReactComponent as SoyBean } from '../../../assets/soybean.svg';
import { ReactComponent as Sesame } from '../../../assets/sesame.svg';
import { ReactComponent as Wheat } from '../../../assets/wheat.svg';
import { ReactComponent as Corn } from '../../../assets/corn.svg';

import Slider from './Slider';

interface ISliderBlock {
    maxSum: number;
    onSetCracker: (cracker: {
        ing1: number; 
        ing2: number; 
        ing3: number; 
        ing4: number; 
    })=> void;
}

const SliderBlock = ({maxSum, onSetCracker}:ISliderBlock)=>{

    const [cracker, setCracker] = useState([0, 0, 0, 0]);

    const onChange = (e:React.FormEvent<HTMLInputElement>)=>{
        let elem = e.currentTarget;
 
        setCracker((prevState)=>{
            let newState = {...prevState, [parseInt(elem.id)]: parseInt(elem.value)};
            let tempSum = newState[0]+newState[1]+newState[2];

            if(tempSum<=maxSum){
                newState = {...newState, [3]:maxSum-tempSum};
                let newCracker = {
                    ing1: newState[0],
                    ing2: newState[1],
                    ing3: newState[2],
                    ing4: newState[3],
                };
                onSetCracker(newCracker);
                return newState
            }
            else return prevState
        })
    }
    return(
        <StyledSliderBlock>
            <Slider Icon={SoyBean} id="0" color='#00A651' value={cracker[0]} maxVal={100} onChange={onChange}/>
            <Slider Icon={Sesame} id="1" color='#49743F' value={cracker[1]} maxVal={100} onChange={onChange}/>
            <Slider Icon={Wheat} id="2" color='#ABA000' value={cracker[2]} maxVal={100} onChange={onChange}/>
            <Slider Icon={Corn}disabled={true} id="3" color='#989795' value={cracker[3]} maxVal={100} onChange={onChange}/>
        </StyledSliderBlock>
    )

}

export default SliderBlock