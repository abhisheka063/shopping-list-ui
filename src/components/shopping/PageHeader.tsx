import { BarChartOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { Button, Card, Col, Row, Typography } from "antd";

type Props = {
  onViewReport: () => void;
};
export const PageHeader = (props: Props) => {
  return (
    <Card>
      <Row align="middle" justify="space-between" gutter={[16, 16]}>
        <Col style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <ShoppingCartOutlined
            style={{ fontSize: "2rem", color: "#1890ff" }}
          />
          <Typography.Title level={4} style={{ margin: 0 }}>
            Shopping List Application
          </Typography.Title>
        </Col>

        <Col>
          <Button
            onClick={props.onViewReport}
            style={{ width: "100%" }}
            icon={<BarChartOutlined />}
          >
            <Typography.Text strong>View Data</Typography.Text>
          </Button>
        </Col>
      </Row>
    </Card>
  );
};
