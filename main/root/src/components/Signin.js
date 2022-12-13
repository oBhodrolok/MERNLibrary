import * as React from 'react';
import { Button,Form } from 'react-bootstrap';
import { connect } from 'react-redux';
import { signinUser } from '../redux/actions/userAction';
import {useHistory} from 'react-router-dom';

const Signin = ({signinUser}) => {
    const [email , setEmail] = React.useState('');
    const [password , setPassword] = React.useState('');
    const history = useHistory();
    return (
        <div>
            <h2 className='text-center my-5'>Sign in</h2>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" value={email} onChange = {(e) => setEmail(e.target.value)}/>
                    {/* <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text> */}
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
            </Form>
        </div>
    );
}

const mapStateToProps = state => ({
    user: state.user
});

export default connect(mapStateToProps , {signinUser})(Signin);
