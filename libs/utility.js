let generateError = (status, message) => {
    let error = {
        status,
        message
    }
    return error
}

module.exports ={
    generateError
}