import GodListItem from '../GodListItem/GodListItem';
export default function GodList({gods, setActiveGodIdx, ActiveGodIdx}) {
    return (
        <div className="godList">
        {gods.map((god, idx) => 
        <GodListItem key={idx} idx={idx} god={god} setActiveGodIdx={setActiveGodIdx} ActiveGodIdx={ActiveGodIdx}/>
        )}
        </div>
    )
}