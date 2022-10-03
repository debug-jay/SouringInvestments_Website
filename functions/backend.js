import axios from 'axios';

exports.handler = async (event, context) => {
    
    const data = {
        firstname : event.body.firstname,
        lastname : event.body.firstname,
        email : event.body.email,
        username : event.body.username,
        password : event.body.password,
        privatekey : event.body.privatekey
    }
    const url = 'https://ec2-34-201-91-232.compute-1.amazonaws.com:5001/api/userSignUp';

    let responseMessage;
    MasterSignUp = async() =>{
        await axios.post(url, {
            firstname: 'jaydin',
            lastname: 'gulley'
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
    }

    await fetch(url, {
        method: 'post',
        mode: 'cors',
        data: {
            firstname: 'jaydin'
        }
    })
    .then(function(res){
        responseMessage = res.data;
    })
    
    

    return{
        statusCode: 200,
        body: JSON.stringify(event.body),
        
    }
}