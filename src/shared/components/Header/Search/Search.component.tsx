import React, {useContext, useState} from 'react';
import {SearchBlock, SearchDropdown} from './Search.styled';

import {ReactComponent as SearchIcon} from './search.svg';

import LanguageContext, {ILanguage} from '../../../language/language';

const Search = () => {
    const language = useContext<ILanguage>(LanguageContext);
    const [visible, setVisible] = useState(false);

    return(
        <SearchBlock>
            <SearchIcon 
                onClick={()=>setVisible(prevState=>!prevState)}
                className='search-icon-hidden'
            />
            <SearchDropdown active={visible}>
                <input
                        type='text'
                        placeholder={language.header.search}
                    />
                <SearchIcon 
                        className='search-icon-dropped'
                    />
            </SearchDropdown>
        </SearchBlock>
    )
}

export default Search