import React from "react";

const Item = ({ name, quantity, category, onSelect }) => {
    return(
        <div className="flex flex-col" onClick={onSelect}>
            <p className="font-mono text-lg font-bold text-xl">{name}</p>
            <p className="font-mono text-lg">{quantity}</p>
            <p className="font-mono text-lg">{category}</p>
        </div>
    );
}

export default Item;