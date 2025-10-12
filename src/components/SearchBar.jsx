import { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} className="flex justify-center p-4">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search destinations..."
        className="border p-2 rounded-l-md w-64"
      />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded-r-md">Search</button>
    </form>
  );
};

export default SearchBar;