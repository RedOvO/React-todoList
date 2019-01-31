import React, { Component } from 'react';
import './App.css'

class AppTop extends Component{
    render() {
        return (
            <div className='AppTop'>
                <div className='inputArea'>
                    <textarea placeholder='input' />
                </div>
                <button className='addButton'>Add</button>
            </div>
        )
    }
}

export default AppTop;