import { Card, Col, Modal, Row, Typography } from "antd"
import { BarChart } from "../common/BarChart";
import type { ChartData } from "../../types/shopping";
import { columnCurrencyFormatter } from "../../utils/ShoppingItemUtils";
type Props={
    view:boolean;
    onViewReport:()=>void;
    chartData:ChartData
}
const ReportCharts = ({ view, onViewReport, chartData }: Props) => {
    const { AllCategories, TotalSpending, CategoryWiseSale, HighestCostItem, AverageCost ,TotalItemCount} = chartData || {};
    type ItemInsights={
        title:string;
        value:string|number;
        itemDetail:string;
    }
    const CardItems:ItemInsights[]=[
        {title:"Total Spending", value:columnCurrencyFormatter(TotalSpending), itemDetail:`${TotalItemCount} items in Total`},
        {title:"Highest Cost Item", value:columnCurrencyFormatter(HighestCostItem?.price), itemDetail:`${HighestCostItem?.name} ${HighestCostItem?.qty} Unit`},
        {title:"Average Cost", value:columnCurrencyFormatter(AverageCost), itemDetail:"Per Item"}
    ]
    return (
         <Modal
        title="Report"
        centered
        open={view}
        onCancel={onViewReport}
        footer={null}
        width={{
          xs: '90%',
          sm: '80%',
          md: '70%',
          lg: '60%',
          xl: '50%',
          xxl: '40%',
        }}
      >
        <>
        <Row  justify="space-between" align="middle">
          { CardItems.map((item:ItemInsights)=>( 
            <Col xs={24} sm={24} md={7} key={item.title} >
                <Card>
                    <Typography.Title  level={5}>{item.title}</Typography.Title>
                    <Typography.Title style={{ color:"#36A2EB",margin:"0"}} level={4}>{item.value}</Typography.Title>
                    <Typography.Text type="secondary">{item?.itemDetail}</Typography.Text>
                </Card>
            </Col>
        ))}
        </Row>
        <Row>
            <Col xs={24} sm={24} md={24}>
                <Typography.Title style={{margin:"1rem 0 0 1rem"}} level={3}>Sales Report</Typography.Title>
            </Col>
            <Col xs={24} sm={24} md={24}>
                <Card variant="borderless">
                    <BarChart 
                    labels={AllCategories}
                    data={CategoryWiseSale}
                    title="Category wise spending"
                    />
                </Card>
            </Col>

        </Row>
        </>
      </Modal>
    )
}

export default ReportCharts;