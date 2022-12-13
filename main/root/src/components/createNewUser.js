import * as React from 'react';
import { Button,Form } from 'react-bootstrap';
import { connect } from 'react-redux';
import {registerUser} from '../redux/actions/userAction';
import {useHistory, useParams} from 'react-router-dom';

const CreateNewUser = ({user , registerUser}) => {
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [roll , setRoll] = React.useState('normal');
    
    const history = useHistory();
    
    return (
        <div>
            <h2 className='text-center my-5'>Add a new member to the library!</h2>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Username:</Form.Label>
                    <Form.Control type="text" value={name} onChange = {(e) => setName(e.target.value)}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address:</Form.Label>
                    <Form.Control type="text" value={email} onChange = {(e) => setEmail(e.target.value)}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>User role:</Form.Label>
                        <Form.Select onChange = {e => setRoll(e.target.value)}>
                            <option value={roll}>normal</option>
                            <option value={roll}>admin</option>
                        </Form.Select>
                    </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password:</Form.Label>
                    <Form.Control type="password" value={password} onChange = {(e) => setPassword(e.target.value)}/>
                </Form.Group>

                <div className='text-center'>
                    <Button variant="primary" type="submit" onClick={(e) => {
                        e.preventDefault();
                        registerUser({name, email, password}, 
                        history)}}>
                    Add member!
                    </Button>
                </div>
            </Form>
        </div>
    );
}

const mapStateToProps = state => ({
    user: state.user
});

export default connect(mapStateToProps, {registerUser}) (CreateNewUser);
