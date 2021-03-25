import React, { useContext } from 'react'

import {
    StyledFooter,
    FooterLabel,
    FooterList,
    FooterListItem,
    FooterLeftBlock,
    FooterCenterBlock,
    FooterRightBlock
} from './Footer.styled';

import { ReactComponent as TelegramIcon } from '../../../assets/telegram.svg';
import { ReactComponent as InstagramIcon } from '../../../assets/instagram.svg';

import LanguageContext, {ILanguage} from '../../language/language';


const Footer = () => {

    const language = useContext<ILanguage>(LanguageContext);

    return(
        <StyledFooter>
            <FooterLeftBlock>
                <FooterLabel>{language.footer.label1}</FooterLabel>
                <FooterList>
                    <FooterListItem>Наши работы</FooterListItem>
                    <FooterListItem>Контакты</FooterListItem>
                    <FooterListItem>Доставка</FooterListItem>
                    <FooterListItem>Форма заказа</FooterListItem>
                </FooterList>
            </FooterLeftBlock>
            <FooterCenterBlock>
                <FooterLabel>{language.footer.label2}</FooterLabel>
                <FooterList>
                     <FooterListItem>FooterListItem</FooterListItem>
                </FooterList>
            </FooterCenterBlock>
            <FooterRightBlock>
                <FooterLabel>{language.footer.label3}</FooterLabel>
                <FooterList>
                    <FooterListItem>Alex Gordienko (Рядовой Куча)</FooterListItem>
                    <FooterListItem>Odessa, Ukraine</FooterListItem>
                    <FooterListItem>Junior React TS</FooterListItem>
                    <FooterListItem>
                        <a href='http://www.t-do.ru/alexoid1999/'>
                            <TelegramIcon
                                style={{width:'20px', height:'20px', margin:'0px 10px'}}
                            />
                        </a>
                        <a href='http://www.instagram.com/dedulya.exe'>
                            <InstagramIcon
                                style={{width:'20px', height:'20px', margin:'0px 10px'}}
                            />
                        </a>
                    </FooterListItem>
                </FooterList>
            </FooterRightBlock>
        </StyledFooter>
    )
}

export default Footer;