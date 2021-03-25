import React, { useState } from 'react';
import {ThemeProvider} from '@emotion/react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import LanguageContext from './shared/language/language';
import russian from './shared/language/russian';
import english from './shared/language/english';

import light from './shared/styled/light';

import Header from './shared/components/Header';
import Body from './shared/components/Body';
import Footer from './shared/components/Footer'

const App =()=>{
  const [lang, setLang] = useState(1);

  const Main = () =>{
  
    return(
      <div>
        <Header selectedLang={lang} onLangSelect={(e)=>setLang(e)}/>
        <Body/>
        <Footer/>
      </div>
    )
  }

  return(
    <LanguageContext.Provider value={lang===1? english: russian}>
      <ThemeProvider theme={light}>
        <BrowserRouter basename={`${process.env.PUBLIC_URL}/`}>
          <Switch>
            <Route path='/' component={Main}/>
          </Switch>
        </BrowserRouter>
      </ThemeProvider>
    </LanguageContext.Provider>
  )
}

export default App;
