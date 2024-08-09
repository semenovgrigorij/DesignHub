import React from 'react';
import './filter.css';
import FilterSection from '../filterSection/FilterSection'

const Filter = () => {
  return (
    <div className="filter">
        <h2>Filter</h2>
        <FilterSection title="By content type">
          <label>
            <input type="checkbox" className="styled-checkbox" />
            Photographs
          </label>
          <label>
            <input type="checkbox" className="styled-checkbox" />
            Video
          </label>
          <label>
            <input type="checkbox" className="styled-checkbox" />
            Vector
          </label>
          <label>
            <input type="checkbox" className="styled-checkbox" />
            Drawings
          </label>
          <label>
            <input type="checkbox" className="styled-checkbox" />
            3D
          </label>
        </FilterSection>
        <FilterSection title="Orientation">
          <label>
            <input type="checkbox" className="styled-checkbox" />
            Horizontal
          </label>
          <label>
            <input type="checkbox" className="styled-checkbox" />
            Vertical
          </label>
        </FilterSection>
        <FilterSection title="By size">
          <label>
            <input type="checkbox" className="styled-checkbox" />
            Small
          </label>
          <label>
            <input type="checkbox" className="styled-checkbox" />
            Medium
          </label>
          <label>
            <input type="checkbox" className="styled-checkbox" />
            Large
          </label>
        </FilterSection>

				<FilterSection title="By color scheme">
          <label>
            <input type="checkbox" className="styled-checkbox" />
						By color scheme
          </label>
          <label>
            <input type="checkbox" className="styled-checkbox" />
            Specific color
          </label>
          <label>
            <input type="checkbox" className="styled-checkbox" />
            Color
          </label>
        </FilterSection>

				
				<FilterSection title="By popularity">
          <label>
            <input type="checkbox" className="styled-checkbox" />
						Most viewed
          </label>
          <label>
            <input type="checkbox" className="styled-checkbox" />
            Most commented
          </label>
          <label>
            <input type="checkbox" className="styled-checkbox" />
            Most liked
          </label>
        </FilterSection>
    </div>
  );
};

export default Filter;
