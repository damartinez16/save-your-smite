import ItemListItem from "../ItemListItem/ItemListItem"

export default function ItemList({items}) {
    const builditems = items.map(item =>
      <ItemListItem item={item}/>
    )
return (
    <div>
    <h1>Item List</h1>
    {builditems}
    <ItemListItem />
    </div>
)
}