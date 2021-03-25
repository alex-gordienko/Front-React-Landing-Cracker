import React, {useContext} from 'react';
import {NavLink} from 'react-router-dom';
import LanguageContext, {ILanguage} from '../../language/language';

import {
    HeaderContainer,
    HeaderFullTopBlock,
    HeaderFullBottomBlock,
    HeaderBottomCenterBlock,
    HeaderBottomLeftBlock,
    HeaderBottomRightBlock
} from './Header.styled';

import Search from './Search';
import LanguageSelector from './LanguageSelector';

interface IHeaderProps{
    selectedLang: number;
    onLangSelect: (value: number)=> void;
}

const Header = ({ selectedLang, onLangSelect}:IHeaderProps)=>{
    const language = useContext<ILanguage>(LanguageContext);

    return(
        <HeaderContainer>
            <HeaderFullTopBlock>

            </HeaderFullTopBlock>
            <HeaderFullBottomBlock>
                <HeaderBottomLeftBlock>
                    Cracker
                </HeaderBottomLeftBlock>
                <HeaderBottomCenterBlock>
                        <NavLink exact={true} to='/' className='link' activeClassName='link--active'>
                            {language.header.menu.main}
                        </NavLink>
                        <NavLink to='/service' className='link' activeClassName='link--active'>
                            {language.header.menu.about}
                        </NavLink>
                        <NavLink to='/products' className='link' activeClassName='link--active'>
                            {language.header.menu.contacts}
                        </NavLink>
                        <NavLink to='/about' className='link' activeClassName='link--active'>
                            {language.header.menu.checkout}
                        </NavLink>
                        <NavLink to='/contacts' className='link' activeClassName='link--active'>
                            {language.header.menu.account}
                        </NavLink>
                </HeaderBottomCenterBlock>
                <HeaderBottomRightBlock>
                    <Search/>
                    <LanguageSelector selectedLang={selectedLang} onLangSelect={onLangSelect}/>
                </HeaderBottomRightBlock>
            </HeaderFullBottomBlock>
            
        </HeaderContainer>
    )
}

export default Header
