import React from 'react';
import './Titlelayout.css';


export default class Titlelayout extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div style={{width: this.props.width + '%'}}>
                <div className='root'
                     style={{minHeight: this.props.height.indexOf('%') != -1 ? this.props.height : this.props.height + 'px'}}>
                    <div className='menu'>
                        <h3 className='title'>{this.props.title}</h3>

                    </div>
                    {this.props.children}
                </div>
            </div>


        );
    }
}

