import React, { Component } from 'react';
import './App.css'

class AppList extends Component{
    render() {
        return(
            <div className='AppList'>
                <ul>
                    <li className='one_input'>
                        <label>{this.props.value}</label>
                        <button className='deleteButton'>delete</button>
                    </li>
                </ul>
            </div>
        )
    }
}

export default AppList;