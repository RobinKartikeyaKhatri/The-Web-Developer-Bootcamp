const request = require('request');
request('https://jsonplaceholder.typicode.com/users/1', function (error, response, body) {
    if (!error && response.statusCode === 200) {
        const parsedData = JSON.parse(body);
        console.log(`${parsedData.name} lives at ${parsedData.address.city}`);
    } else {
        console.log("Something went wrong!");
        console.error('error:', error); // Print the error if one occurred
        console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
        console.log('body:', body); // Print the HTML for the Google homepage.
    }
});