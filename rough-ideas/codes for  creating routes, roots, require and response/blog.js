//create dependencies for the blog.js file 
const express = require('express');
const bodyParser = require('body-parser'); //body parser is used to parse the body of the request (see notes in line 18)


//create an instance of express and store it in a variable called app
const app = express();

//the body parser is a dependency that is used to parse the body of the request and store it in a variable called bodyParser (install: npm i body-parser)
app.use(bodyParser.text({extended: true}));     //use the body parser to parse the body of the request app.use is used to add middleware to the express application
                                                 //app.use is used to 
                                                 //extended: true is used to parse the body of the request
                                                 //middleware is a function that is executed before the request is handled by the route handler
                                                 //the request object is passed to the middleware function
                                                 //the response object is passed to the middleware function


// create a route for the root path and set it to a function that returns a string (the response) that says hello world
app.get('/', (req, res) => { //req is the request and res is the response that allows us to send data back to the client
    //console.log('Hello World');
    // res.send('Hello World'); //send a response to the client (the browser) that says hello world fetching the data from the local file path
    res.sendFile(__dirname + '/index.html'); //send a response to the client (the browser) that says hello world fetching the data from any file path
});

app.post ('/', (req, res) => {}); //create a route for the root path 

 //listen on port 3001 and log a message to the console when the server is running
app.listen(3001, () => {
    console.log('Server running on port 3001');
});

