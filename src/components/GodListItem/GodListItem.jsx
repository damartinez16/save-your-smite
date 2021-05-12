export default function GodListItem({god, idx, setActiveGodIdx, activeGodIdx, handleAddGodToBuild}) {
    return (
        <button onClick={() => handleAddGodToBuild(god._id)}>
      <div>
          <img src={god.filename} alt="god icon"/>
      <div className="name flex-ctr-ctr">{god.name}</div>
      <div className="name flex-ctr-ctr">{god.type}</div>
      </div>
      </button>
    );
  }