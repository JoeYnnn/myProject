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
            secondResult: 0,
            symbol: ''
        }
    }

    componentDidMount() {

    }

    inputNum(e) {
        if (!isNaN(e.target.childNodes[0].nodeValue)) {
            if (this.state.result == 0) {
                if ((this.state.result +  '').indexOf('.') != -1) {
                    this.setState({
                        result: this.state.result + e.target.childNodes[0].nodeValue
                    })
                } else {
                    this.setState({
                        result: e.target.childNodes[0].nodeValue
                    })
                }
            } else {
                this.setState({
                    result: this.state.result + e.target.childNodes[0].nodeValue
                })
            }
        } else if (e.target.childNodes[0].nodeValue == 'AC') {
            this.setState({
                result: 0
            })
        } else if (e.target.childNodes[0].nodeValue == '+/-') {
            this.setState({
                result: this.state.result * -1
            })
        } else if (e.target.childNodes[0].nodeValue == '%') {
            this.setState({
                result: this.state.result / 100
            })
        } else if (e.target.childNodes[0].nodeValue == '.') {
            if ((this.state.result + '').indexOf('.') == -1) {
                this.setState({
                    result: this.state.result + '.'
                })
            }
        } else if (e.target.childNodes[0].nodeValue == '+' ||
            e.target.childNodes[0].nodeValue == '-' ||
            e.target.childNodes[0].nodeValue == '*' ||
            e.target.childNodes[0].nodeValue == '/') {
            this.setState({
                symbol: e.target.childNodes[0].nodeValue,
                secondResult: this.state.result,
                result: 0
            })
        } else if (e.target.childNodes[0].nodeValue == '='){
            let result = 0;
            result = this.state.secondResult + this.state.symbol + this.state.result
            this.setState({
                result:eval(result)
            })
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
