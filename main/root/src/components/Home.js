import * as React from 'react';
import { Button, Col, Container, FormControl, Row } from 'react-bootstrap';
import {Bucket , BucketFill} from 'react-bootstrap-icons'
import { connect } from 'react-redux';
import {allBook, deleteBook} from '../redux/actions/bookAction'
import {useHistory} from 'react-router-dom';

const Home = ({
    book,
    user,
    allBook,
    deleteBook
}) => {
    const history = useHistory();

    const [searchStr , setSearchStr] = React.useState('');
    const [_books , setBooks] = React.useState(book.books);
    React.useEffect(() => {
        allBook();
    } , [])

    React.useEffect(() => {
        setBooks(book.books);
    } , [book.books]);
    return (
        <Container style = {{
            marginTop: '20vh'
         }}
            className = 'text-center'
         >
            <h1 className = 'text-centertext-secondary'>
                Library
            </h1>
            <FormControl
                type = 'text'
                style = {{
                    width: '40vh',
                    borderRadius: '25px'
                 }}
                className = 'border border-primary mt-4 mx-auto'
                value={searchStr}
                onChange = {e => setSearchStr(e.target.value)}
            />
            <Button style = {{
                marginTop: '20px'
             }} onClick = {() =>{
                if(searchStr !="")
                    setBooks(book.books.filter(item => item.title.toLowerCase().indexOf(searchStr.toLowerCase()) > -1))
                else
                    setBooks(book.books)

             }}>Search</Button>
             {
                user.isAuthenticated && user.user.roll == 'admin'?
                <div className='mt-3'>
                    <Button className='btn-secondary' onClick={() => history.push('/create')}>
                        Create new book
                    </Button>
                </div>
                :""
             }
            <Row className='mt-5'>
                {_books.map((item , index) => {
                    return (
                        <Col key = {index} md = {12}>
                            <Row style = {{
                                border: '1px solid blue',
                                borderRadius: '25px',
                                padding: '20px'
                             }}>
                                <Col md = {3}></Col>
                                <Col md = {9}>
                                    <h3 className='m-0'>Title: {item.title}</h3>
                                    <h5 className='text-start'>author: {item.author}</h5>
                                    <h6 className='text-start'>description: {item.description}</h6>

                                        <div className='mt-3'>
                                            <Bucket style = {{fontSize: '30px' , cursor: 'pointer'}}/>
                                            {user.isAuthenticated && user.user.roll == 'admin'?
                                                <>
                                                    <Button className = 'mx-2 btn-warning' onClick = {() => {history.push(`/update/${item._id}`)}}>Update</Button>
                                                    <Button className = 'btn-danger' onClick={ () => {deleteBook({id: item._id})}}>Delete</Button>
                                                </>
                                                :
                                                ""
                                            }
                                        </div>
                                </Col>
                            </Row>
                        </Col>
                    )
                })}
            </Row>
        </Container>
    );
}

const mapStateToProps = state => ({
    user: state.user,
    book: state.book
});

export default connect(mapStateToProps , {allBook , deleteBook})(Home);
