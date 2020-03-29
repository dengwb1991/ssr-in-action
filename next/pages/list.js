import { useState } from 'react'

const Index = () => {
  const [list, setList] = useState([
    1, 2, 3
  ])
  return (
    <div>
      {
        list.map((item, index) => <p key={index}>{item}</p>)
      }
    </div>
  )
}

export default Index