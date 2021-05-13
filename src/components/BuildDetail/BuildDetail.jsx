export default function BuildDetail({build, handleSaveBuild}) {
    if (!build) return null
    return (
        <div>
        <h1>details</h1>
        <div>{build.god}</div>
        {build.items.map((i) => (
            <img src={i.itemIcon_URL} alt="item icon"/>
        ))}
        <button onClick={handleSaveBuild}>Save Build</button>
        </div>
    )
}