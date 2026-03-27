import { Button, Col, DatePicker, Form, Input, Row, Select, Typography } from "antd";
import type { ShoppingItem } from "../../types/shopping";
import { options, subcategoryOptions } from "./constants/constants";
import { useState } from "react";
import { PlusCircleFilled } from "@ant-design/icons";
import dayjs from "dayjs";

type Props = {
  addItemsToList: (item: ShoppingItem) => void;
  };
export const ShoppingForm = (props: Props) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [form] = Form.useForm();
  const {Text}=Typography;

  const onCategoryChange = (value: string) => {
    // rest form when changed
    setSelectedCategory(value);
    form.setFieldsValue({ subcategory: undefined });
  };
  return (
      <Form form={form} style={{padding:"1rem"}} layout="vertical" onFinish={props.addItemsToList} initialValues={{date:dayjs()}}>
      <Row gutter={[16, 16]} align="middle">
        <Col xs={24} sm={24} md={5}>
            <Form.Item label={<Text strong>Item Name</Text>} name="name" >
            <Input placeholder="Enter item name" required />
          </Form.Item>
        </Col>
        <Col xs={24} sm={24} md={4}>
            <Form.Item label={<Text strong>Category</Text>} name="category"  rules={[{required:true, message:"Please select a category"}]}>
            <Select
              placeholder="Enter category"
              options={options}
              onChange={onCategoryChange}
            />
          </Form.Item>
        </Col>
        <Col xs={24} sm={24} md={4}>
            <Form.Item label={<Text strong>Subcategory</Text>} name="subcategory" rules={[{required:true , message:"Please select a subcategory"}]}>
            <Select
              placeholder="Enter subcategory"
              options={subcategoryOptions[selectedCategory]}
            />
          </Form.Item>
        </Col>
        <Col xs={24} sm={24} md={3}>
          <Form.Item label={<Text strong>Quantity</Text>} name="qty">
            <Input placeholder="Enter quantity" type="number" required />
          </Form.Item>
        </Col>
        <Col xs={24} sm={24} md={3}>
          <Form.Item label={<Text strong>Price</Text>} name="price">
            <Input placeholder="Enter price" type="number" required />
          </Form.Item>
        </Col>
        <Col xs={24} sm={24} md={3}>
          <Form.Item label={<Text strong>Date</Text>} name="date">
            <DatePicker format="DD-MM-YYYY" style={{ width: "100%" }} />
          </Form.Item>
        </Col>
        <Col xs={24} sm={24} md={2}>
          <Form.Item style={{ marginTop: "30px" }}>
            <Button
              type="primary"
              htmlType="submit"
              icon={<PlusCircleFilled />}
              block
            >
              Add Item
            </Button>
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
};
