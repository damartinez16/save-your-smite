import ItemListItem from "../ItemListItem/ItemListItem"

export default function ItemList({items}) {
return (
    <div>
    {items.map((item, idx) => 
    <ItemListItem item={item}/>
    )}
    </div>
)
}