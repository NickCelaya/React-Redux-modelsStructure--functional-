import todoApi from './todo';
import bookApi from './book'
import axios from "axios"
// import fetch from 'node-fetch'

export default () => {

    const api = axios.create({
        baseUrl: "localhost:3000"
    });

    const [todo, book] = [todoFactory, bookFactory].map( item => item(api))

    return{
        todo,
        book
    }
}
