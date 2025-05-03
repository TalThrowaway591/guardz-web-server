#!/bin/bash

curl \
    -X POST \
    -H "Content-Type: application/json" \
    -d '{"title":"hello", "body":"world"}' \
    http://localhost:3000/api/entries
