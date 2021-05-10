import { useEffect, useState } from "react"
import ItemList from "../../components/ItemList/ItemList";

import * as itemsAPI from '../../utilities/items-api';

export default function NewBuildPage({user, setUser}) {
const [items, setItems] = useState([]);

useEffect(function() {
  async function getItems() {
    const items = await itemsAPI.getAll();
    setItems(items);
  }
  getItems();
  console.log(items)
}, []);

  return (
    <>
    <h1>Pick a God To Create Build</h1>
    <ItemList items={items}/>
    </>
    ) 
    
}