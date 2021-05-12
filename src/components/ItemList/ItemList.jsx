import ItemListItem from "../ItemListItem/ItemListItem"


export default function ItemList({items, handleAddToBuild}) {
return (
    <div className="items">
    {items.map((item, idx) => 
    <ItemListItem item={item} handleAddToBuild={handleAddToBuild}/>
    )}
    </div>
)
}