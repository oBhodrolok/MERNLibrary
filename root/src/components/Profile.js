import * as React from 'react';
import { Button,Form } from 'react-bootstrap';
import { connect } from 'react-redux';
// import { signinUser } from '../redux/actions/userAction';
import {useNavigate} from 'react-router-dom';
import { allBook } from '../redux/actions/bookAction';

const Profile = ({user , book , allBook}) => {
    // const [email , setEmail] = React.useState('');
    // const [password , setPassword] = React.useState('');
    const navigate = useNavigate();
    React.useEffect(() => {
        allBook();
    } ,[book])
    return (
        <div>
            <Button onClick={() => navigate('/')} className='btn-secondary'>go to Library</Button>
            <h2 className='text-center my-5'>My Profile</h2>
            <h4>name: {user.user.name}</h4>
            <h4>email: {user.user.email}</h4>
            <h4>role: {user.user.role}</h4>

            <h4>My Favourites books:</h4>
            <p>
                {user.user.favourites.length> 0 &&user.user.favourites.map(item =>book.books.filter(_item => _item._id == item)[0].title).map(item => <p className='text-success'>title: {item}</p>)}
            </p>
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
    user: state.user,
    book: state.book
});

export default connect(mapStateToProps , {allBook})(Profile);
