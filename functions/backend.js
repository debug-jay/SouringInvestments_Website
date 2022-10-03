const axios = require('axios');

exports.handler = async (event, context) => {
    
    const data = {
        firstname : event.body.firstname,
        lastname : event.body.firstname,
        email : event.body.email,
        username : event.body.username,
        password : event.body.password,
        privatekey : event.body.privatekey
    }

    let responseMessage;

    try{
        const url = 'https://ec2-34-201-91-232.compute-1.amazonaws.com:5001/api/userSignUp';
        await axios.post(url, {
            firstname: data.firstname,
            lastname: data.lastname
        })
        .then(function(response){
            console.log(response.data);
            responseMessage = response.data;
        })
        .catch(err=>{
            console.log(err);
            console.log(err.response);
            console.log(err.request);
        })

    }catch(e){
        console.log(e);
    }
    
    return{
        statusCode: 200,
        body: JSON.stringify(responseMessage),
        
    }
}