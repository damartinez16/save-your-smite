import { useEffect, useState } from "react"
import { useHistory } from 'react-router-dom';
import ItemList from "../../components/ItemList/ItemList";
import GodList from "../../components/GodList/GodList";
import BuildDetail from "../../components/BuildDetail/BuildDetail";
import * as godsAPI from '../../utilities/gods-api';
import * as itemsAPI from '../../utilities/items-api';
import * as buildsAPI from '../../utilities/builds-api';

export default function NewBuildPage({user, setUser}) {
const [items, setItems] = useState([]);
const [gods, setGods] = useState([]);
const [activeGodIdx, setActiveGodIdx] = useState(null);
const [build, setBuild] = useState({
  name: '',
  god: {},
  items: [],
  isSubmitted: false
})

const history = useHistory();


useEffect(function() {
  async function getGods() {
    const gods = await godsAPI.getAll();
    setGods(gods)
  }
  getGods();

  async function getItems() {
    const buildItems = await itemsAPI.getAll();
    const items = buildItems.filter(item => item.ItemTier === 3)
    setItems(items);
  }
  getItems();

  async function getBuild() {
    const build = await buildsAPI.getBuild();
    if (!build.god) build.god = {}
    console.log(build.user)
    setBuild(build);
  }
  getBuild();
  
}, []);



/*------ Event Handlers ------*/

async function handleAddToBuild(itemId) {
  const updatedBuild = await buildsAPI.addItemToBuild(itemId);
  if (updatedBuild.items.length < 10) {
    setBuild(updatedBuild);
  }
  return 
}

async function handleAddGodToBuild(godId) {
  const updatedBuild = await buildsAPI.addGodToBuild(godId);
  setBuild(updatedBuild);
}

async function handleSaveBuild() {
  await buildsAPI.saveBuild();
  history.push('/builds');
}

  return (
    <>
    <h1>PICK A GOD TO CREATE A BUILD</h1>
    <GodList gods={gods} activeGodIdx={activeGodIdx} setActiveGodIdx={setActiveGodIdx} handleAddGodToBuild={handleAddGodToBuild}/>
    <br/>
    <br/>
    <hr/>
    <ItemList items={items} handleAddToBuild={handleAddToBuild}/>
    <br/>
    <br/>
    <hr/>
    <BuildDetail build={build} handleSaveBuild={handleSaveBuild}/>
    <button onClick={handleSaveBuild}>Save Build</button>
    <br/>
    <br/>
    </>
    ) 
    
}