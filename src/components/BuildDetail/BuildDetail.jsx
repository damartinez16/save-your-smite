export default function BuildDetail({build, handleSaveBuild}) {
    if (!build) return null
    return (
        <div>
        <h1>details</h1>
        <div>{build.god.name}</div>
        <img src={build.god.filename} alt="god icon"/>
        <div>{build.god.type}</div>
        {build.items.map((i) => (
            <>
            <div>{i.DeviceName}</div>
            <div>{i.Price} gold</div>
            <div>{i.Type} gold</div>
            <img src={i.itemIcon_URL} alt="item icon"/> 
            </>
        ))}
        
        </div>
    )
}