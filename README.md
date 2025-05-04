# Guardz Application - Web Server

Demo Application by Tal Arbetov

## Startup

- To run the application, run `npm start`, an option to watch the process for changes
via `nodemon` is available by running `npm run start:watch`

- The source code is written in TS, in case you want to transpile your changes, run
`npm run build`, a watcher for the build process is available with `npm run build:watch`

- There are many different utility bash scripts available at `/scripts` folder in the root,
one notable script is `build-deploy.sh` which copies the client buiild (assuming the repo is a sibling of the directory), transpiles the project, and builds & deploys the docker image to the remote registry.


