# TODO List persisted via MongoDB
[![Open in Coder](https://ixdcoder.com/open-in-coder.svg)](https://ixdcoder.com/templates/Node/workspace?name=TODO-Mongo&mode=auto&param.git_repo=https://bender.sheridanc.on.ca/system-design/todo-mongo&param.code_template=custom)

## About
This app uses [MongoDB Atlas](https://www.mongodb.com/cloud/atlas/) to persist a collection of TODO items. It communicates with MongoDB using a [Mongoose](https://mongoosejs.com/) Schema via a REST API built with [Express](https://expressjs.com/). API endpoints illustrate a mapping of [CRUD](https://www.mongodb.com/docs/manual/crud/) operations onto [HTTP Verbs](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods). Data storage is handled on the frontend via a set of functions: `createData`, `readData`, `updateData`, `deleteData`, as per the the acronym [CRUD](https://developer.mozilla.org/en-US/docs/Glossary/CRUD). To keep things modular, functions are imported from a separate [module](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules), `crud.js`

## Setup
In order to use this demo you will need to add a connection string for MongoDB to your NodeJS Environment. For example, you might add something like the following to your `.env` file:
```
MONGODB=mongodb+srv://dbuser:password@cluster0.abc123.mongodb.net/myDatabase
```