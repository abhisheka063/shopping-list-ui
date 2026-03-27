import { Button, Col, Row, theme, Typography } from "antd";
import type { ShoppingHeaderProps, ShoppingItem } from "../../types/shopping";
import { Filters } from "./Filters";
import { DownloadOutlined } from "@ant-design/icons";
import dayjs from "dayjs";

export const ShoppingTableHeader = (props: ShoppingHeaderProps) => {
    const {token}= theme.useToken();

    // Function to handle export as json
    const exportToJson=(data:ShoppingItem[],fileName="file.json")=>{
      if (!data.length) return;
      try{
        const formatForExport=data.map((item)=>{
        return{
            name: item.name,
            category: item.category,
            subcategory: item.subcategory,
            qty: item.qty,
            price: item.price,
            date:dayjs(item.date).format("YYYY-MM-DD")
        }
        })
        const json=JSON.stringify(formatForExport,null,2);
        const blob=new Blob([json],{
          type:"application/json;charset=utf-8"
        });
        const url=URL.createObjectURL(blob);
        const link=document.createElement('a');
        link.href=url;
        link.download=fileName;
        document.body.appendChild(link);
        link.click();
        //Now removing it
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
      }
      catch(e){
        console.error("Error happened while exporting",e)
      }
    }
    
  return (
    <Row style={{ margin: "0.25rem 0.25rem 0 0.25rem",padding:"0.5rem 0 0.5rem 0",background:token.colorBgContainer ,borderTop:"1px solid #d9d9d9"}} align="middle" gutter={[16, 4]}>
      <Col xs={24} sm={24} md={4}>
        <Typography.Title level={3} style={{margin:"0.5rem"}}>
          {props.ItemsCount} Items
        </Typography.Title>
      </Col>

      <Col xs={24} sm={24} md={16}>
        <Filters
          shoppingList={props.shoppingList}
          searchTerm={props.searchTerm}
          onSearchTermChange={props.onSearchTermChange}
          subcategoryFilter={props.subcategoryFilter}
          onSubcategoryFilterChange={props.onSubcategoryFilterChange}
          categoryFilter={props.categoryFilter}
          onCategoryFilterChange={props.onCategoryFilterChange}
          form={props.form}
          FilterCategories={props.FilterCategories}
          FilterSubCategories={props.FilterSubCategories}
          filteredShoppingList={props.filteredShoppingList}
        />
      </Col>
      <Col
        xs={24}
        sm={24}
        md={4}
        style={{ display: "flex", justifyContent: "flex-end" }}
      >
        <Button icon={<DownloadOutlined />} onClick={()=>exportToJson(props?.filteredShoppingList,"Shoppinglist.json")}>
          <Typography.Text strong>Export Data</Typography.Text>
        </Button>
      </Col>
    </Row>
  );
};
