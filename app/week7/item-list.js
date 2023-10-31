import React, { useState, useEffect } from "react";
import Item from './item';

const ItemList = ({ items, onItemSelect }) => {
    const [sortBy, setSortBy] = useState('name');
    const [grouped, setGrouped] = useState(false);

    const handleSortByName = () => setSortBy('name');
    const handleSortByCategory = () => setSortBy('category');
    const handleToggleGrouping = () => setGrouped(!grouped);

    const handleItemClick = (selectedItem) => {
        onItemSelect(selectedItem);
    };

    const sortedItems = [...items].sort((a, b) => {
        if (sortBy === 'name') {
            return a.name.localeCompare(b.name);
        } else if (sortBy === 'category') {
            return a.category.localeCompare(b.category);
        }
        return 0;
    });

    const groupedItems = grouped
        ? items.reduce((result, item) => {
            const category = item.category;
            if (!result[category]) {
                result[category] = [];
            }
            result[category].push(item);
            return result;
        }, {})
        : null;

    return (
        <div>
            <div className="grid grid-cols-2 p-6 m-6 mt-0 ">
                <h1 className="text-2xl font-bold pb-2 border-b-2 border-black"
                style={{ border: '1px solid purple', padding: '10px', margin: '10px' }}>Item List</h1>
                <div className="flex flex-row space-x-4">
                    
                    <button
                        onClick={handleSortByName}
                        className={`p-2 rounded ${sortBy === 'name' ? 'bg-lightblue' : 'bg-black'} text-white`}
                        style={{ border: '1px solid purple', padding: '10px', margin: '10px' }}
                    >
                        Sort by Name
                    </button>
                    <button
                        onClick={handleSortByCategory}
                        className={`p-2 rounded ${sortBy === 'category' ? 'bg-lightblue' : 'bg-black'} text-white`}
                        style={{ border: '1px solid purple', padding: '10px', margin: '10px' }}
                    >
                        Sort by Category
                    </button>
                    <button
                        onClick={handleToggleGrouping}
                        className={`p-2 rounded ${grouped ? 'bg-lightblue' : 'bg-black'} text-white`}
                        style={{ border: '1px solid purple', padding: '10px', margin: '10px' }}
                    >
                        {grouped ? 'Grouped Category' : 'Ungrouped Category'}
                    </button>
                </div>
            </div>
            {grouped
                ? Object.keys(groupedItems)
                    .sort()
                    .map((category) => (
                        <div key={category}>
                            <h2 className="capitalize">{category}</h2>
                            {groupedItems[category]
                                .sort((a, b) => a.name.localeCompare(b.name))
                                .map((item) => (
                                    <div key={item.name} style={{ border: '1px solid purple', padding: '10px', margin: '10px' }}
                                        onClick={() => onItemSelect(item.name)}>
                                        <Item
                                            name={item.name}
                                            quantity={item.quantity}
                                            category={item.category}
                                        />
                                    </div>
                                ))}
                        </div>
                    ))
                : sortedItems.map((item, index) => (
                    <div key={index} style={{ border: '1px solid purple', padding: '10px', margin: '10px' }}
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
};

export default ItemList;