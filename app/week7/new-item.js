"use client";

import React, { useState } from 'react';

const NewItem = ({ onAddItem }) => {
  const [name, setName] = useState(''); 
  const [quantity, setQuantity] = useState(1); 
  const [category, setCategory] = useState('produce'); 

  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = { name, quantity, category };
    onAddItem(newItem);
    setName('');
    setQuantity(1);
    setCategory('produce');
  };

  return (
    <div className="min-h-screen bg-blue-gray-100 flex items-center justify-center">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-2xl text-gray-800 font-bold mb-8">Create New Item</h1>
        <form onSubmit={handleSubmit}>
          <label className="block mb-4">
            <span className="text-gray-800">Item Name:</span>
            <input 
              type="text" 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              className="mt-1 p-1 block w-full rounded-md text-black bg-gray-100 focus:bg-white"
              required 
            />
          </label>

          <label className="block mb-4">
            <span className="text-gray-800">Item Quantity:</span>
            <input 
              type="number" 
              value={quantity} 
              onChange={(e) => setQuantity(Number(e.target.value))} 
              min="1" 
              max="99" 
              className="mt-1 p-1 block w-full rounded-md text-black bg-gray-100 focus:bg-white"
              required
            />
          </label>

          <label className="block mb-4">
            <span className="text-gray-800">Item Category:</span>
            <select 
              value={category} 
              onChange={(e) => setCategory(e.target.value)} 
              className="mt-1 p-1 block w-full rounded-md text-black bg-gray-100 focus:bg-white"
            >
              <option value="produce">Produce</option>
              <option value="dairy">Dairy</option>
              <option value="meat">Meat</option>
              <option value="bakery">Bakery</option>
              <option value="beverages">Beverages</option>
            </select>
          </label>

          <button type="submit" className="w-full py-2 px-4 bg-rose-400 hover:bg-pink-700 text-white rounded-md focus:outline-none focus:shadow-outline">Add Item</button>
        </form>
      </div>
    </div>
  );
};

export default NewItem;