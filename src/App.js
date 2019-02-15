import React, { Component } from 'react';
import AppTop from './AppTop';
import AppList from './AppList';
import './App.css';

/**
 * todo应用，
 * 实现顶部有一个输入框和按钮，
 * 下面是一个列表，初始化为空，
 * 在输入框输入内容，点击按钮，下面列表会增加这一项，
 * 并且输入框清空。点击列表中的一项，这项会删除。
 */

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
			List: ['aaa', 'bbb'],
		}
    this.topCallback = this.topCallback.bind(this);
    this.listCallback = this.listCallback.bind(this);
  }
  
  topCallback(item) {
    this.setState({
      List: [...this.state.List, item],
    })
  }

  listCallback(list){
    this.setState({
      List: list,
    })
  }

  render() {
    return (
      <div className="App">
        <h1>ToDoList</h1>
        <AppTop callback = {this.topCallback}/>
        <AppList list = {this.state.List}
                 callback = {this.listCallback}/>
      </div>
    );
  }
}

export default App;
