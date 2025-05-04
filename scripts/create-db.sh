docker stop my-postgres

docker rm my-postgres

docker run --name my-postgres -e POSTGRES_PASSWORD=password --network api-net -d -p 5432:5432 postgres

docker exec it my-postgres bash

psql -U postgres

create database guardz;

\c guardz