import React, { useState } from 'react';
import './filterSection.css';

import arrowIcon from '../../img/icon/arrow_right.svg'

const FilterSection = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSection = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="filter-section">
      <div className="filter-section__header" onClick={toggleSection}>
        <h3>{title}</h3>
        <img src={arrowIcon} className={`filter-section__icon ${isOpen ? 'open' : ''}`}/>        
      </div>
      {isOpen && <div className="filter-section__content">{children}</div>}
    </div>
  );
};

export default FilterSection;
