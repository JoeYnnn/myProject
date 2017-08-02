/**
 * Created by qiaoyuning on 2017/8/2.
 */
import React from 'react'
import './calculator.css'

export default class layout extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            result: 0,
            secondNum: 0,
            symbol: '',
            firstNum: 0
        }
    }

    componentDidMount() {

    }

    inputNum(e) {
        if (!isNaN(e.target.childNodes[0].nodeValue)) {
            if (this.state.firstNum == 0) {
                if ((this.state.firstNum + '').indexOf('.') != -1) {
                    this.setState({
                        firstNum: this.state.firstNum + e.target.childNodes[0].nodeValue,
                        result: this.state.firstNum + e.target.childNodes[0].nodeValue,
                    })
                } else {
                    this.setState({
                        firstNum: e.target.childNodes[0].nodeValue,
                        result: e.target.childNodes[0].nodeValue
                    })
                }
            } else if (this.state.symbol && !this.state.secondNum) {
                this.setState({
                    secondNum: +this.state.secondNum + +e.target.childNodes[0].nodeValue,
                    result: +this.state.secondNum + +e.target.childNodes[0].nodeValue
                })
            } else if (this.state.firstNum && this.state.symbol && this.state.secondNum) {
                this.setState({
                    firstNum: e.target.childNodes[0].nodeValue,
                    result: e.target.childNodes[0].nodeValue,
                    symbol: '',
                    secondNum: 0
                })
            } else {
                this.setState({
                    firstNum: this.state.firstNum + e.target.childNodes[0].nodeValue,
                    result: this.state.firstNum + e.target.childNodes[0].nodeValue
                })
            }
        } else if (e.target.childNodes[0].nodeValue == 'AC') {
            this.setState({
                result: 0,
                firstNum: 0,
                secondNum: 0,
                symbol: ''
            })
        } else if (e.target.childNodes[0].nodeValue == '+/-') {
            this.setState({
                result: this.state.firstNum * -1
            })
        } else if (e.target.childNodes[0].nodeValue == '%') {
            this.setState({
                result: this.state.result / 100
            })
        } else if (e.target.childNodes[0].nodeValue == '.') {
            if ((this.state.firstNum + '').indexOf('.') == -1) {
                this.setState({
                    firstNum: this.state.firstNum + '.'
                })
            }
        } else if (e.target.childNodes[0].nodeValue == '+' ||
            e.target.childNodes[0].nodeValue == '-' ||
            e.target.childNodes[0].nodeValue == '*' ||
            e.target.childNodes[0].nodeValue == '/') {
            this.setState({
                symbol: e.target.childNodes[0].nodeValue,
                secondNum: 0,
                firstNum: this.state.firstNum,
            })
        } else if (e.target.childNodes[0].nodeValue == '=' && this.state.symbol) {
            let result = 0;
            result = this.state.firstNum + this.state.symbol + this.state.secondNum
            if ((this.state.result + '').indexOf('e') != -1) {
                this.setState({
                    result: 0,
                    firstNum: 0
                })
            } else {
                this.setState({
                    result: parseFloat(eval(result)),
                    firstNum: parseFloat(eval(result))
                })
            }


        }
    }

    render() {
        return (
            <div className="big">
                <div className="result">{this.state.result}</div>
                <div className="num" onClick={(e) => this.inputNum(e)}>AC</div>
                <div className="num" onClick={(e) => this.inputNum(e)}>+/-</div>
                <div className="num" onClick={(e) => this.inputNum(e)}>%</div>
                <div className="num addBg" onClick={(e) => this.inputNum(e)}>/</div>
                <div className="num" onClick={(e) => this.inputNum(e)}>7</div>
                <div className="num" onClick={(e) => this.inputNum(e)}>8</div>
                <div className="num" onClick={(e) => this.inputNum(e)}>9</div>
                <div className="num addBg" onClick={(e) => this.inputNum(e)}>*</div>
                <div className="num" onClick={(e) => this.inputNum(e)}>4</div>
                <div className="num" onClick={(e) => this.inputNum(e)}>5</div>
                <div className="num" onClick={(e) => this.inputNum(e)}>6</div>
                <div className="num addBg" onClick={(e) => this.inputNum(e)}>-</div>
                <div className="num" onClick={(e) => this.inputNum(e)}>1</div>
                <div className="num" onClick={(e) => this.inputNum(e)}>2</div>
                <div className="num" onClick={(e) => this.inputNum(e)}>3</div>
                <div className="num addBg" onClick={(e) => this.inputNum(e)}>+</div>
                <div className="num1" onClick={(e) => this.inputNum(e)}>0</div>
                <div className="num" onClick={(e) => this.inputNum(e)}>.</div>
                <div className="num addBg" onClick={(e) => this.inputNum(e)}>=</div>
            </div>
        )
    }
}
