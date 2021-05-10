import { useEffect, useState } from "react"
import ItemList from "../../components/ItemList/ItemList";

import * as itemsAPI from '../../utilities/items-api';

export default function NewBuildPage({user, setUser}) {
const [items, setItems] = useState([]);
const [gods, setGods] = useState([]);

useEffect(function() {
  async function getItems() {
    const buildItems = await itemsAPI.getAll();
    const items = buildItems.filter(item => item.ItemTier === 3)
    setItems(items);
  }
  getItems();

  async function getGods() {
    const gods = await godsAPI.getAll();
    setGods(gods)
  }
  getGods();
}, []);

  return (
    <>
    <h1>Pick a God To Create Build</h1>
    {gods.map((god) => (
      <div>{god.name}</div>
    ))}
    <ItemList items={items}/>
    </>
    ) 
    
}