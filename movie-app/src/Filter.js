// Filter.js
import React from 'react';

const Filter = ({ setSearchTitle, setMinRating }) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Search by title"
        onChange={(e) => setSearchTitle(e.target.value)}
      />
      <input
        type="number"
        placeholder="Min rating"
        onChange={(e) => setMinRating(e.target.value)}
        min="0"
        max="10"
      />
    </div>
  );
};

export default Filter;

