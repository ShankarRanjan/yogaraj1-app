import { MobileOutlined } from "@ant-design/icons";
import { Card, Col, Row } from "antd";

export const MainDesign = () => {
  function activateLasers(): void {
    throw new Error("Function not implemented.");
  }
  return (
    <>
      <Row>
        <Col className="topmenu">
          <h5>Home</h5>
          <h5>Landing</h5>
          <h5>About</h5>
          <h5>Team</h5>
          <h5>Contact</h5>
        </Col>
      </Row>

      <Row className="top-img-and-text">
        <Col xl={12} lg={12} md={12} sm={24} xs={24} className="return">
          <h1 className="we">
            We Turn Your Ideas, Or Story Into A Bestselling Business Book
          </h1>

          <p className="text">
            Sample text. Click to Egestas egestas fringilla phasellus faucibus
            scelerisque eleifend donec pretium vulputate. Pharetra magna ac
            placerat vestibulum.{" "}
          </p>

          <Col className="image-from">
            {" "}
            Image from{" "}
            <a
              className="freepik"
              href="https://www.freepik.com/photos/background"
            >
              freepik
            </a>
          </Col>
          <Col className="button1">
            <button className="button" onClick={activateLasers}>
              Read More
            </button>
          </Col>
        </Col>

        <Col xl={12} lg={12} md={12} sm={24} xs={24} className="images">
          <img className="migs" src="assets/iden.jpg" alt="img" />
        </Col>
      </Row>
      <Row justify={"center"} className="you-learn">
        <h2 className="what">What Can You Learn</h2>

        <Col xl={8} lg={12} md={24} sm={24} xs={24} className="card-one">
          <Card className="card card-right card-movie2">
            <div className="icons">
              <MobileOutlined className="i" />
            </div>
            <h3 className="one-line-text">Business Development</h3>
            <p className="one-p-tag">
              Sample text. Click to select the Text Element.
            </p>
          </Card>
          <Card className="card card-down card-movie2">
            <div className="icons">
              <MobileOutlined className="i" />
            </div>
            <h3 className="one-line-text">Customer Relationship</h3>
            <p className="one-p-tag">
              Sample text. Click to select the Text Element.
            </p>
          </Card>
        </Col>
        <Col xl={8} lg={12} md={23} sm={24} xs={24} className="card-two">
          <Card className="card card-movie1">
            <div className="icons">
              <MobileOutlined className="i" />
            </div>
            <h3 className="one-line-text">Process & Tools</h3>
            <p className="one-p-tag">
              Sample text. Click to select the Text Element.
            </p>
          </Card>
          <Card className="card last-card card-movie1">
            <div className="icons">
              <MobileOutlined className="i" />
            </div>
            <h3 className="one-line-text">Communication</h3>
            <p className="one-p-tag">
              Sample text. Click to select the Text Element.
            </p>
          </Card>

          <p className="btm-movie">
            {" "}
            <button className="button2" onClick={activateLasers}>
              View All Services
            </button>
          </p>
        </Col>
      </Row>
      <Row className="top-img-and-text changes">
        <Col
          xl={12}
          lg={12}
          md={12}
          sm={24}
          xs={24}
          className="images page2-image"
        >
          <img className="migs migs1" src="assets/handsome.jpg" alt="img" />
        </Col>

        <Col xl={12} lg={12} md={12} sm={24} xs={24} className="return return1">
          <h1 className="we">
            Your Have Needs These Habits To Grow The Business Faster
          </h1>

          <p className="text">
            Sample text. Click to Egestas egestas fringilla phasellus faucibus
            scelerisque eleifend donec pretium vulputate. Pharetra magna ac
            placerat vestibulum.
          </p>
          <div className="text total-Turn">
           <p>  <span className="spmcolor">■</span> Turn your ideas and story into a book.</p>
            <p> <span className="spmcolor">■</span> Become a #1 bestseller or we pay $100k</p>
            <p> <span className="spmcolor">■</span> Boost your credibility and authority.</p>
            <p> <span className="spmcolor">■</span> Attract more clients and grow your business.</p>
          </div>
        
          <Col className="image-from">
            {" "}
            Image from{" "}
            <a
              className="freepik"
              href="https://www.freepik.com/photos/background"
            >
              freepik
            </a>
          </Col>
          <Col className="button1">
            <button className="button" onClick={activateLasers}>
              Read More
            </button>
          </Col>
        </Col>
      </Row>
    </>
  );
};
