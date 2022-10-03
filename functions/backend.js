const fetch = require('node-fetch');

const API_ENDPOINT = 'https://ec2-34-201-91-232.compute-1.amazonaws.com:5001/api/test';

exports.handler = async (event, context) => {
    
    let response
    try{
        response = await fetch(API_ENDPOINT)
    } catch(err){
        return {
            statusCode: err.statusCode || 500,
            body: JSON.stringify({
                error: err.message
            })
        }
    }
   
    return{
        statusCode: 200,
        body: JSON.stringify({data: response})
    }
}