import { useState } from 'react'

const Index = () => {
  const [list, setList] = useState([
    1, 2, 3
  ])
  return (
    <div>
      {
        list.map(item => <p>{item}</p>)
      }
    </div>
  )
}

export default Index