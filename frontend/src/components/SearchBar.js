// src/components/SearchBar.js

import React, { useState } from 'react';

function SearchBar({ onSearch }) {
    const [query, setQuery] = useState('');

    const handleSearch = () => {
        onSearch(query);
    };

    return (
        <div style={{ marginBottom: '20px' }}>
            <input
                type="text"
                placeholder="Search by name or ID"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                style={{ padding: '10px', marginRight: '10px' }}
            />
            <button onClick={handleSearch} style={{ padding: '10px' }}>Search</button>
        </div>
    );
}

export default SearchBar;
