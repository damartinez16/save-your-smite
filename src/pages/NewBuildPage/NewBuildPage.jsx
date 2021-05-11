import { useEffect, useState } from "react"
import ItemList from "../../components/ItemList/ItemList";
import GodList from "../../components/GodList/GodList";
import BuildDetail from "../../components/BuildDetail/BuildDetail";
import * as godsAPI from '../../utilities/gods-api';
import * as itemsAPI from '../../utilities/items-api';
import * as buildsAPI from '../../utilities/builds-api';

export default function NewBuildPage({user, setUser}) {
const [items, setItems] = useState([]);
const [gods, setGods] = useState([]);
const [build, setBuild] = useState({
  name: '',
  god: '',
  items: [],
  isSubmitted: false
})


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
    setBuild(build);
  }
  getBuild();
  
}, []);

console.log(build)

/*------ Event Handlers ------*/

async function handleAddToBuild(itemId) {
  const updatedBuild = await buildsAPI.addItemToBuild(itemId);
  setBuild(updatedBuild);
}


  return (
    <>
    <h1>PICK A GOD TO CREATE A BUILD</h1>
    <GodList gods={gods}/>
    <ItemList items={items} handleAddToBuild={handleAddToBuild}/>
    <BuildDetail build={build}/>
    </>
    ) 
    
}