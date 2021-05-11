import ItemListItem from "../ItemListItem/ItemListItem"

export default function ItemList({items, handleAddToBuild}) {
return (
    <div>
    {items.map((item, idx) => 
    <ItemListItem item={item} handleAddToBuild={handleAddToBuild}/>
    )}
    </div>
)
}