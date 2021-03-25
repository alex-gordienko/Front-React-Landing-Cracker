import React, { useContext } from 'react';

import LanguageContext, {ILanguage} from '../../language/language';

import {
    StyledBody
} from './Body.styled';

import {FullWidthConstant} from './Content.constants'

import ContentContainer from './ContentContainer';
import CrackerConstructor from '../CrackerConstructor';


const Body = () => {

    const language = useContext<ILanguage>(LanguageContext);

    const watch = (e:any)=>{
        console.log(e)
    }

    return(
        <StyledBody>
            <ContentContainer 
                data={FullWidthConstant(language)}
                additionalBlock={{
                    children:<CrackerConstructor maxSum={100} onSetCracker={watch}/>, 
                    pasteIndex:1
                }}
                />
        </StyledBody>
    )
};

export default Body;