import Itemlist from "./item-list";
import Item from "./item"; // Make sure the path to the item file is correct

function Page() {
    return (
        <main className="p-2">
            <h2 className="text4x1 font-bold mb-4">Shopping List</h2>
            <Itemlist />
        </main>
    );
}

export default Page;