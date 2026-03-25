import { Table } from "antd";
import type { ShoppingItem } from "../../types/shopping";
import { columns } from "./column";

type ShoppingProps = {
    filteredShoppingList: ShoppingItem[];
}

export const ShoppingTable = (props:ShoppingProps) => {
    return(
        <Table columns={columns} dataSource={props.filteredShoppingList} />
    )
}