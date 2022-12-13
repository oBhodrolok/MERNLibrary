
import * as React from 'react';
import {Navbar , Container , Nav, NavDropdown} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {logoutUser} from '../redux/actions/userAction';
import {connect} from 'react-redux';
import {useHistory} from 'react-router-dom';

//https://react-bootstrap.github.io/components/navbar/

const Header = ({user , logoutUser}) => {
  const history = useHistory();
    return (
        <header className="App-header">
          <Navbar bg="black" variant="dark" collapseOnSelect expand='sm'>
            <Container fluid>
              <Navbar.Brand>MERNLibrary
                <Link to = '/'  className="nav-link">
                  Home
                  </Link>
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav" className='mx-auto'>
                <NavDropdown title="Quick Links" id="basic-nav-dropdown" className='mx-left'style={{color:'white'}}>
              <NavDropdown.Item >
                <Link to={'/signin'} className="nav-link">Membership</Link>              
              </NavDropdown.Item>
              <NavDropdown.Item>
              <Link to={'/signin'} className="nav-link">Project Info</Link>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>
              <Link to={'/signin'} className="nav-link">About Us</Link> 
                </NavDropdown.Item>
            </NavDropdown>
            <Nav className='me-auto'></Nav>
              {
              //Some links should be shown based on user's authentication status 
              !user.isAuthenticated ?
              //Case that user is not authenticated/logged out (PUBLIC)
                <Nav className="justify-content-end" style={{fontSize: 'larger', fontFamily: 'helvetica, sans-serif'}}>
                  <Nav>
                    <Link to={'/signin'} className="nav-link">
                      Sign-In
                    </Link>
                  </Nav>
                  <Nav>
                    <Link to={'/register'} className="nav-link">
                      Register!
                    </Link>
                  </Nav>
                </Nav>
                :
                //Case that the user is authenticated/logged in (PRIVATE)
                <Nav className="justify-content-end">
                  <Nav>
                    <Link to={'/signin'} className="nav-link" onClick={() =>logoutUser(history)}>
                      Logout
                    </Link>
                    <Link to={'/profile'} className="nav-link">
                    Your Profile
                    </Link>
                  </Nav>
                  {/* If user is an admin, they can see some other navigation links too! */}
                  {user.user.roll == 'admin'?
                    <Nav>
                      <Link to={'/manage'} className="nav-link">
                        Management
                      </Link>
                    </Nav>:
                    ""
                    //If not, no other links
                  }
                </Nav>
              }
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </header>
    );
}

const mapStateToProps = state => ({
  user: state.user
})

export default connect(mapStateToProps , {logoutUser})(Header);
