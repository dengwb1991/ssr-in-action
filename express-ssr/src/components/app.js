import React, { Component } from 'react'

class App extends Component {
  handler () {
    // 服务端不支持事件绑定
    // console.log(111)
  }
  render () {
    const list = this.props.list
    return (
      <div>
        <button onClick={this.handler}>Button</button>
        <ul>
          {
            list.map(item => (
            <li>{item}</li>
            ))
          }
        </ul>
      </div>
    )
  }
}

export default App