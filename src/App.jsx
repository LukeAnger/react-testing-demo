import React , { useState, useEffect } from 'react'
import axios from 'axios'

import AddPerson from './components/AddPerson.jsx'
import ShowNames from './components/ShowNames.jsx'
import AverageAge from './components/AverageAge.jsx'

const query = 'batman'
const peopleInit = []
const firstGet = async () => {
  const peopleInit = await axios.get(`http://localhost:8080/get?name=${query}`)
}
firstGet()

const App = () => {

  const [people, setPeople] = useState(peopleInit)
  const [loading, setLoading] = useState(false)

  const fetchPeople = async () => {
    setLoading(true)
    const response = await axios.get(`http://localhost:8080/get`)
    setPeople(response.data)
    setLoading(false)
  }

  useEffect(() => {
    fetchPeople()
  }, [])

  const addPerson = (obj) => {
    axios.post(`http://localhost:8080/post`, obj)
      .then(res => {
        setPeople([...people, obj])
      })
  }

  if (loading) {
    return <div>Loading...</div>
  }


    return (
      <div style={{display: 'flex', gap: '2%'}}>

        <AddPerson addPerson={addPerson} />
        <ShowNames people={people} />
        <AverageAge people={people} />
      </div>
    )
}

export default App