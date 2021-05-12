import './ItemListItem.css';
export default function ItemListItem({item, handleAddToBuild}) {
  return (
      <button className="itemButton" onClick={() => handleAddToBuild(item._id)}>
    <div className="item">
        <div className="info">
    <div className="name">{item.DeviceName}</div>
    <img className="itemIcon" src={item.itemIcon_URL}/>
    <div className="gold">{item.Price} gold</div>
    <div>{item.Type}</div>
    </div>
    {/* <div className="itemDescription">
    <div>{item.ItemDescription.Description}</div>
    {item.ItemDescription.Menuitems.map((menI) => 
        <div>{menI.Description}{menI.Value}</div>
        )}
    <div>{item.ItemDescription.MenuItems}</div>
    <div>{item.ItemDescription.SecondaryDescription}</div>
    </div> */}
  </div> 
        </button>

  );
}