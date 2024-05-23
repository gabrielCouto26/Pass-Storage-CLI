#!bin/bash


SHELL=$1
COMMAND=$2
KEY=$3
VALUE=$4

if [ $SHELL = '-d' ]; then
    bash docker-run.sh $COMMAND $KEY $VALUE
elif [ $SHELL = '-t' ]; then
    bash terminal-run.sh $COMMAND $KEY $VALUE
fi