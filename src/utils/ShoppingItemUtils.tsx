import type { ShoppingItem } from "../types/shopping"

export const addIdToItem = (item: any): ShoppingItem[] => {
    const id=Math.random()*100;
    const FinalArray= item.map((item) => ({ ...item, id: id.toString() }));
    return FinalArray;
}