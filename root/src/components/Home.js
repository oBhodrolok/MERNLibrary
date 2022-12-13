import * as React from 'react';
import { Button, Col, Container, FormControl, Row , Table } from 'react-bootstrap';
import {Bucket , BucketFill} from 'react-bootstrap-icons'
import { connect } from 'react-redux';
import {allBook, deleteBook} from '../redux/actions/bookAction'
import {useHistory} from 'react-router-dom';
import {Link} from 'react-router-dom';
import { addFav, delFav } from '../redux/actions/userAction';

const Home = ({
    book,
    user,
    allBook,
    deleteBook,
    delFav,
    addFav
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
        <Container style = {{marginTop: '10px'}}className = 'text-center'>
            <h1 className = 'text-centertext-secondary'>List of books available in the library!</h1>
            <FormControl type = 'text' style = {{width: '90vh',borderRadius: '15px'}} className = 'border border-primary mt-4 mx-auto' value={searchStr}
                onChange = {e => setSearchStr(e.target.value)}
            />
            {/* Search button to filter and show only input-matching books */}
            <Button style = {{marginTop: '20px'}} onClick = {() =>{
                if(searchStr !=""){
                    setBooks(book.books.filter(item => item.title.toLowerCase().indexOf(searchStr.toLowerCase()) > -1))
                }
                else{
                    //If user searches blank/empty, show all books
                    setBooks(book.books)
                }
             }}>Search</Button>

             {/* List(table actually) of books */}
             <Table striped bordered hover className='mt-5'>
                <thead>
                    <tr>
                    <th>#</th>
                    <th>Title</th>
                    <th>Author</th>
                    <th>Description</th>
                    <th>Preview</th>
                    <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {_books.map((item , index) => (
                        <tr>
                            {/* first columns is just index so dont do anything but increment by 1 for each sequential book */}
                            <td>{index+1}</td>
                            <td>
                                {item.title}
                            </td>
                            <td>
                                {item.author}
                            </td>
                            <td>
                                {item.description}
                            </td>

                            <td>
                                <Button className = 'btn-secondary text-white' onClick = {() => history.push(`/preview/${item._id}`)}>Preview</Button>
                            </td>

                            <td>
                                {
                                user.isAuthenticated ?
                                    user.user.favourites.length > 0 ? 
                                        user.user.favourites.filter(_item => _item == item._id).length==0 ?
                                            <Button className = 'btn-info text-white' onClick = {() => addFav({id: item._id , email: user.user.email})} disabled = {!user.isAuthenticated}>Favorite!</Button>
                                            :
                                            <Button  className = 'btn-danger text-white' onClick = {() => delFav({id: item._id, email: user.user.email})} disabled = {!user.isAuthenticated}>delete fav</Button>
                                        :
                                        <Button className = 'btn-info text-white' onClick = {() => addFav({id: item._id , email: user.user.email})} disabled = {!user.isAuthenticated}>Add to favorites</Button>
                                    :
                                    // Case that the user is not authenticated, public view, can't favorite, so show nothing!
                                    <Link to={'/signin'} className="nav-link">Sign-In to favorite!</Link>
                                }
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Container>
    );
}

const mapStateToProps = state => ({
    user: state.user,
    book: state.book
});

export default connect(mapStateToProps , {allBook , deleteBook , delFav , addFav})(Home);
