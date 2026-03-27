import { Col, Row, Switch, Typography } from "antd";

type Props = {
  dark: boolean;
  onDarkModeChange: (darkMode: boolean) => void;
};
export const AppHeader = ({onDarkModeChange,dark}: Props) => {
    const {Text} = Typography;
  return (
    <Row
      align="middle"
      justify="space-between"
      style={{ margin: "0px 1rem 0px 1rem" }}
    >
      <Col>
        <Typography.Title level={3} style={{ margin: 0, color: "white" }}>
          ZETA
        </Typography.Title>
      </Col>
      <Col>
        <Text style={{ color: "white", marginRight: "0.5rem" }}>{dark ? "Dark Mode" : "Light Mode"}</Text>
        <Switch
          size="medium"
          checked={dark}
          onChange={onDarkModeChange}
        />
      </Col>
    </Row>
  );
};
