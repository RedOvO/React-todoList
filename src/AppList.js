import React, { Component } from 'react';
import './App.css';
import PropTypes from 'prop-types';


class AppList extends Component {
	constructor(props) {
		super(props);
		
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(index) {
		const { list, callback } = this.props;
		console.log(index);
		list.splice(index, 1);
		callback(list);
	}

	render() {
		const { list } = this.props;
		return (
			<div className='AppList'>
				<ul>
					{ 
						list.map((item, index) => {
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

AppList.PropTypes = {
	list : PropTypes.array,
	callback : PropTypes.func
}

export default AppList;