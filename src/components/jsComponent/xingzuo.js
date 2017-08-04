/**
 * Created by qiaoyuning on 2017/8/3.
 */
import React from 'react'
import Title from '../TitleLayout/Titlelayout'
import {Select} from 'antd';
const Option = Select.Option;
import './xingzuo.css'
import fetch from 'fetch-jsonp'

import {Tabs} from 'antd';
const TabPane = Tabs.TabPane;
import {Rate} from 'antd';

const host = 'https://api.jisuapi.com/astro/fortune?'
const key = 'appkey=edf06bb8539ab1c2'

export default class layout extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            astroid: 0,
            result: ''
        }
    }

    componentDidMount() {

    }

    getDate(value) {
        let type = 'astroid=' + value + '&'
        fetch(host + type + key, {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/javascript, */*; q=0.01',
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
            },
            mode: 'no-cors',
        }).then(res => res.json().then(
            r => this.setState({
                result: r.result
            })
            )
        )
    }

    handleChange(value) {
        this.getDate(value)
    }

    render() {
        return (
            <div>
                <Title title="星座运势查询" width="100" height="500">
                    <div className="selectInput">
                        <div className="text">请选择你的星座:</div>
                        <Select style={{width: 120}} onChange={(value) => this.handleChange(value)}>
                            <Option value="1">白羊座</Option>
                            <Option value="2">金牛座</Option>
                            <Option value="3">双子座</Option>
                            <Option value="4">巨蟹座</Option>
                            <Option value="5">狮子座</Option>
                            <Option value="6">处女座</Option>
                            <Option value="7">天秤座</Option>
                            <Option value="8">天蝎座</Option>
                            <Option value="9">射手座</Option>
                            <Option value="10">摩羯座</Option>
                            <Option value="11">水瓶座</Option>
                            <Option value="12">双鱼座</Option>
                        </Select>
                    </div>
                    <div className="xingzuoName">{this.state.result.astroname}</div>
                    <div className="content">
                        <Tabs defaultActiveKey="1">
                            <TabPane tab="今日运势" key="1">
                                {
                                    this.state.result ?
                                        <div className="container">
                                            <div className="yunshi">
                                                <p><span>综合运势</span> <Rate value={this.state.result.today.summary} disabled={true}/></p>
                                                <p><span>财运指数</span> <Rate value={this.state.result.today.money} disabled={true}/></p>
                                                <p><span>健康指数</span> <Rate value={this.state.result.today.health} disabled={true}/></p>
                                                <p><span>爱情运势</span> <Rate value={this.state.result.today.love} disabled={true}/></p>
                                                <p><span>工作运势</span> <Rate value={this.state.result.today.career} disabled={true}/></p>
                                                <p><span>贵人星座</span> {this.state.result.today.star}</p>
                                                <p><span>幸运数字</span> {this.state.result.today.number}</p>
                                                <p><span>幸运颜色</span> {this.state.result.today.color}</p>
                                            </div>
                                            <div>
                                                <p>今日提醒:</p>
                                                <p>{this.state.result.today.presummary}</p>
                                            </div>
                                        </div> : ''
                                }
                            </TabPane>
                            <TabPane tab="明日运势" key="2">
                                {
                                    this.state.result ?
                                        <div className="container">
                                            <div className="yunshi">
                                                <p><span>综合运势</span> <Rate value={this.state.result.tomorrow.summary} disabled={true}/></p>
                                                <p><span>财运指数</span> <Rate value={this.state.result.tomorrow.money} disabled={true}/></p>
                                                <p><span>健康指数</span> <Rate value={this.state.result.tomorrow.health} disabled={true}/></p>
                                                <p><span>爱情运势</span> <Rate value={this.state.result.tomorrow.love} disabled={true}/></p>
                                                <p><span>工作运势</span> <Rate value={this.state.result.tomorrow.career} disabled={true}/></p>
                                                <p><span>贵人星座</span> {this.state.result.tomorrow.star}</p>
                                                <p><span>幸运数字</span> {this.state.result.tomorrow.number}</p>
                                                <p><span>幸运颜色</span> {this.state.result.tomorrow.color}</p>
                                            </div>
                                            <div>
                                                <p>明日提醒:</p>
                                                <p>{this.state.result.today.presummary}</p>
                                            </div>
                                        </div> : ''
                                }
                            </TabPane>
                            <TabPane tab="本周运势" key="3">
                                {
                                    this.state.result ?
                                        <div className="container">
                                            <Title title='事业运势' width="100" height="303"><div className="content">{this.state.result.week.career}</div></Title>
                                            <Title title='工作运势' width="100" height="303"><div className="content">{this.state.result.week.job}</div></Title>
                                            <Title title='爱情运势' width="100" height="303"><div className="content">{this.state.result.week.love}</div></Title>
                                            <Title title='健康运势' width="100" height="303"><div className="content">{this.state.result.week.health}</div></Title>
                                            <Title title='金钱运势' width="100" height="303"><div className="content">{this.state.result.week.money}</div></Title>
                                        </div> : ''
                                }
                            </TabPane>
                            <TabPane tab="本月运势" key="4">
                                {
                                    this.state.result ?
                                        <div className="container">
                                            <Title title='事业运势' width="100" height="303"><div className="content">{this.state.result.month.career}</div></Title>
                                            <Title title='爱情运势' width="100" height="303"><div className="content">{this.state.result.month.love}</div></Title>
                                            <Title title='健康运势' width="100" height="303"><div className="content">{this.state.result.month.health}</div></Title>
                                            <Title title='金钱运势' width="100" height="303"><div className="content">{this.state.result.month.money}</div></Title>
                                            <Title title='综合运势' width="100" height="303"><div className="content">{this.state.result.month.summary}</div></Title>
                                        </div> : ''
                                }
                            </TabPane>
                            <TabPane tab="年度运势" key="5">
                                {
                                    this.state.result ?
                                        <div className="container">
                                            <Title title='事业运势' width="100" height="100%"><div className="content">{this.state.result.year.career}</div></Title>
                                            <Title title='爱情运势' width="100" height="100%"><div className="content">{this.state.result.year.love}</div></Title>
                                            <Title title='金钱运势' width="100" height="100%"><div className="content">{this.state.result.year.money}</div></Title>
                                            <Title title='综合运势' width="100" height="100%"><div className="content">{this.state.result.month.summary}</div></Title>
                                        </div> : ''
                                }
                            </TabPane>
                        </Tabs>
                    </div>
                </Title>
            </div>
        )
    }
}
