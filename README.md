# nest-angular

A fullstack JavaScript project, using technologies from the modern stack, such as:

* [NestJS](https://github.com/nestjs/nest) - a JS backend framework providing architecture out of the box with a syntax similar to Angular
* [Angular](https://github.com/angular/angular) - a JS frontend framework created by Google
* [Angular Universal](https://github.com/angular/universal) - Angular Server Side Rendering - prerendered crawlable pages
* [RxJS](https://github.com/Reactive-Extensions/RxJS) - reactive extensions for JavaScript
* [Webpack](https://github.com/webpack/webpack) - the ultimate JS bundler - used for the server code since Angular has it under the hood
* [MongoDB](https://github.com/mongodb/mongo) - a NoSQL database
* [Mongoose](https://github.com/Automattic/mongoose) - MongoDB object modeling designed to work in an asynchronous environment
* [TypeScript](https://github.com/Microsoft/TypeScript) - superset of JS which compiles to JS, providing compile-time type checking
* [Passport](https://github.com/jaredhanson/passport) - a popular library used to implement JavaScript authentication
* [jsonwebtoken](https://github.com/auth0/node-jsonwebtoken) - a JavaScript json web tokens implementation by auth0

## Running the project

These instructions should be sufficient for one to get the project going on their local machine

### Cloning the github repository

To clone the project, run
```
git clone https://github.com/bojidaryovchev/nest-angular.git
```

### Installing the dependencies

To install the dependencies after you've cloned the project, go to its root folder and run
```
npm install
```

### Building the Angular application

Before you start the server, you need to build the Angular application. To do so, run
```
npm run build:universal
```

### Starting the server

Once you have the Angular app built, you can start the server by running
```
npm run watch:server
```
Notice that the server uses MongoDB so we need to have a MongoDB instance running so the server can connect to it

### Alternative commands

If you need to work on the frontend and backend parts at the same time, you can run
```
npm run watch
```
Then, you can go to the Angular dev server at port 4200 and test server requests (to port 1337), we got a proxy to the backend

If you only need to work on the frontend, you can run
```
npm run watch:client
```

Alternatively, if you only need to work on the backend, you can run
```
npm run watch:server
```
Keeping in mind that you need to have the Angular app built and a mongodb connection established
