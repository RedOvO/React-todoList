import React, { Component } from 'react';
import './App.css'
import PropTypes from 'prop-types';

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
		const { callback } = this.props;
		callback(this.state.inputValue);
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
				<button className='addButton' onClick={this.handleClick}>
					Add
        </button>
			</div>
		)
	}
}

AppTop.PropTypes = {
	callback : PropTypes.func
}

export default AppTop;