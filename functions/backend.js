import axios from 'axios';
import fetch from 'node-fetch';

exports.handler = async (event, context) => {
    
    const data = {
        firstname : 'event.body.firstname',
        lastname : 'event.body.firstname',
        email : 'event.body.email',
        username : 'event.body.username',
        password : 'event.body.password',
        privatekey : 'event.body.privatekey'
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
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(res=>res.json())
    .then(data=>{
        console.log('successs:', data);
    })
    .catch(err=>{
        console.log('error:', err);
    })
    
    

    return{
        statusCode: 200,
        body: JSON.stringify(event.body)
    }
}