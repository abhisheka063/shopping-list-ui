import { Form, Row, Col, Input, Select, Typography } from "antd";
import type { ShoppingHeaderProps } from "../../types/shopping";
import { SearchOutlined } from "@ant-design/icons";

export const Filters = (props: ShoppingHeaderProps) => {

  return (
    <Form layout="vertical" form={props.form}>
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={12} md={8}>
          <Form.Item
            label={<Typography.Text strong>Category</Typography.Text>}
            name="category"
          >
            <Select
              allowClear
              placeholder="Enter category"
              options={props.FilterCategories}
              onChange={props.onCategoryFilterChange}
            />
          </Form.Item>
        </Col>

        <Col xs={24} sm={12} md={8}>
          <Form.Item
            label={<Typography.Text strong>Subcategory</Typography.Text>}
            name="subcategory"
          >
            <Select
              allowClear
              placeholder="Enter subcategory"
              options={props.FilterSubCategories[props.categoryFilter] || []}
              onChange={props.onSubcategoryFilterChange}
            />
          </Form.Item>
        </Col>

        <Col xs={24} sm={12} md={8}>
          <Form.Item
            label={<Typography.Text strong>Item Name</Typography.Text>}
            name="name"
          >
            <Input
              allowClear
              placeholder="Search by item name"
              prefix={<SearchOutlined />}
              type="text"
              onChange={props.onSearchTermChange}
            />
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
};
