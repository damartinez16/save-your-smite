import './ItemListItem.css';
export default function ItemListItem({item, handleAddToBuild}) {
  return (
      <button className="itemButton" onClick={() => handleAddToBuild(item._id)}>
    <div className="item">
        <div className="info">
    <div className="name">{item.DeviceName}</div>
    <br/>
    <img className="itemIcon" src={item.itemIcon_URL}/>
    <br/>
    <div className="gold">{item.Price} gold</div>
    <div className="type">{item.Type}</div>
    </div>
  </div> 
        </button>

  );
}