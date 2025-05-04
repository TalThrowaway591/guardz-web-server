#!/bin/bash

curl \
    -X POST \
    -H "Content-Type: application/json" \
    -d '{"title":"hello", "body":"world"}' \
    http://localhost/api/entries
