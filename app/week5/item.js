export default function Item({ name, quantity, category }) {
    return (
    <ol className="p-5 m-5 shadow-md rounded-lg mb-4 bg-slate-700 max-w-sm">
        <li>Name: {name}</li>
        <li>Quantity: {quantity}</li>
        <li>Category: {category}</li>
      </ol>
    );
  }