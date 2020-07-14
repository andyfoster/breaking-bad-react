import React, { useState } from 'react';

const Search = ({ getQuery }) => {
  const [text, setText] = useState();

  const onChange = (q) => {
    setText(q);
    getQuery(q);
  };

  return (
    <div>
      <form>
        <input
          type="text"
          autoFocus
          placeholder="Search for character"
          className="form-control"
          value={text}
          onChange={(e) => onChange(e.target.value)}
        />
      </form>
    </div>
  );
};

export default Search;
