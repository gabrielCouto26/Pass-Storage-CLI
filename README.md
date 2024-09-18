# Pass Storage CLI

## Description

I always see myself forgetting my daily use passwords

I'm tired of reseting it or making a boring path to it's browser storage

Therefore, **this project meant to be a simplifier shortcut when forgetting your passwords**

However, **it's not advised to use it as your primary password storage**

## Requeriments

- Make sure to have Node v22.7.0 or higher installed
- This project was meant for Linux. Other OS won't have the same behavior

## Getting Started

- Install packages

```bash
$ npm install
```

- Store a base64 hash in PASS_STORAGE_KEY environment varibale. Save it in you rc file to make it permant. This will be your encription key

```bash
$ export PASS_STORAGE_KEY='your_base64_key'
```

- It's advised to create an alias to simplify execution and create a true CLI experience. Add the code below to your rc file

```bash
alias passenc='node path/to/module/dist/index.js'
```

- Initiallize CLI requirements

```bash
$ npm run init
```

## Usage

This CLI was developed with aim of getting and setting passwords stored with simple keys/labels of your choice

You can set the key and it's password to be stored in one single command, as well as you can get a stored password with it's key in one other single command

There are four available commands

- Show all passwords

```bash
$ passenc all
```

- Get password from a given key

```bash
$ passenc get [options] <key>
```

- Set password to a given key

```bash
$ passenc set <key> <password>
```

- Remove password from a given key

```bash
$ passenc rm <key>
```

## Help

You can get more help by running

```bash
$ passenc
```

or more specific commands details

```bash
$ passenc help [command]
```
