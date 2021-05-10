import { useEffect, useState } from "react"
import ItemList from "../../components/ItemList/ItemList";
import GodList from "../../components/GodList/GodList";
import * as godsAPI from '../../utilities/gods-api';
import * as itemsAPI from '../../utilities/items-api';

export default function NewBuildPage({user, setUser}) {
const [items, setItems] = useState([]);
const [gods, setGods] = useState([]);
const [build, setBuild] = useState([]);


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
}, []);


/*------ Event Handlers ------*/




  return (
    <>
    <h1>Pick a God To Create Build</h1>
    <GodList gods={gods}/>
    {/* <ItemList items={items}/> */}
    </>
    ) 
    
}