import ItemListItem from "../ItemListItem/ItemListItem"


export default function ItemList({items, handleAddToBuild}) {
return (
    <>
    <h1>SELECT YOUR ITEMS</h1>
    <div className="items">
    {items.map((item, idx) => 
    <ItemListItem item={item} handleAddToBuild={handleAddToBuild}/>
    )}
    </div>
    </>
)
}