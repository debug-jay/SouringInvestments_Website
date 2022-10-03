// const { createProxyMiddleware } = require('http-proxy-middleware');


// const target = 'https://ec2-34-201-91-232.compute-1.amazonaws.com:5001/api/userSignUp';

// const context =  [
//   "/api/userSignUp",
// ];

// module.exports = function(app) {
//   const appProxy = createProxyMiddleware(context, {
//     target: target,
//     secure: true,
//     headers: {
//       Connection: 'Keep-Alive'
//     }
//   });

//   app.use(appProxy);
// };