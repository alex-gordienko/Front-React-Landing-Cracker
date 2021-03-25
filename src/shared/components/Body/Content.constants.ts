
import Feed1 from '../../../assets/Feed1.jpg';
import Feed2 from '../../../assets/Feed2.jpg';

import {ILanguage} from '../../language/language';

export const FullWidthConstant = (language:ILanguage) => ([
    {
        img: Feed1,
        label: language.body.contentBlock2.elem1.elemLabel,
        text:  language.body.contentBlock2.elem1.text
    },
    {
        img: Feed2,
        label: language.body.contentBlock2.elem2.elemLabel,
        text: language.body.contentBlock2.elem2.text
    },
])