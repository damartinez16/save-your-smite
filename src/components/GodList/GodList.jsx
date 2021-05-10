import GodListItem from '../GodListItem/GodListItem';
export default function GodList({gods}) {
    return (
        <div>
        {gods.map((god, idx) => 
        <GodListItem god={god}/>
        )}
        </div>
    )
}