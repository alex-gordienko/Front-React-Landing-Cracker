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
import { ReactComponent as PhoneIcon } from '../../../assets/phone.svg';
import { ReactComponent as AdressIcon } from '../../../assets/navigation.svg';
import { ReactComponent as ShareIcon } from '../../../assets/share.svg';

import LanguageContext, {ILanguage} from '../../language/language';


const Footer = () => {

    const language = useContext<ILanguage>(LanguageContext);

    return(
        <StyledFooter>
            <FooterLeftBlock>
                <FooterLabel>
                    <PhoneIcon style={{width: '20', height:'20', marginRight: '10px'}}/>
                    {language.footer.label1}
                </FooterLabel>
                <FooterList>
                    <FooterListItem>+8(800)-555-3535</FooterListItem>
                </FooterList>
            </FooterLeftBlock>
            <FooterCenterBlock>
                <FooterLabel>
                    <AdressIcon style={{width: '20', height:'20', marginRight: '10px'}}/>
                    {language.footer.label2}
                </FooterLabel>
                <FooterList>
                    <FooterListItem>Alex Gordienko (Рядовой Куча)</FooterListItem>
                    <FooterListItem>Odessa, Ukraine</FooterListItem>
                    <FooterListItem>Junior React TS</FooterListItem>
                </FooterList>
            </FooterCenterBlock>
            <FooterRightBlock>
                <FooterLabel>
                    <ShareIcon style={{width: '20', height:'20', marginRight: '10px'}}/>
                    {language.footer.label3}
                </FooterLabel>
                <FooterList>
                    
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