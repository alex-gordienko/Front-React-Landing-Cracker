import React, { useState } from 'react';

import EngIcon from './english.svg';
import RuIcon from './russia.svg';
import UaIcon from './ukraine.svg';


import {
    StyledLangBlock,
    LangSelectedBlock
} from './LanguageSelector.styled';

const langIcons=[
    {
        index: 1,
        icon: EngIcon,
    },
    {
        index: 2,
        icon: RuIcon
    },
    {
        index: 3,
        icon: UaIcon
    }
];

interface ILangSelector{
    selectedLang: number;
    onLangSelect: (value: number)=> void;
}

const LanguageSelector = ({ selectedLang, onLangSelect}:ILangSelector)=>{
    const [active, setActive] = useState(false);

    return(
        <LangSelectedBlock onClick={()=>setActive(prev=>!prev)}>
            <img src={langIcons.filter(elem=> elem.index===selectedLang)[0].icon} alt=''/>
            <StyledLangBlock active={active}>
                {langIcons.filter(elem=> elem.index!==selectedLang)
                    .map(elem=>{
                        return <li><img src={elem.icon} onClick={()=>onLangSelect(elem.index)} alt=''/></li>
                    })}
            </StyledLangBlock>
        </LangSelectedBlock>
            
        
    )
};

export default LanguageSelector