import React, { Component } from 'react';
import './App.css'

class AppList extends Component{
    constructor(props){
        super(props);
        this.state = {
            List:['aaa', 'bbb'],
        }
    }
    
    handleClick(index) {
        console.log(index);
        let list = this.state.List;
        list.splice(index, 1);
        this.setState({
            List: list,
        })
    }

    render() {
        return(
            <div className='AppList'>
                <ul>
                    {this.state.List.map((item, index) => {
                        return ( 
                            <li className='one_input' key={index}>
                                <label>{item}</label>
                                <button className='deleteButton' onClick={this.handleClick.bind(this, index)}>delete</button>
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}

export default AppList;