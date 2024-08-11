import React from 'react';
import './header.css';

import bellIcon from '../../img/icon/bell.svg'

const Header = () => {
  return (
    <header className="header">
      <div className="container header-container">
				<div className="header__left">
					<a href='#' className="header__logo">LOGO</a>
						<nav className="header__nav">
							<ul className="header__nav-list">
								<li className="header__nav-li"><a href="#">Projects</a></li>
								<li className="header__nav-li"><a href="#">Vacancies</a></li>
								<li className="header__nav-li"><a href="#">Specialists</a></li>
								<li className="header__nav-li"><a href="#">Education</a></li>
								<li className="header__nav-li"><a href="#">Support</a></li>
							</ul>
						</nav>
				</div>

        <div className="header__actions">
          <input type="text" placeholder="Search" className="header__search" />
					<img src={bellIcon} alt="bell" />
          <button className="header__login">Login</button>
          <button className="header__register">Registration</button>
        </div>
      </div>
    </header>
  )
};

export default Header;