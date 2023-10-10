"use client";
import { productionBrowserSourceMaps } from "@/next.config";
import { useState } from "react";

export default function NewItem(){
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const[category, setCategory] = useState("Produce");
    const [itemCreated, setItemCreated] = useState(false);
    const handleSubmit = (item) => {
        item.preventDefault();

        const newItem = {
            name, 
            quantity, 
            category,
        };
        console.log(newItem);

        setItemCreated(true);

        setName("");
        setQuantity(1);
        setCategory("Produce");
    }

    const handleNameChange = (item) => {
        setName(item.target.value);
    }

    const handleQuantityChange = (item) => {
        setQuantity(item.target.value);
    };

    const handleCategoryChange = (item) => {
        setCategory(item.target.value);
    };

    return (
        <main>
            <div className="min-h-screen bg-blue-gray-100 flex items-center justify-center">
            {itemCreated && (
                    <div className="absolute top-0 mt-8 text-2xl text-yellow-400">
                        Item Created
                    </div>
                )}
                <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
                    <h1 className="text-2xl text-gray-800 font-bold mb-8">
                        Create New Item
                    </h1>
                    <form onSubmit={handleSubmit}>
                        <label className="block mb-4">
                            <span className="text-gray-800">Item Name:</span>
                            <input
                                required
                                onChange={handleNameChange}
                                value={name}
                                className="mt-1 p-1 block w-full rounded-md text-black bg-gray-100 focus:bg-white"
                            />
                        </label>
                        <label className="block mb-4">
                            <span className="text-gray-800">Quantity:</span>
                            <input
                                type="number" // Set the input type to "number"
                                required
                                min="1" // Set the min attribute to 1
                                max="99" // Set the max attribute to 99
                                onChange={handleQuantityChange}
                                value={quantity}
                                className="mt-1 p-1 block w-full rounded-md text-black bg-gray-100 focus:bg-white"
        />
                        </label>
                        <label className="block mb-4">
                            <span className="text-gray-800">Category:</span>
                            <select
                                required
                                onChange={handleCategoryChange}
                                value={category}
                                className="mt-1 p-1 block w-full rounded-md text-black bg-gray-100 focus:bg-white"
                            >
                                <option>Produce</option>
                                <option>Dairy</option>
                                <option>Bakery</option>
                                <option>Meat</option>
                                <option>Frozen Foods</option>
                                <option>Canned Goods</option>
                                <option>Dry Goods</option>
                                <option>Beverages</option>
                                <option>Snacks</option>
                                <option>Household</option>
                                <option>Other</option> ,
                            </select>
                        </label>
                        <button className="block w-full bg-yellow-400 hover:bg-yellow-300 p-4 rounded-lg text-yellow-900 font-bold">
                            Create Item
                        </button>
                    </form>
                </div>
            </div>
        </main>
    )
}