import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'reactstrap'

import API from './utils/API'
import states from './utils/states'

import SearchForm from './components/SearchForm'

function App() {
  return (
    <Container>
      <h1>Who's My Representative?</h1>
      <Row>
        <Col>
          <SearchForm />
        </Col>
      </Row>
    </Container>
  )
}

export default App
