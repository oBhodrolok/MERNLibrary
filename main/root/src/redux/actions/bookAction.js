import axios from "axios"
import { CREATE_BOOK, DELETE_BOOK, RETRIEVE_BOOK, UPDATE_BOOK , ALL_BOOK } from "./type";


export const allBook = () => dispatch => {
    axios.get('http://localhost:4000/book/')
        .then(res => {
            console.log(res.data);
            dispatch({type: ALL_BOOK , payload: res.data})
        })
        .catch(err => console.log(err));
}

export const retrieveBook = () => dispatch => {
    axios.get('http://localhost:4000/book')
        .then(res => {
            console.log(res.data);
            dispatch({type: RETRIEVE_BOOK , payload: res.data})
        })
        .catch(err => console.log(err));
}

export const createBook = (data , history) => dispatch => {
    axios.post('http://localhost:4000/book/create-book' , {...data})
        .then(res => {
            dispatch({type: CREATE_BOOK , payload: res.data})
            history.push('/');
            // }
        })
        .catch(err => console.log(err));
}


export const updateBook = (data , history) => dispatch => {
    axios.put(`http://localhost:4000/book/update-book/${data.id}` , {...data})
        .then(res => {
            dispatch({type: UPDATE_BOOK , payload: res.data})
            history.push('/');
            // }
        })
        .catch(err => console.log(err));
}

export const deleteBook = (data , history) => dispatch => {
    axios.delete(`http://localhost:4000/book/delete-book/${data.id}`)
    .then(res => {
            console.log(res.data);
            dispatch({type: DELETE_BOOK , payload: data})
            history.push('/');
            // }
        })
        .catch(err => console.log(err));
}
