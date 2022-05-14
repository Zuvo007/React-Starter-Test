import React from 'react'
import Vegetable from '../Vegetable/Vegetable';
import './VegetableList.css';
import { vegetables } from '../../data/vegetables';

function VegetableList({searchText}) {
    console.log();
  return (
    <div className='vegetable-list'>
       { vegetables.map((vegetable) => {
           return vegetable.name.toLowerCase().includes(searchText) ? <Vegetable key={vegetable.id} vegetable={vegetable} /> : null
       }
       )}
    </div>
  )
}

export default VegetableList