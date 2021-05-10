export default function GodListItem({god}) {
    return (
      <div className="god">
          <img src={god.filename} alt="god icon"/>
      <div className="name flex-ctr-ctr">{god.name}</div>
      <div className="name flex-ctr-ctr">{god.type}</div>
      </div>
    );
  }