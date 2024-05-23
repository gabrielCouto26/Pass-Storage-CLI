#!bin/bash

SHELL='docker'
COMMAND=$1
KEY=$2
VALUE=$3

docker run --rm \
    -e SHELL=$SHELL \
    -e COMMAND=$COMMAND \
    -e KEY=$KEY \
    -e VALUE=$VALUE \
    -v ./storage.json:/usr/src/app/storage.json \
    -v /usr/local/pass-database/:/usr/local/pass-database/ \
    pass-storage:latest