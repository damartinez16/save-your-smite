import './BuildListItem.css'



export default function BuildListItem({user, build, activeBuild, setActiveBuild, buildId, deleteBuild}) {
    return (
    <div className="buildindexcontainer">
    <button className="buildindexitem" onClick={() => setActiveBuild(build)}>
        <div>
        <div>{build.god.name}</div> 
        <img src={build.god.filename} alt="god icon"/>
        <div>{build.god.type}</div>
        </div>
        </button>
        <div className="itemscontainer">
        {build.items.map((i) => (
            <img src={i.itemIcon_URL} alt="item icon"/>
        ))}
        </div>
    
    <button style={{visibility: user._id === build.user ? "visible" : "hidden"}} onClick={() => deleteBuild(buildId)}>X</button>
    </div>
    )
}