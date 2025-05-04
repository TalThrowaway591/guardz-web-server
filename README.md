# Guardz Application - Web Server

Demo Application by Tal Arbetov

## Startup

- To run the application, run `npm start`, an option to watch the process for changes
via `nodemon` is available by running `npm run start:watch`

- The source code is written in TS, in case you want to transpile your changes, run
`npm run build`, a watcher for the build process is available with `npm run build:watch`

- There are many different utility bash scripts available at `/scripts` folder in the root,
one notable script is `build-deploy.sh` which copies the client buiild (assuming the repo is a sibling of the directory), transpiles the project, and builds & deploys the docker image to the remote registry.

## About

- This web-server is built on-top of the Express web engine

- written in Typescript for type safety and extra functionality regarding the heavy use of OOP.

- For the fun of it, I tried designing the project according to the principles established in
the book "Clean Architecture" By Uncle Bob, the web-server is highly modular, and the source code is
responsible for any business logic is decoupled from the module responsible for the web-server itself.
Both these modules are decoupled from the data-persistancy layer.

- I've implemented two strategies for data persistancy, one via an RDBMS (in this case PostgresQL), the second is in-memory for development testing. we can switch between these options fairly easily with a couple rows of code.

- This is by no-means a production-ready project, but it does highlight many principles regarding clean code and architecture I'd like to talk about in-person.



