import React from 'react'

const App = () => {
  const handler = () => {
    console.log(111)
  }
  const list = [1, 2, 3]
  return (
    <div className="App">
      <button onClick={handler}>Button</button>
      <ul>
        {
          list.map(item => (
          <li>{item}</li>
          ))
        }
      </ul>
    </div>
  );
}

export default App
