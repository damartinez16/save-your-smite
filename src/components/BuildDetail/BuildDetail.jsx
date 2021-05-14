import './BuildDetail.css'
export default function BuildDetail({build}) {
    if (!build) return null
    return (
        <div>
        <h1>details</h1>
        <div>{build.god.name}</div>
        <img className={Object.keys(build.god).length === 0 && build.constructor === Object ? "emptygod" : "godicon"}src={build.god.filename} alt="god icon" height="200px"/>
        <div className="godtype">{build.god.type}</div>
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