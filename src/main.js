import React from 'react'
import {render} from 'react-dom'

// 引入React-Router模块
import {Router, Route, Link, hashHistory, IndexRoute, Redirect, IndexLink} from 'react-router'

// 引入Antd的导航组件
import {Menu, Icon, Switch} from 'antd'
const SubMenu = Menu.SubMenu

// 引入Ant-Design样式 & Animate.CSS样式
import 'animate.css/animate.min.css'
import 'font-awesome/css/font-awesome.min.css'

// 引入主体样式文件
import './main.css'

// 引入单个页面（包括嵌套的子页面）
import Titlelayout from './components/layout'
import Index from './components/index'
import calculator from './components/jsComponent/calculator'

const ACTIVE = {color: 'red'}

// 配置导航
class Sider extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            current: '',
            username: ''
        }
    }

    handleClick = (e) => {
        this.setState({
            current: e.key
        })
    }

    componentDidMount() {

    }

    render() {
        return (
            <div>
                <div id="leftMenu">
                    <img src='src/assets/images/logo.png' width="50" id="logo"/>
                    <Menu theme="dark"
                          onClick={this.handleClick}
                          style={{width: 185}}
                          defaultOpenKeys={[]}
                          defaultSelectedKeys={[this.state.current]}
                          mode="inline"
                    >
                        <Menu.Item key="1"><Link to="Index"><Icon type="home"/>首页</Link></Menu.Item>
                        <SubMenu key="sub1" title={<span><Icon type="windows"/><span>样式列表</span></span>}>
                            <Menu.Item key="2"><Link to="Titlelayout">Titlelayout</Link></Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub2" title={<span><Icon type="desktop"/><span>JS逻辑</span></span>}>
                            <Menu.Item key="3"><Link to="calculator">H5计算器</Link></Menu.Item>
                        </SubMenu>
                    </Menu>
                </div>
                <div id="rightWrap">
                    <Menu mode="horizontal">
                        <SubMenu title={<span><Icon type="user"/>Joe</span>}></SubMenu>
                    </Menu>
                    <div className="right-box">
                        { this.props.children }
                    </div>
                </div>
            </div>
        )
    }
}


// 配置路由
render((
    <Router history={hashHistory}>
        <Route path="/" component={Sider}>
            <IndexRoute path="Index" component={Index}/>
            <Route path="Titlelayout" component={Titlelayout}/>
            <Route path="Index" component={Index}/>
            <Route path="calculator" component={calculator}/>
        </Route>
    </Router>
), document.getElementById('app'));


