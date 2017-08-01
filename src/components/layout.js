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
                <TitleLayout width="100" height="500" title="测试"/>
            </div>
        )
    }
}
