import todoFactory from './todo';
import bookFactory from './book'
import axios from "axios"
// import fetch from 'node-fetch'

export default () => {

    const api = axios.create({
        baseUrl: "localhost:3000"
    });

    const [todo, book] = [todoFactory, bookFactory].map( f => f(api))

    return{
        todo,
        book
    }
}