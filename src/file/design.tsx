import { MobileOutlined, PoundOutlined, PrinterOutlined, ProfileOutlined, RocketTwoTone, SettingOutlined, SolutionOutlined, TranslationOutlined } from "@ant-design/icons";
import { Card, Col, Row } from "antd";
import { Input } from 'antd';

export const Design = () => {
  function activateLasers(): void {
    throw new Error("Function not implemented.");
  }
  return (
    <>
      <Row className="line-three">

        <Col xl={8} lg={8} md={12} sm={24} xs={24} className="total-down">
          <h1 className="number-and-text">11k</h1>
          <h2>Happy Clients</h2>
        </Col>

        <Col xl={8} lg={8} md={12} sm={24} xs={24} className="total-down" >
          <h1 className="number-and-text">300+</h1>
          <h2>Team Members</h2>
        </Col>

        <Col xl={8} lg={8} md={12} sm={24} xs={24} className="total-down" >
          <h1 className="number-and-text">60+</h1>
          <h2>Countries</h2>
        </Col>
      </Row>
      <Row className="say">
        <h2 className="what"> What People Say</h2>
        <Col className="image-from-two">
          {" "}
          Image from{" "}
          <a
            className="freepik"
            href="https://www.freepik.com/photos/background"
          >
            freepik
          </a>
        </Col>
        <Col xl={8} lg={8} md={12} sm={24} xs={24} className="total-2card-icons">
          <Card className="card card-down card-movie2 two-icons-cards">
            <img className="two-icons" src="assets/dow.jpg" alt="img" />

            <p className="one-p-tag">
              Proin sed libero enim sed faucibus turpis. At imperdiet dui accumsan sit amet nulla facilisi morbi tempus. Ut sem nulla pharetra diam sit amet nisl. Enim nunc
            </p>
            <h3 className="one-line-text">Celia Almeda</h3>
          </Card>
          <Card className="card card-down card-movie2 two-icons-cards">
            <img className="two-icons" src="assets/dow.jpg" alt="img" />

            <p className="one-p-tag">
              Proin sed libero enim sed faucibus turpis. At imperdiet dui accumsan sit amet nulla facilisi morbi tempus. Ut sem nulla pharetra diam sit amet nisl.
            </p>
            <h3 className="one-line-text">Frank Kinney</h3>
          </Card>
        </Col>
        <Col xl={8} lg={8} md={12} sm={24} xs={24} className="two-card-icones-images">
          <img className="migs migs1 migs-page" src="assets/handsom.jpg" alt="img" /></Col>
      </Row>
      <Row className="four-icons">
        <Col xl={8} lg={8} md={24} sm={24} xs={24} className="center-card" >
          <div className="icons-design">
            <PrinterOutlined className="icon-dsin" />
            <h2>Flexible benefits</h2>
          </div>
          <div>
            <SettingOutlined className="icon-dsin" />
            <h2> 24/7 Dedicated support </h2>
          </div>



        </Col>
        <Col xl={8} lg={8} md={24} sm={24} xs={24} className="center-card cnt" >
          <div>
            <SolutionOutlined className="icon-dsin" />
            <h2>100% Secure</h2>
          </div>
          <div>
            <TranslationOutlined className="icon-dsin" />
            <h2>Affordable Price Plan</h2>

          </div>
        </Col>
      </Row>
      <Row justify='center' className="total7">
        <h2 className="here">Here are some of our clients   </h2>
        <Col xl={3} lg={3} md={6} sm={24} xs={24} className="total-img8"> <img className="total-imgs7" src="assets/black.jpg" alt="img" /></Col>
        <Col xl={3} lg={3} md={6} sm={24} xs={24} className="total-img8">   <img className="total-imgs7" src="assets/black2.jpg" alt="img" /></Col>
        <Col xl={3} lg={3} md={6} sm={24} xs={24} className="total-img8">  <img className="total-imgs7" src="assets/black3.jpg" alt="img" /></Col>
        <Col xl={3} lg={3} md={6} sm={24} xs={24} className="total-img8">  <img className="total-imgs7" src="assets/black4.jpg" alt="img" /></Col>
        <Col xl={3} lg={3} md={6} sm={24} xs={24} className="total-img8"> <img className="total-imgs7" src="assets/black5.jpg" alt="img" /></Col>
        <Col xl={3} lg={3} md={6} sm={24} xs={24} className="total-img8"><img className="total-imgs7" src="assets/black6.jpg" alt="img" /></Col>
        <Col xl={3} lg={3} md={6} sm={24} xs={24} className="total-img8">   <img className="total-imgs7" src="assets/black8.jpg" alt="img" /></Col>
      </Row>
      <Row justify={"center"} className="card3">
        <Col xl={6} lg={8} md={12} sm={24} xs={24} className="card-al">
          <Card className="card3-dsin">
            <p className="right-end">  <PoundOutlined className="right-end-icon" /></p>
            <h5 className="desk">Membership</h5>
            <h2 className="number">$ 35/monthly</h2>
            <p className="one-p-tag">Article evident arrived express highest men did boy. Mistress sensible entirely am so. Quick can manor smart money hopes worth too. Comfort produce husband boy her had hearing.
            </p>
            <Col className="button6">
              <button className="button5" onClick={activateLasers}>
                Read More
              </button>
            </Col>
          </Card>
        </Col>

        <Col xl={6} lg={8} md={12} sm={24} xs={24} className="card-al card2">
          <Card className="card3-dsin">
            <p className="right-end"><ProfileOutlined className="right-end-icon" /></p>
            <h5 className="desk">Dedicated Desk
            </h5>
            <h2 className="number">$ 65/monthly</h2>
            <p className="one-p-tag">
              Article evident arrived express highest men did boy. Mistress sensible entirely am so. Quick can manor smart money hopes worth too. Comfort produce husband boy her had hearing.
            </p>
            <Col className="button6">
              <p> <button className="button5" onClick={activateLasers}>
                Read More
              </button></p>
            </Col>
          </Card>
        </Col>

        <Col xl={6} lg={8} md={24} sm={24} xs={24} className="card-al card4 ">
          <Card className="card3-dsin">
            <p className="right-end"> <SettingOutlined className="right-end-icon" /></p>
            <h5 className="desk">Private Office</h5>
            <h2 className="number">$ 95/monthly</h2>
            <p className="one-p-tag">
              Article evident arrived express highest men did boy. Mistress sensible entirely am so. Quick can manor smart money hopes worth too. Comfort produce husband boy her had hearing.
            </p>
            <Col className="button6">
              <button className="button5" onClick={activateLasers}>
                Read More
              </button>
            </Col>
          </Card>
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
          <img className="migs migs1 sss" src="assets/handso.jpg" alt="img" />
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
      <Row justify={"center"} className="services">

        <div>
          <h3 className="financial">We provide consulting business and financial services worldwide</h3>
          <h3 className="element">Sample text. Click to select the Text Element.</h3>
        </div>

        <Row className="button3-card">
          <Col xl={5} lg={8} md={7} sm={24} xs={24} className="button1">
            <button className="button8" onClick={activateLasers}>
              Company Benefits
            </button>
          </Col>
          <Col xl={5} lg={8} md={7} sm={24} xs={24} className="button1">
            <button className="button9" onClick={activateLasers}>
              Mission
            </button>
          </Col>
          <Col xl={5} lg={8} md={7} sm={24} xs={24} className="button1">
            <button className="button9" onClick={activateLasers}>
              Vision
            </button>
          </Col>
        </Row>
        <Row>
          <div className="the-line">
            <p className="select-the">Sample text. Click to select the Text Element.</p>
            <p className="the"> <span className="spmcolor">■</span> Interactively monetize customer</p>
            <p className="the"> <span className="spmcolor">■</span> Enthusiastically underwhelm distinctive</p>
            <p className="the"> <span className="spmcolor">■</span>Energistically fabrica intuitive infomediaries</p>
            <p className="the"> <span className="spmcolor">■</span> Continually expedite standards compliant.</p>

            <Col className="button1">
              <button className="button10" onClick={activateLasers}>
                Get Started
              </button>
            </Col>
          </div>

        </Row>
      </Row>
      <Row className="let">

        <h2 className="great">Let's Start Something Great!</h2>
        <Col className="button1 usage">
          <Input placeholder="search" className="in" />

          <button className="button11" onClick={activateLasers}>
            Submit
          </button>
        </Col>

      </Row>
      <Row className="click">
        <h5>Sample text. Click to select the Text Element.</h5>
      </Row>
      <Row className="click1" >
        <a className="link" href="https://www.w3schools.com">One Page Template</a><span className="created-with">created with</span> <a className="link" href="https://www.w3schools.com">Best Website Builder</a>
      </Row>
    </>
  );
};
