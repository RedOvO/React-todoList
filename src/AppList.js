import React, { Component } from 'react';
import './App.css'

class AppList extends Component {
	constructor(props) {
		super(props);
		
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(index) {
		console.log(index);
		this.props.list.splice(index, 1);
		this.props.callback(this.props.list);
	}

	render() {
		return (
			<div className='AppList'>
				<ul>
					{ 
						this.props.list.map((item, index) => {
						return (
							<li className='one_input' key={index}>
								<label>{item}</label>
								<button className='deleteButton' 
												onClick={index=>this.handleClick(index)}>
									delete
								</button>
							</li>
						)
					})}
				</ul>
			</div>
		)
	}
}

export default AppList;