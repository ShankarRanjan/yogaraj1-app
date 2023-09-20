import { Col, Row } from "antd";

export const Design = () => {
  function activateLasers(): void {
    throw new Error("Function not implemented.");
  }
  return (
    <>
      <Row gutter={24} className="line-three">
        <Col  className="three-line-text">
          <Col xl={8} lg={8} md={12} sm={24} xs={24}  className="total-down">
            <h1 className="number-and-text">11k</h1>
            <h2>Happy Clients</h2>
          </Col>

          <Col xl={8} lg={8} md={12} sm={24} xs={24}>
            <h1 className="number-and-text">300+</h1>
            <h2>Team Members</h2>
          </Col>

          <Col xl={8} lg={8} md={24} sm={24} xs={24}>
            <h1 className="number-and-text">60+</h1>
            <h2>Countries</h2>
          </Col>
        </Col>
      </Row>
    </>
  );
};
