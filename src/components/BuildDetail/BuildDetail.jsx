export default function BuildDetail({build}) {
    return (
        <>
        <h1>details</h1>
        {build.items.map((item) => 
        <div>{item}</div>
        ) }
        </>
    )
}