// connect to MongoDB
import './database.js'

// Express is a framework for building APIs and web apps
// See also: https://expressjs.com/
import express from 'express'
// Initialize Express app
const app = express()
// Enable express to parse JSON data
app.use(express.json())
// Tell express to serve/publish all our static assets 
// This includes everything in the /public folder (our frontend)
app.use(express.static( 'public'))

// Our API is defined in a separate module to keep things tidy.
// Let's import our API endpoints and activate them.
import apiRoutes from './routes/api.js'
app.use('/', apiRoutes)


// Express starts listening only after MongoDB connects
app.listen(process.env.PORT,() => console.log("Express is Live."))

