import { useState } from 'react'
import axios from 'axios'

const Index = ({ data }) => {
  // const [list, setList] = useState([
  //   1, 2, 3
  // ])
  return (
    <div>
      {
        data.map((item, index) => <p key={index}>{item}</p>)
      }
      <style jsx>{`
          p {
            color: blue;
          }
          @media (max-width: 600px) {
            p {
              color: blue;
            }
          }
      `}</style>
    </div>
  )
}

Index.getInitialProps = async () => {
  const { data } = await axios('../mock/home.json')
  return {
    data
  }
}

export default Index