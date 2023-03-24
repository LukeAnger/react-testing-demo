import React , { useState, useEffect } from 'react'
import axios from 'axios'

import AddPerson from './components/AddPerson.jsx'
import ShowNames from './components/ShowNames.jsx'

const query = 'batman'
const namesInit = []
const firstGet = async () => {
  const namesInit = await axios.get(`http://localhost:8080/get?name=${query}`)
}
firstGet()

const App = () => {

  const [names, setNames] = useState(namesInit)
  const [loading, setLoading] = useState(false)

  const fetchNames = async () => {
    setLoading(true)
    const response = await axios.get(`http://localhost:8080/get`)
    setNames(response.data)
    setLoading(false)
  }

  useEffect(() => {
    fetchNames()
  }, [])

  const addPerson = (obj) => {
    console.log('CHECK ADDING OF NAME: ', names, name)
    axios.post(`http://localhost:8080/post`, obj)
      .then(res => {
        console.log('CHECK ADDING OF NAME: ', names, name)
        setNames([...names, obj])
      })
  }

  if (loading) {
    return <div>Loading...</div>
  }


    return (
      <div style={{display: 'flex', gap: '2%'}}>

        <AddPerson name={name} addPerson={addPerson} />
        <ShowNames names={names} />
      </div>
    )
}

export default App