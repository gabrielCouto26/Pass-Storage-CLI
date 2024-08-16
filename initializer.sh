#!/bin/bash

echo "Initializing..."

# Checking PASS_STORAGE_KEY environemtn variable
if [ -z "${PASS_STORAGE_KEY}" ]; then
  echo "PASS_STORAGE_KEY environment variable not set."
  # TODO: melhorar isso aqui
  echo "Make sure to set PASS_STORAGE_KEY and try again."
  exit 1
fi

# Checking node_modules
if [ ! -d node_modules ]; then
  echo "No node_modules found. Installing packages..."
  if ! npm install &>/dev/null; then
    echo "Error installing packages."
    exit 1
  fi
  echo "Done."
  echo
fi

# Compiling TypeScript
if [ ! -d ./dist ]; then
  echo "Compiling code..."
  if ! tsc &>/dev/null; then
    echo "Error compiling TypeScript."
    exit 1
  fi
  echo "Done."
  echo
fi

echo "Everything OK."
echo

# Setting alias
echo "Recommendation:
Create an alias for better usage.
Add the code below to your rc file and use it as a true CLI.
``alias passenc='node path/to/module/dist/index.js'``"

echo
