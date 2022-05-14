
import React from 'react';
import VegetableList from './Components/VegetableList/VegetableList';
import { vegetables } from './data/vegetables';
import { useState } from 'react';
import './App.css';

function App() {
  const [searchText,setSearchText] = useState('');

  const handleSearch = (event) => {
    setSearchText(event.target.value);
  };

  return (
   <React.Fragment>
     <div className='search-bar-wrapper'>
     <input type='text' placeholder='Search for Vegetables' className='search-bar' onChange={handleSearch} />
     </div>
     <div className='vegetable-cards-container'>
       <VegetableList searchText={searchText}/>
      </div>
   </React.Fragment>
  );
}

export default App;
