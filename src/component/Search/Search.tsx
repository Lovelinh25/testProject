import React, { useState, useEffect } from 'react';
import { TextField } from './TextField';
import './Search.css';

export const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredItems, setFilteredItems] = useState<string[]>([]);
  const items = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry', 'Fig', 'Grape'];

  useEffect(() => {
    if (searchTerm !== '') {
      const results = items.filter(item => item.toLowerCase().includes(searchTerm.toLowerCase()));
      setFilteredItems(results);
    } else {
      setFilteredItems([]);
    }
  }, [searchTerm]);

  return (
    <div className='search-header'>
      <h6>Search list</h6>
      <div className='search-container'>
        <TextField value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
      </div>
      {searchTerm !== '' && filteredItems.length > 0 && (
        <ul>
          {filteredItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
};
