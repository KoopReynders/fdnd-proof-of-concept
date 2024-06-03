// Import the express npm package from the node_modules directory
import express from 'express';

// Import the fetchJson function from the ./helpers directory
import fetchJson from './helpers/fetch-json.js';

// Define the base URLs for Redpers and Directus APIs
const apiURL = '';

// Create a new express app
const app = express();

// Set ejs as the template engine
app.set('view engine', 'ejs');

// Make working with request data easier
app.use(express.urlencoded({ extended: true }));

// Set the directory for ejs templates
app.set('views', './views');

// Use the 'public' directory for static resources
app.use(express.static('public'));

// GET route for the index page
app.get('/', function (request, response) {

    // Fetch categories and posts concurrently
    Promise.all([
        fetchJson(`${apiURL}`)
    ])
    .then(([siteData]) => {

        // Render index.ejs and pass the filtered data as 'posts' and 'categories' variables
        response.render('index', { sites: siteData });
    })
    .catch((error) => {
        console.error('Error fetching data:', error);
        response.status(500).send('Error fetching data');
    });
});

// Set the port number for express to listen on
app.set('port', process.env.PORT || 8000);

// Start express and listen on the specified port
app.listen(app.get('port'), function () {
    // Log a message to the console with the port number
    console.log(`Application started on http://localhost:${app.get('port')}`);
});