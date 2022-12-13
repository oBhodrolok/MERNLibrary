import * as React from 'react';
import { Button,Form } from 'react-bootstrap';
import { connect } from 'react-redux';
// import { signinUser } from '../redux/actions/userAction';
import {useHistory} from 'react-router-dom';

const Profile = ({user}) => {
    // const [email , setEmail] = React.useState('');
    // const [password , setPassword] = React.useState('');
    const history = useHistory();
    return (
        <div>
            <Button onClick={() => history.push('/')} className='btn-secondary'>go to Library</Button>
            <h2 className='text-center my-5'>My Profile</h2>
            <h4>name: {user.user.name}</h4>
            <h4>email: {user.user.email}</h4>
            <h4>roll: {user.user.roll}</h4>
            {/* <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" value={email} onChange = {(e) => setEmail(e.target.value)}/>

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" value={password} onChange = {(e) => setPassword(e.target.value)}/>
                </Form.Group>
                <div className='text-center'>
                    <Button variant="primary" type="submit" onClick={(e) => {e.preventDefault(); signinUser({email , password} , history)}}>
                        Submit
                    </Button>
                </div>
            </Form> */}
        </div>
    );
}

const mapStateToProps = state => ({
    user: state.user
});

export default connect(mapStateToProps , {})(Profile);
