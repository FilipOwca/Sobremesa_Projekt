import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import {LuFlower2} from 'react-icons/lu'
import {FaTimes, FaBars} from 'react-icons/fa'
import '../styles/Navbar.css';
import { IconContext } from 'react-icons/lib';

const Navbar = () => {
  const [click, setClick] = useState(false);

  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);

  const closeMobilMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  // useEffect(() => {
  //   showButton();
  // }, []);

  useEffect(() => {
    showButton();
    window.addEventListener('resize', showButton);
    
    // Cleanup function
    return () => {
      window.removeEventListener('resize', showButton);
    }
  }, []);
  

  window.addEventListener('resize', showButton);

  return (
    <>
      <IconContext.Provider value={{color: '#fff'}}>
        <nav className='navbar'>
          <div className='navbar-container container'>
            <Link to="/" className='navbar-logo' onClick={closeMobilMenu}>
              <LuFlower2 className='navbar-icon' />
              SOBREMESA
            </Link>
            <div className='menu-icon' onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li className='nav-item'>
                <Link to='/' className='nav-links' onClick={closeMobilMenu}>Home</Link>
              </li>
              <li className='nav-item'>
                <Link to='/services' className='nav-links' onClick={closeMobilMenu}>Services</Link>
              </li>
              <li className='nav-item'>
                <Link to='/products' className='nav-links' onClick={closeMobilMenu}>Products</Link>
              </li>
              <li className='nav-btn'>
                {button ? (<Link to='/sign-up' className='btn-link'>
                  <Button buttonStyle='btn--outline'>SIGN UP</Button>
                </Link>
                ) : (
                  <Link to='/sign-up' className='btn-link' onClick={closeMobilMenu}>
                    <Button buttonStyle='btn--outline' buttonSize='btn-mobile'>SIGN UP</Button>
                  </Link>
                )}
              </li>
            </ul>
          </div>
        </nav>
      </IconContext.Provider>
    </>
  )
}

export default Navbar;
