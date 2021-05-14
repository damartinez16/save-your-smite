import './BuildListItem.css'
import { deleteBuild } from "../../utilities/builds-api";


export default function BuildListItem({user,build, activeBuild, setActiveBuild, deleteBuld, buildId}) {
    return (
    <div className="buildindexcontainer">
    <button className="buildindexitem" onClick={() => setActiveBuild(build)}>
        <div>
        <div>{build.god.name}</div> 
        <img src={build.god.filename} alt=""/>
        <div>{build.god.type}</div>
        </div>
        </button>
        <div className="itemscontainer">
        {build.items.map((i) => (
            <img src={i.itemIcon_URL} alt="item icon"/>
        ))}
        </div>
    
    <button onClick={() => deleteBuild(buildId)}>X</button>
    </div>
    )
}