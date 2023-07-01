import { useState } from 'react'
import { Container } from 'react-bootstrap'
import { Route } from 'react-router-dom'
import { About } from './pages/About'
import { Home } from './pages/Home'
import { Store } from './pages/Store'

function App() {

  return (
    <Container>
      <Route path='/' element={<Home />} />
      <Route path='/store' element={<Store />} />
      <Route path='/about' element={<About />} />
    </Container>
  )
}

export default App
