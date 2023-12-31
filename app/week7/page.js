"use client";

import { useState } from "react";
import ItemList from "./item-list";
import NewItem from "./new-item";
import ItemJson from "./item.json";
import MealIdeas from './meal-ideas';  // Import the new MealIdeas component

const Page = () => {
    const [sortBy, setSortBy] = useState('name');
    const [items, setItems] = useState(ItemJson);
    const [selectedIngredient, setSelectedIngredient] = useState('');

    const handleAddItem = newItem => {
        setItems(oldItems => [...oldItems, { ...newItem, id: Date.now().toString() }]);
    };

    const handleItemSelect = (itemName) => {
        const ingredient = itemName.split(',')[0].trim();
        setSelectedIngredient(ingredient);
    };

    return (
        <div>
            <h1 className="text-4xl font-mono mb-4 font-bold mt-8 ml-14">Shopping List</h1>
            <h2 className="text-2xl font-mono mb-4 font-bold mt-4 ml-14 text-pink-800">Add New Item</h2>
            
            <NewItem onAddItem={handleAddItem} />

            
            
            <ItemList items={items} sortBy={sortBy} onItemSelect={handleItemSelect}/>
            
            <MealIdeas ingredient={selectedIngredient}/>
        </div>
    );
}

export default Page;