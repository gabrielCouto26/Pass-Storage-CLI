SHELL=terminal
COMMAND=$1
KEY=$2
VALUE=$3

echo "SHELL $SHELL"
echo "COMMAND $COMMAND"
echo "KEY $KEY"
echo "VALUE $VALUE"


python -u src/main.py $SHELL $COMMAND $KEY $VALUE