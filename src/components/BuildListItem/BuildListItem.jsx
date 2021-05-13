import { deleteBuild } from "../../utilities/builds-api";


export default function BuildListItem({user,build, activeBuild, setActiveBuild, deleteBuld, buildId}) {
    return (
    <div>
    <button onClick={() => setActiveBuild(build)}>
        {build.god}
        {build.items}
    </button>
    <button onClick={() => deleteBuild(buildId)}>Delete</button>
    </div>
    )
}