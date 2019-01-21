## Overview

This applications displays products which are hosted inside of a MySQL database. The data is hosted visa a Spring MVC rest service. The data was loaded into the MySQL database via this CSV uploaded wit this project.

## Technologies

- React (Javascript)
- Spring (Java)
- MySQL
- Docker
- Docker Compose

## Setup

There is a fiar amount of setup needed to get the development environment ready for this application. You must have node, npm, docker, gradle, java, and probably a few other things I am overlooking. 

### Pull down the code

```
git clone origin <project url here>
```

### Compile Spring

```
cd interview-app/products-api
gradlew clean build
```

### Compile React code

```
cd interview-app/react-ui
npm install
npm build
```

### Compose

```
cd interview-app
docker-compose up --build
```

### Manual Load the Database

Docker Compose handles downloading and running the MySQL database. Once the compose script successfuly executes, a volume will be created on your computer to house the data permenatly. The data load is a one-time step. I used a CSV import in MySQL Workbench.


## Connection Details

Ui runs at http://localhost:9000/

Rest API runs at http://localhost:8080/products/

Database runs at http://localhost:3306
- username : user
- password : password
