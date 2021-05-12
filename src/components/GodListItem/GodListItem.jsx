export default function GodListItem({god, idx, setActiveGodIdx, activeGodIdx}) {
    return (
        <button >
      <div onClick={() => { setActiveGodIdx(idx)}} className="god" className={idx === activeGodIdx ? 'selected' : 'unselected'} >
          <img src={god.filename} alt="god icon"/>
      <div className="name flex-ctr-ctr">{god.name}</div>
      <div className="name flex-ctr-ctr">{god.type}</div>
      </div>
      </button>
    );
  }