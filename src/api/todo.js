export default (api) => {
    
    const getTodo = () => {
        return Promise.resolve([{id: 1, description: "Do This"}]) // a get request example
    }
    const saveTodo = () => {
        return Promise.resolve([{id: 1, description: "save This"}]) // a post request example
    }

    return { getTodo, saveTodo }
}