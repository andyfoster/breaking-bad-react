import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import Header from './components/ui/Header';
import CharacterGrid from './components/characters/CharacterGrid';
import Search from './components/ui/Search';

const App = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState('');
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      setIsLoading(true);

      const result = await axios(
        `https://www.breakingbadapi.com/api/characters`
      );
      // set data and don't change it
      setData(result.data);

      // set the current items in query - start with all
      setItems(result.data);

      setIsLoading(false);
    };

    fetchItems();
  }, []);

  useEffect(() => {
    setItems(
      data.filter((e) => {
        let q = query.toLowerCase();
        let n = e.name.toLowerCase();
        return n.includes(q);
      })
    );
  }, [query, data]);

  return (
    <div className="container">
      <Header />
      <Search getQuery={(q) => setQuery(q)} />
      <CharacterGrid items={items} isLoading={isLoading} />
    </div>
  );
};

export default App;
