import React, { useEffect, useState } from 'react';
import {ThemeProvider} from '@emotion/react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import LanguageContext from './shared/language/language';
import russian from './shared/language/russian';
import english from './shared/language/english';

import light from './shared/styled/light';

import Header from './shared/components/Header';
import Body from './shared/components/Body';
import Footer from './shared/components/Footer';

export interface ICracker{
  ing1: number;
  ing2: number;
  ing3: number;
  ing4: number;
  packSize: number;
  value: number;
};

export const zeroCart:ICracker = {
  ing1: 0,
  ing2: 0,
  ing3: 0,
  ing4: 0,
  packSize: 1,
  value: 0
};

const App =()=>{
  const [lang, setLang] = useState(1);
  const [cart, setCart] = useState([zeroCart]);

  useEffect(()=>{
    console.log(cart)
  }, [cart])

  const Main = () =>{

    const getNewCart = (cracker: ICracker)=>{
      setCart([...cart, cracker]);
    }

    const onDelete = (id: number) =>{
      setCart((prevState)=>{
        return prevState.filter((elem,indx)=>indx!==id)
      })
    }
  
    return(
      <div>
        <Header 
            selectedLang={lang} 
            currentCart={cart} 
            onDelete={onDelete}
            onLangSelect={(e)=>setLang(e)}
        />
        <Body onSetCracker={getNewCart}/>
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
