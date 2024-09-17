// https://pokeapi.co/api/v2/item?limit=400

import { Item } from "../types/types";

export async function fetchItems(): Promise<Item> {

    const response = await fetch(`https://pokeapi.co/api/v2/item?limit=400`)

    if(!response.ok) throw new Error('Error fetching items');

    const results = await response.json();
    const items = results.results.map((item: any, index: number) => ({
        name: item.name,
        id: index,
        imgSrc: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items${item.name}.png`,
    }));

    return items
}