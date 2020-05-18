import React, { useEffect, useState } from 'react'

import API from './utils/API'

function App() {
  const [field, setfield] = useState('')
  const [repDeets, setrepDeets] = useState('')

  useEffect(() => {
    async function getDeets() {
      API.getReps(field).then((response) => {
        setrepDeets(response.data.results)
      })
    }
    if (field.length === 2) {
      getDeets()
    }
  }, [field])

  return (
    <div>
      <h1>Who's My Representative?</h1>
      <div>
        <input value={field} onChange={(e) => setfield(e.target.value)} />
        <div>{repDeets}</div>
      </div>
    </div>
  )
}

export default App
