import React, { useContext } from 'react';

import LanguageContext, {ILanguage} from '../../language/language';

import {
    StyledBody,
    TasteIt
} from './Body.styled';

import {FullWidthConstant} from './Content.constants'

import ContentContainer from './ContentContainer';
import CrackerConstructor from '../CrackerConstructor';

interface IBody{
    onSetCracker: (cracker: {
        ing1: number; 
        ing2: number; 
        ing3: number; 
        ing4: number; 
        packSize: number;
        value: number;
    })=> void;
}

const Body = ({onSetCracker}:IBody) => {

    const language = useContext<ILanguage>(LanguageContext);

    const TasteItButton = () =>{
        return <TasteIt>
            <div className='butt-content'>Taste it</div>
        </TasteIt>
    }

    return(
        <StyledBody>
            <ContentContainer 
                data={FullWidthConstant(language)}
                additionalBlock={[{
                    children: TasteItButton(),
                    pasteIndex: 0
                },{
                    children:<CrackerConstructor maxSum={100} onSetCracker={onSetCracker}/>, 
                    pasteIndex:1
                }]}
                />
        </StyledBody>
    )
};

export default Body;