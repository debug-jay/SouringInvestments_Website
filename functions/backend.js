
exports.handler = async (event, context) => {
    
    const data = {
        firstname : event.body.firstname,
        lastname : event.body.firstname,
        email : event.body.email,
        username : event.body.username,
        password : event.body.password,
        privatekey : event.body.privatekey
    }
    
    return{
        statusCode: 200,
        body: JSON.stringify({data}),
        
    }
}