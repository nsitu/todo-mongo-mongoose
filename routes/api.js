// Below we will use the Express Router to define a series of API endpoints.
// Express will listen for API requests and respond accordingly
// Notice the use of HTTP Verbs (POST, GET, PUT, DELETE)
// These verbs map nicely onto CRUD operations (Create Read Update Delete)

// NOTE: This file (api.js) is a JavaScript module. 
// It's separate from index.js but it does depends on express.
// As such, you'll see similar import statements at the top of both files.
import express from 'express'
import mongoose from 'mongoose' 

// Middleware to check MongoDB connection
function connectionCheck(req, res, next) {
  if (mongoose.connection.readyState !== 1) {
    return res.status(503).send()
  }
  next();
}

// import the TODO model 
import Todo from "../models/Todo.js"

// setup the express Router
// see also: https://expressjs.com/en/4x/api.html#router
const router = express.Router()

// Listen for POST requests
// respond by CREATEing a new todo in MongoDB
// This is the 'C' of CRUD
// After saving data in MongoDB we send the TODO back to the frontend.
router.post('/todo', (req, res) => { 
  console.log(req.body)
  new Todo(req.body).save()
    .then(todo => res.send(todo) )
    .catch(err => res.status(500).send(err))
})

// listen for GET requests
// respond by READing a list of todos from MongoDB 
// This is the 'R' of CRUD
// After querying MongoDB we send an array of TODOS  to the frontend.
router.get('/todos', connectionCheck, (req, res) => { 
  // The filter below is blank, but we could adjust it
  // see also: https://www.mongodb.com/docs/compass/current/query/filter/ 
  let filter = {};  
    Todo.find(filter)
      .sort({date:"descending"})   /* Sort by date with the newst first. */
      .then(todos => res.send(todos))
      .catch(err => res.status(500).send(err))
})

// Listen for PUT requests
// respond by updating a particular todo in MongoDB
// This is the 'U' of CRUD
// After updating MongoDB we send the updated TODO back to the frontend.
router.put('/todo/:id', (req, res) => {   
  // the {new:true} option below tells mongoose
  // to return the updated version, not the original version
  let options = {new: true}
  Todo.findByIdAndUpdate(req.params.id, req.body, options)
    .then(todo => res.send(todo) )
    .catch(err => res.status(500).send(err)) 
})

// Listen for DELETE requests
// respond by DELETing a particular todo in MongoDB
// This is the 'D' of CRUD
router.delete('/todo/:id', (req, res) => {
  Todo.findByIdAndDelete(req.params.id)
    .then(result => res.send(result) )
    .catch(err => res.status(500).send(err)) 
})

// export the api routes for use elsewhere in our app 
// (e.g. in index.js )
export default router;

