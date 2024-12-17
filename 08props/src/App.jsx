import React from 'react'
import Card from "./Components/Card.jsx"
const App = () => {

  const members = [
    {
      "name": "John Doe",
      "city": "New York",
      "age": 30,
      "profession": "Software Engineer",
      "profile_picture": "https://example.com/profile_pictures/john_doe.jpg"
    },
    {
      "name": "Jane Smith",
      "city": "Los Angeles",
      "age": 28,
      "profession": "Graphic Designer",
      "profile_picture": "https://example.com/profile_pictures/jane_smith.jpg"
    },
    {
      "name": "Michael Johnson",
      "city": "Chicago",
      "age": 35,
      "profession": "Project Manager",
      "profile_picture": "https://example.com/profile_pictures/michael_johnson.jpg"
    },
    {
      "name": "Emily Davis",
      "city": "Houston",
      "age": 25,
      "profession": "Data Analyst",
      "profile_picture": "https://example.com/profile_pictures/emily_davis.jpg"
    },
    {
      "name": "William Brown",
      "city": "San Francisco",
      "age": 40,
      "profession": "Product Manager",
      "profile_picture": "https://example.com/profile_pictures/william_brown.jpg"
    }
  ]



  return (
    <div className=''>
      <div>
        {members.map(function (elem, idx) {
          return <Card  key={idx} name={elem.name} age={elem.age} city={elem.city}
            prof={elem.profession} pic={elem.picture} />
          })}

          console.log("elem.pic")

      </div>
    </div>

  )
}

export default App