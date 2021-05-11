export default function BuildDetail({build}) {
    if (!build) return null
    console.log(build)
    return (
        <>
        <h1>details</h1>
        <div>{build.name}</div>
        <div>{build.god}</div>
        <div>{build.items}</div>
        {build.items.map((item) => 
        <div>{item}</div>
        ) }
        </>
    )
}