import { useEffect, useState } from "react"

import * as itemsAPI from '../../utilities/items-api';

export default function NewBuildPage() {
const [items, setItems] = useState([]);

useEffect(function() {
  async function getItems() {
    const items = await itemsAPI.getAll();
    const fullItems = items.filter(item => item.ItemTier === 3);
    setItems(fullItems);
  }
  getItems();
}, []);

  return <h1>Pick a God To Create Build</h1>
}