import React from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import CreateStudent from './components/create-student.component'
import EditStudent from './components/edit-student.component'
import StudentList from './components/student-list.component'
import  Header  from './components/Header'
import Home from './components/Home'
import Signin from './components/Signin'
import Register from './components/Register'
import Profile from './components/Profile'
import Update from './components/Update'
import Create from './components/Create'


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Container>
          <Row>
            <Col md={12}>
              <div className="wrapper">
                <Switch>
                  <Route
                    exact
                    path="/"
                    component={Home}
                  />
                  <Route
                    exact
                    path="/profile"
                    component={Profile}
                  />
                  <Route
                    exact
                    path="/signin"
                    component={Signin}
                  />
                  <Route
                    exact
                    path="/register"
                    component={Register}
                  />
                  <Route
                    exact
                    path="/update/:id"
                    component={Update}
                  />
                  <Route
                    exact
                    path="/create"
                    component={Create}
                  />
                  <Route
                    exact
                    path="/create-student"
                    component={(props) => <CreateStudent {...props} />}
                  />
                  <Route
                    exact
                    path="/edit-student/:id"
                    component={(props) => <EditStudent {...props} />}
                  />
                  <Route
                    exact
                    path="/student-list"
                    component={(props) => <StudentList {...props} />}
                  />
                </Switch>
              </div>
            </Col>
          </Row>
        </Container>
      </Router>
    </div>
  )
}

export default App
