import React from 'react';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import './sass/App.scss';
import { Vocals, Bass, Guitar, Drums, SecondVocals } from './pages';
import Logo from './hispencer/logo.jpg';



function App() {
  
  return (
    <div className='app'>
     
      <BrowserRouter>
        <div className='navigation'>
        <header className='header'>
        <img alt='logo' className='logo' src={Logo} />
          <nav>
          <ul>
            <li><NavLink to="/Vocals">Vocals</NavLink></li>
            <li><NavLink to="/Bass">Bass</NavLink></li>
            <li><NavLink to="/Guitar">Guitar</NavLink></li>
            <li><NavLink to="/Drums">Drums</NavLink></li>
            <li><NavLink to="/SecondVocals">Vocals II</NavLink></li>
          </ul>
          </nav>
        </header>
        </div>

        <main>
          <Routes>
            <Route path='/vocals'element={ <Vocals/>}/><Route/>
            <Route path='/bass'element={ <Bass/>}/><Route/>
            <Route path='/guitar'element={ <Guitar/>}/><Route/>
            <Route path='/drums'element={ <Drums/>}/><Route/>
            <Route path='/secondVocals'element={ <SecondVocals/>}/><Route/>
          </Routes>
        </main>

      </BrowserRouter>
    </div>
  );
}

export default App;
