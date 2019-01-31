import React, { Component } from 'react';
import './App.css'

class AppTop extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleClick() {
        this.setState({
            inputValue: '',
        })
    }

    handleInputChange(e) {
        this.setState({
            inputValue: e.target.value,
        })
    }

    render() {
        return (
            <div className='AppTop'>
                <div className='inputArea'>
                    <textarea
                        placeholder='input'
                        value={this.state.inputValue}
                        onChange={this.handleInputChange} />
                </div>
                <button className='addButton' onClick={this.handleClick}>Add</button>
            </div>
        )
    }
}

export default AppTop;