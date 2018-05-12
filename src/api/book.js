export default (api) => {
    const getBook = async () => {
        // return Promise.resolve([{id: 1, description: "Do This"}]) // a get request example using async awit
        const book = await Promise.resolve([{id: 1, description: "Do This"}]) // promise resolves mock http request return
        return {
            books: book.data.books
        }
    }
    const saveBook = () => {
        return Promise.resolve([{id: 1, description: "save This"}]) // a post request example
    }

    return { getBook, saveBook }
}






// Promise.resolve = (resolveTo) => {
//     return new Promise((resolve) => resolve(resizeTo))
// } 

// const saveToDB = (record) => {
//     if (typeof record.name !== 'string') {
//       return Promise.reject(new Error('You suck'))   
//     }
//     return mongo.saveIt(record)
// }

// const saveToDB = record => {
//     return new Promise((resolve, reject) => {
//         if (typeof record.name !== 'string') {
//             return reject(new Error('You suck'))   
//         }

//         return resolve(mongoD.saveIt(record))
//     })
// }