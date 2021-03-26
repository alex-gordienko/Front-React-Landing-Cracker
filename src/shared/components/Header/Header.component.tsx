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
import Cart from './Cart';
import { ICracker } from '../../../App';

interface IHeaderProps{
    selectedLang: number;
    currentCart: ICracker[];
    onDelete: (id:number) => void;
    onLangSelect: (value: number)=> void;
}

const Header = ({ selectedLang, currentCart, onDelete, onLangSelect}:IHeaderProps)=>{
    const language = useContext<ILanguage>(LanguageContext);

    return(
        <HeaderContainer>
            <HeaderFullTopBlock>
                <Cart elements={currentCart} onDelete={onDelete}/>
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
