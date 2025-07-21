# Test App 

This project is a Node.js authentication app built by following the [Node.js Auth Tutorial (JWT)](https://www.youtube.com/playlist?list=PL4cUxeGkcC9iqqESP8335DA5cRFp8loyp). 

The app has been **dockerized** to simplify deployment as test-app in testing workflows. 
[Related CI Project: playwright-tests](https://github.com/gomczak/playwright-tests).

## Features

- User registration and login with JWT authentication
- Secure password storage using hashing
- Protected API routes accessible only with valid JWT
- Built using Express.js and MongoDB
- Complete Docker support for both app and database

## Getting Started

### Prerequisites

- [Docker](https://www.docker.com/) installed on your system

### Running with Docker

#### 1. Build & Run Containers

You can start everything using Docker Compose:

```bash
docker compose up --build
```

This command will:

- Build and start the Node.js app container
- Start a MongoDB container
- Use the environment variables defined in `.env`

#### 2. Stopping Containers

To stop all running containers:


```bash
docker stop $(docker ps -a -q)
```

#### 3. Manual Setup (Without Compose)

If you prefer manual control:

1. Start MongoDB:

```bash
docker run --rm -d \
  --name mongodb \
  -p 27017:27017 \
  --env-file ./.env \
  --network test-app \
  mongo
```

2. Start the App:

```bash
docker run --rm --name test-app-container \
  -p 3000:3000 \
  --env-file ./.env \
  --network test-app \
  test-app
```
