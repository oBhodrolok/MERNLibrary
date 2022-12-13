import * as React from 'react';
import { Button,Form } from 'react-bootstrap';
import { connect } from 'react-redux';
import { createBook } from '../redux/actions/bookAction';
import {useHistory, useParams} from 'react-router-dom';

const CreateNewBook = ({book , createBook}) => {
    const [title, setTitle] = React.useState('');
    const [authors, setAuthor] = React.useState('');
    const [description, setDescription] = React.useState('');
    
    const history = useHistory();
    
    return (
        <div>
            <h2 className='text-center my-5'>Add a new Book to the library!</h2>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Title:</Form.Label>
                    <Form.Control type="text" value={title} onChange = {(e) => setTitle(e.target.value)}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Author(s):</Form.Label>
                    <Form.Control type="text" value={authors} onChange = {(e) => setAuthor(e.target.value)}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Brief description:</Form.Label>
                    <Form.Control type="text" value={description} onChange = {(e) => setDescription(e.target.value)}/>
                </Form.Group>

                <div className='text-center'>
                    <Button variant="primary" type="submit" onClick={(e) => {
                        e.preventDefault();
                        createBook({title , authors , description}, 
                        history)}}>
                    Add to the collection
                    </Button>
                </div>
            </Form>
        </div>
    );
}

const mapStateToProps = state => ({
    book: state.book
});

export default connect(mapStateToProps, {createBook}) (CreateNewBook);
