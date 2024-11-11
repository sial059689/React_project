import React from 'react'
import Card from './Components/Card'
const App = () => {



  const user = [
    {
      "name": "Alice Johnson",
      "age": 28,
      "city": "New York",
      "profession": "Software Engineer",
      "picture": "https://example.com/images/alice.jpg"
    },
    {
      "name": "Bob Smith",
      "age": 34,
      "city": "Los Angeles",
      "profession": "Graphic Designer",
      "picture": "https://example.com/images/bob.jpg"
    },
    {
      "name": "Catherine Liu",
      "age": 26,
      "city": "San Francisco",
      "profession": "Data Analyst",
      "picture": "https://example.com/images/catherine.jpg"
    },
    {
      "name": "David Kim",
      "age": 31,
      "city": "Seattle",
      "profession": "Project Manager",
      "picture": "https://example.com/images/david.jpg"
    },
    {
      "name": "Emma Brown",
      "age": 29,
      "city": "Chicago",
      "profession": "Marketing Specialist",
      "picture": "https://example.com/images/emma.jpg"
    }
  ]



  return (
    <div>
      

      {user.map(function (elem, idx) {
        return <Card key={idx} Name={elem.name}/>
      })}

    </div>
  )
}

export default App