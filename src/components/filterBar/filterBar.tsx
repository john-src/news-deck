import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { applyCountryFilter, applyCategoryFilter } from '../../actions';
import { COUNTRIES, CATEGORIES } from '../../constants';
import { StoreState } from '../../types';

const FilterBar = () => {
  const dispatch = useDispatch();
  const countryFilter: string = useSelector(
    (state: StoreState) => state.countryFilter
  );
  const categoryFilter: string = useSelector(
    (state: StoreState) => state.categoryFilter
  );

  const handleClick = (e) => {
    e.preventDefault();

    const type: string = e.target.getAttribute('type');
    const filterVal: string = e.target.getAttribute('label');

    if (type === 'country') dispatch(applyCountryFilter(filterVal));
    if (type === 'category') dispatch(applyCategoryFilter(filterVal));
  };

  return (
    <nav>
      <ul className="newsDeck__filterBar countries">
        {COUNTRIES.map((country, idx, arr) => (
          <li
            className={`newsDeck__filterBar-item${
              country === countryFilter ? '--selected' : ''
            }`}
            value={country}
            key={idx}
            onClick={handleClick}
          >
            <p
              label={country}
              className="newsDeck__filterBar-item--country"
              type={'country'}
            >
              {country.toUpperCase()}
            </p>
          </li>
        ))}
      </ul>
      <ul className="newsDeck__filterBar categories">
        {CATEGORIES.map((category, idx, arr) => (
          <li
            className={`newsDeck__filterBar-item${
              category === categoryFilter ? '--selected' : ''
            }`}
            value={category}
            key={idx}
            onClick={handleClick}
          >
            <p
              label={category}
              className="newsDeck__filterBar-item--category"
              type={'category'}
            >
              {category.toUpperCase()}
            </p>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default FilterBar;
