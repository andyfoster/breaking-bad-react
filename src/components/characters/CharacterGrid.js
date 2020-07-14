import React from 'react';
import CharacterItem from './CharacterItem';

const CharacterGrid = ({ items, isLoading }) => {
  return isLoading ? (
    <h1>...Loading</h1>
  ) : (
    <section className="cards">
      {items.map((item) => (
        // <h1 key={item.char_id}>{item.name}</h1>
        <CharacterItem key={item.char_id} item={item} />
      ))}
    </section>
  );
};

export default CharacterGrid;
