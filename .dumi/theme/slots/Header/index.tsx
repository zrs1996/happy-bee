import DumiSearchBar from 'dumi/theme-default/slots/SearchBar';
import React, { ReactElement, useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react';
import Navigation from './Navigation';
import Logo from './Logo';
import './style/index.scss'

const Header: React.FC = () => {


  const menu = [
    <Navigation key='navigation' />
  ];

  return (
    <header className='nav-header-wrapper'>
      <Logo/>
      <div className="nav-search-wrapper">
        <DumiSearchBar />
      </div>
      <div className='nav-menu-wrapper'>
        {menu}
      </div>
    </header>
  )
};

export default Header;