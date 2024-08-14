import React from 'react';
import FilterSection from '../filterSection/FilterSection'
import './sort.css'


const Sort = ({isVisible}) => {
  return (
    <div className={`sort ${isVisible ? 'visible' : ''}`}>
      <div className="sort-header">
        <h2>Sort</h2>
        <button>Clear Search</button>
      </div>
        <FilterSection title="By date">
          <label>
            <input type="checkbox" className="styled-checkbox" />
            Ascending
          </label>
          <label>
            <input type="checkbox" className="styled-checkbox" />
            Descending
          </label>
        </FilterSection>
        <FilterSection title="By alphabet">
          <label>
            <input type="checkbox" className="styled-checkbox" />
            Ascending (A-Z)
          </label>
          <label>
            <input type="checkbox" className="styled-checkbox" />
            Descending (Z-A)
          </label>
        </FilterSection>
        <FilterSection title="By author">
          <label>
            <input type="checkbox" className="styled-checkbox" />
            Alphabetically
          </label>
          <label>
            <input type="checkbox" className="styled-checkbox" />
            Alphabetically
          </label>
        </FilterSection>

				<FilterSection title="By popularity">
          <label>
            <input type="checkbox" className="styled-checkbox" />
						By number of likes
          </label>
          <label>
            <input type="checkbox" className="styled-checkbox" />
            By number of views 
          </label>
        </FilterSection>
    </div>
  );
};

export default Sort;
