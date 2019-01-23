This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## Overview

This is a React application that display a list of products and their details. It has been set up to run using docker and ran alongside a Spring REST service and MySQL database. 

## Project Technologies

- React
- Redux
- React Helmet
- Docker
- Docker Compose
- Babyl
- Jest
- Enzyme
- Setup for AWS, but not leveraged.
- npm
- node

## Setup

There are 2 ways of executing this project, npm and docker. For local development purposes, the rest call should be mocked out to avoid having everythign up and running to test. I simply hard coded them into redux until I was ready to integrate.

### NPM

For local development it is simpler to use npm to execute the code. React has very nice "hot reload" capabilities which assist heavily with prototyping.

Commands to run the application are as follows.

```bash
npm install
npm start
```

This assumes you have the project pulled down and npm / node setup correctly

### Docker

For integration / production bound deploys docker should be leveraged. This allows for a consistent execution environment.

Commands to run the application are as follows.

```bash
docker-compose up --build
```

This assumes you have docker setup correctly.


### Disclosure

Take the above setup steps with a grain of salt because I did not redo them for the sake of this readme. Setting up your environment for git,node,npm, etc will take a fair amount of time.