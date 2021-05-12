export default function BuildDetail({build, handleSaveBuild}) {
    if (!build) return null
    console.log(build)
    return (
        <div>
        <h1>details</h1>
        <div>{build.god}</div>
    <div>{build.items}</div>
        <button onClick={handleSaveBuild}>Save Build</button>
        </div>
    )
}