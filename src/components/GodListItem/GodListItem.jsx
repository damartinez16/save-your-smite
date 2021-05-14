export default function GodListItem({god, idx, setActiveGodIdx, activeGodIdx, handleAddGodToBuild}) {
    return (
      <>
        <button onClick={() => handleAddGodToBuild(god._id)}>
      <div>
          <img className="god" src={god.filename} alt="god icon"/>
      <div> {god.name}</div>
      <div> {god.type}</div>
      </div>
      </button>
      </>
    );
  }