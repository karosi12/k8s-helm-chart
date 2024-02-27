#### 1. Application setup steps

This simple nodejs app that returns the contents of the  Azure Blob Storage in JSON format. App starts on port 3000.

###### to prepare the app for startup, installing all the dependencies

    npm install

###### to start the application

    npm start or node app/server.js

###### to build the image from Dockerfile

    docker build -t azure-blob-storage:1.0 .

###### to start the built docker image in detach/background mode

    docker run -d -p 3000:3000 --env-file .env azure-blob-storage:1.0

###### to build an archive file

    npm pack
