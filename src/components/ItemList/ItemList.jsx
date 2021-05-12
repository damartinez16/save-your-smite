import ItemListItem from "../ItemListItem/ItemListItem"


export default function ItemList({items, handleAddToBuild}) {
return (
    <>
    <h1>SELECT YOUR ITEMS</h1>
    <div className="items">
    {items.map((item, idx) => 
    <ItemListItem key={idx} item={item} handleAddToBuild={handleAddToBuild}/>
    )}
    </div>
    </>
)
}