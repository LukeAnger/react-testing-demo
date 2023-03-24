import React , { useState, useEffect } from 'react'
import axios from 'axios'

import AddName from './components/AddName.jsx'
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

  const addName = (name) => {
    console.log({name: name})
    axios.post(`http://localhost:8080/post`, {name: name})
      .then(res => {
        console.log(res)
        setNames([...names, name])
      })
  }

  if (loading) {
    return <div>Loading...</div>
  }


    return (
      <div>
        <div>Hola Mundo</div>
        <ShowNames names={names} />
        <AddName name={name} addName={addName} />
      </div>
    )
}

export default App