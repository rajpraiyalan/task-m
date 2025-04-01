# Task management

## Overview
Simple Task management API using `node` with `expressjs` and DynamoDB

## Prerequisites
Ensure you have the following installed before running the application:
- Node.js (Version 22.x)
- Access to DynamoDB or locally hosted ([Dockerfile](dynamodb-compose.yml))

## Installation

1. Clone the repository
    ```
    git clone https://github.com/rajpraiyalan/task-m
    cd task-m
    ```
2. Install dependencies:
    ```
    npm install
    ```

## Configuration
1. Copy the .env.example file and rename it to .env:
    ```
    cp .env.example .env
    ```
2. Update the variables as needed

## Usage
### Running in Development Mode
```
npm run dev
```
### Running in Production Mode
```
npm run build
npm start
```

## Testing

Run the test suite using:
```
npm test
```

Note: Test are configured to use locally hosted DynamoDB. 
You can use [DynamoDB Dockerfile](dynamodb-compose.yml) to run DynamoDB locally using docker.
```
docker compose -f dynamodb-compose.yml up -d
```

## Deployment

1. Build the application
    ```
    npm run build
    ```
2. Start the application using a process manager like PM2 or Docker
   ```
   pm2 start dist/src/server.js --name task-m
   ```
   or
   ```
   docker compose up -d
   ```