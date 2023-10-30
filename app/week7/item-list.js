"use client"
import React, { useState, useEffect } from "react";
import Item from './item';

const ItemList = ({ items, sortBy, onItemSelect }) => {
    const [sortedItems, setSortedItems] = useState([]);

    useEffect(() => {
        const sorted = [...items].sort((a, b) => {
            if (sortBy === 'name') {
                return a.name.localeCompare(b.name);
            } else if (sortBy === 'category') {
                return a.category.localeCompare(b.category);
            }
            return 0;
        });
        setSortedItems(sorted);
    }, [sortBy, items]);

    return (
        <div className="grid grid-cols-2 p-6 m-6 mt-0 ">
        {sortedItems.map((item, index) => (
            <div key={index} style={{border: '1px solid purple', padding: '10px', margin: '10px'}}
                 onClick={() => onItemSelect(item.name)}>
                <Item 
                    name={item.name} 
                    quantity={item.quantity} 
                    category={item.category} 
                />
            </div>
        ))}
        </div>
    );
}

export default ItemList;