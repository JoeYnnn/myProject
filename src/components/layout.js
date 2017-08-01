import React from 'react'
import TitleLayout from  './TitleLayout/Titlelayout'

export default class layout extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    componentDidMount() {

    }

    render() {
        return (
            <div>
                <TitleLayout width="100" height="300" title="title">

                </TitleLayout>
                <div>
                    <p>说明:</p>
                    <p>宽度赋值为百分比</p>
                    <p>高度为minHeigh，赋值为px</p>
                </div>
            </div>
        )
    }
}
