import React from 'react';
import english from './english';
import russian from './russian'

export interface ILanguage{
    header:{
        menu:{
            main: string;
            about: string;
            contacts: string;
            checkout: string;
            account: string;
        }
        search:string;
        langChange:{
            toRU: string;
            toUA: string;
            toENG: string;
        }
    }
    body:{
        contentBlock2: {
            elem1:{
                elemLabel: string;
                text: string;
            };
            elem2:{
                elemLabel: string;
                text: string;
            };
        };
    };
    footer:{
        label1: string;
        label2: string;
        label3: string;
    }
}

const LanguageContext = React.createContext(english);

export default LanguageContext