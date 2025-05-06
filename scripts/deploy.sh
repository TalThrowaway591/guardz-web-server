#!/bin/bash

# transpile TS to JS 
npm run build

# rm old copy of static assets
rm -rf ./public

# copy client assets to project
cp -r ../guardz-app/build/client ./public  

# build docker image, modify to fit linux machines 
docker build -t talarbatov/guardz-web-server:1.0.0 --platform linux/amd64 .

# push to remote docker hub
docker push talarbatov/guardz-web-server:1.0.0

# ---

## pull docker image in remote

# sudo docker pull talarbatov/guardz-web-server:1.0.0

# docker run -it --network api-net -p 80:80 -e POSTGRESQL_HOST=my-postgres talarbatov/guardz-web-server:1.0.0

##  for remote run

# sudo docker run -it --network api-net -p 80:80 -e POSTGRESQL_HOST=my-postgres talarbatov/guardz-web-server:1.0.0

## init postgres container

