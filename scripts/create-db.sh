#!/bin/bash

# script to create a postgres container, init db, tables and seed data

echo "Running migration script..."

docker stop pg-container

docker rm pg-container 

docker run --name pg-container -e POSTGRES_PASSWORD=password --network api-net -d -p 5432:5432 postgres


# Wait for Postgres to be ready
echo "Waiting for Postgres to start..."
until docker exec pg-container pg_isready -U postgres > /dev/null 2>&1; do
  sleep 1
done

echo "Postgres container started."

# Run the SQL command
docker exec -i pg-container psql -U postgres -a < ./scripts/migrate-db.sql

echo "Done."