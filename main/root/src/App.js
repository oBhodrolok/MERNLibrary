import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import Header         from './components/NavBarAll'
import Home           from './components/Home'
import Signin         from './components/Signin'
import Register       from './components/Register'

import CreateStudent  from './components/createStudent'
import CreateUser2 from './components/createNewUser'
import EditStudent    from './components/updateStudent'
import StudentList    from './components/student-list.component'

import Profile        from './components/UserProfile'
import UpdateBook         from './components/updateBook'
import Create         from './components/createBook'


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
                  <Route exact path="/" component={Home} />
                  
                  <Route exact path="/profile" component={Profile} />
                  <Route exact path="/signin" component={Signin} />
                  <Route exact path="/register" component={Register}/>

                  <Route exact path="/updateBook/:id" component={UpdateBook} />
                  <Route exact path="/create" component={Create} />
                  
                  <Route exact path="/create-student" component={(props) => <CreateStudent {...props} />}/>
                  <Route exact path="/createNewUser" component={CreateUser2} />
                  <Route exact path="/edit-student/:id" component={(props) => <EditStudent {...props} />} />
                  <Route exact path="/student-list" component={(props) => <StudentList {...props} />} />
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
