import React from 'react';
import logo from './../logo.svg';
import './countdown.scss';
import { Row, Col, Typography, Layout } from 'antd';
import * as moment from 'moment';

const { Paragraph, Text } = Typography;
const { Content } = Layout;

const formatTimerDigit = digit => {
    return digit > 9 ? digit : '0' + digit;
};
const formatCountdownTextLabel = (digit, label, strict) => {
    if (strict) return digit > 0 ? formatTimerDigit(digit) + label : '';
    else return formatTimerDigit(digit) + label;
};
class CountDown extends React.Component {
    state = {
        newYear: '2021',
        countdownText: '',
    };

    componentDidMount() {
        const { newYear } = this.state;
        this.timer(newYear);
    }

    timer = newYear => {
        const eventTime = moment(
            `01-01-${newYear} 00:00:00`,
            'DD-MM-YYYY HH:mm:ss'
        ).unix();
        const currentTime = moment().unix();
        const diffTime = eventTime - currentTime;
        let duration = moment.duration(diffTime * 1000, 'milliseconds');
        const interval = 1000;

        if (diffTime > 0) {
            setInterval(() => {
                duration = moment.duration(
                    duration.asMilliseconds() - interval,
                    'milliseconds'
                );
                const months = formatCountdownTextLabel(
                    duration.months(),
                    'mo ',
                    true
                );
                const days = formatCountdownTextLabel(
                    duration.days(),
                    'd ',
                    true
                );
                const hours = formatCountdownTextLabel(
                    duration.hours(),
                    'h ',
                    true
                );
                const mins = formatCountdownTextLabel(
                    duration.minutes(),
                    'm ',
                    true
                );
                const secs = formatCountdownTextLabel(
                    duration.seconds(),
                    's ',
                    false
                );
                this.setState({
                    months: months,
                    days: days,
                    hours: hours,
                    mins: mins,
                    secs: secs,
                });
            }, interval);
        }
    };

    render() {
        const { days, hours, mins, secs } = this.state;
        return (
            <Content className="count-down-page">
                <div className="main">
                    <div className="bg-front" />
                    <Row className="div-row">
                        <Col
                            xl={4}
                            span={6}
                            className="align-center border-right"
                        >
                            <Paragraph className="number-time">
                                {days}
                            </Paragraph>
                            <Paragraph className="text-time">Days</Paragraph>
                        </Col>
                        <Col
                            xl={4}
                            span={6}
                            className="align-center border-right"
                        >
                            <Paragraph className="number-time">
                                {hours}
                            </Paragraph>
                            <Paragraph className="text-time">Hours</Paragraph>
                        </Col>
                        <Col
                            xl={4}
                            span={6}
                            className="align-center border-right"
                        >
                            <Paragraph className="number-time">
                                {mins}
                            </Paragraph>
                            <Paragraph className="text-time">Minutes</Paragraph>
                        </Col>
                        <Col xl={4} span={6} className="align-center">
                            <Paragraph className="number-time">
                                {secs}
                            </Paragraph>
                            <Paragraph className="text-time">Seconds</Paragraph>
                        </Col>
                        <Col xl={8} span={18} className="div-col-right">
                            <div className="padding-right">
                                <Paragraph className="title-content">
                                    OUR WEBSITE IS UNDER CONTRUCTION
                                </Paragraph>
                                <Paragraph className="text-content">
                                    We’ll warm up with some interactive magic
                                    tricks where you’ll follow my instructions
                                    and use items in your own homes to fool
                                    yourselves. Then I’ll show you my favorite
                                    books and magic gadgets and tell you funny
                                    stories about their authors and creators.
                                    You might get a glimpse at the latest wacky
                                    project in my workshop or find out how I
                                    handle everyday tasks with a magical
                                    flourish.
                                </Paragraph>
                            </div>
                            <div className="height" />
                        </Col>
                    </Row>
                    <div className="div-title-main">
                        <Text className="title-main">COMING SOON...</Text>
                    </div>
                </div>
            </Content>
        );
    }
}

export default CountDown;
