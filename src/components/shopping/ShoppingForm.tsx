import { Card, Form, Input, Select } from "antd";
import type { ShoppingItem } from "../../types/shopping";
import { options, subcategoryOptions } from "./constants";

type Props={
    addItemsToList: (item:ShoppingItem) => void;
}
export const ShoppingForm = (props:Props) => {
    return(

        <Card title="Add Item to Shopping List" style={{background:"#fafafa"}}>
            <Form layout="inline" onFinish={props.addItemsToList}>
            <Form.Item label="Item Name" name="name">
                <Input placeholder="Enter item name" />
            </Form.Item>
            <Form.Item label="Category" name="category">
                <Select
                  placeholder="Enter category"
                  options={options}
                />
            </Form.Item>
            <Form.Item label="Subcategory" name="subcategory">
                <Select
                  placeholder="Enter subcategory"
                  options={subcategoryOptions}
                />
            </Form.Item>
            <Form.Item label="Quantity" name="quantity">
                <Input placeholder="Enter quantity" type="number" />
            </Form.Item>
            <Form.Item label="Price" name="price">
                <Input placeholder="Enter price" type="number" />
            </Form.Item>
            <Form.Item>
                <button type="submit">Add Item</button>
            </Form.Item>
        </Form>
        </Card>
    )
}