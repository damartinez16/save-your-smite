
export default function ItemListItem({item, handleAddToBuild}) {
  return (
      <button onClick={() => handleAddToBuild(item._id)}>
    <div className="item">
    <div className="pic flex-ctr-ctr">{item.ItemDescription.itemIcon_URL}</div>
    <div className="name">{item.DeviceName}</div>
    <img src={item.itemIcon_URL}/>
    <div className="buy">
    </div>
  </div>
  </button>
  );
}