import React from 'react';
import logo from './../logo.svg';
import './countdown.scss';
import {Row, Col, Typography, Layout} from 'antd';
const {Paragraph, Text} = Typography;
const {Content} = Layout;
class CountDown extends React.Component{
  render() {
    return (
      <Content className="count-down-page">
        <div className='main'>
          <div className='bg-front'/>
          <Row className='div-row'>
            <Col xl={4} span={6} className="align-center border-right">
              <Paragraph className="number-time">30</Paragraph>
              <Paragraph className="text-time">Days</Paragraph>
            </Col>
            <Col xl={4} span={6} className="align-center border-right">
              <Paragraph className="number-time">12</Paragraph>
              <Paragraph className="text-time">Hours</Paragraph>
            </Col>
            <Col xl={4} span={6} className="align-center border-right">
              <Paragraph className="number-time">24</Paragraph>
              <Paragraph className="text-time">Minutes</Paragraph>
            </Col>
            <Col xl={4} span={6} className="align-center">
              <Paragraph className="number-time">02</Paragraph>
              <Paragraph className="text-time">Seconds</Paragraph>
            </Col>
            <Col xl={8} span={18} className='div-col-right'>
              <div className='padding-right'>
                  <Paragraph className='title-content'>OUR WEBSITE IS UNDER CONTRUCTION</Paragraph>
                  <Paragraph className='text-content'>
                      We’ll warm up with some interactive magic tricks where you’ll follow my
                      instructions and use items in your own homes to fool yourselves. Then I’ll
                      show you my favorite books and magic gadgets and tell you funny stories
                      about their authors and creators. You might get a glimpse at the latest
                      wacky project in my workshop or find out how I handle everyday tasks
                      with a magical flourish.
                  </Paragraph>
              </div>
              <div className='height'/>
            </Col>
          </Row>
          <div className='div-title-main'>
            <Text className='title-main'>COMING SOON...</Text>
          </div>
        </div>
      </Content>
    );
  }
}

export default CountDown;
