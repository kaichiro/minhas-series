import React, { useEffect, useState } from 'react'
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'
import axios from 'axios'

import Generos from './Generos'
import Header from './Header'
import Home from './Home'
import NovoGenero from './NovoGenero'
import EditarGenero from './EditarGenero.js'

function App() {
  const [data, setDate] = useState({})
  useEffect(() => {
    axios.get('/api').then(resp => {
      setDate(resp.data)
    })
  }, [])
  return (
    <Router>
      <div>
        <Header />
        <Route path='/' exact component={Home} />
        <Route path='/genres/:id' exact component={EditarGenero} />
        <Route path='/genres/new' exact component={NovoGenero} />
        <Route path='/genres' exact component={Generos} />
        <pre>{JSON.stringify(data)}</pre>
      </div>
    </Router>
  )
}

export default App
