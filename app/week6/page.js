"use client";

import { useState } from "react";
import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json";

export default function Page() {

    const [items, setItems] = useState(itemsData);

    const handleAddItem = (newItem) => {
        const updatedItems = [...items, newItem];

        setItems(updatedItems);
    };

    return (
        <main>
            <h1 className="text-4xl font-bold m-6 text-center text-orange-300">
                Shopping List
            </h1>
            <NewItem onAddItem={handleAddItem} />
            <ItemList items={items} />
        </main>
    );
}   