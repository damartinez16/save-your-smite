export default function GodListItem({god}) {
    return (
      <div className="item">
      <div className="pic flex-ctr-ctr">{god.name}</div>
      </div>
    );
  }