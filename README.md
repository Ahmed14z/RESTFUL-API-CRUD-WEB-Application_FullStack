# Setting up Your Flask-React Project

Welcome to the documentation for setting up Docker on your machine for your Flask-React project! Follow these steps to get your project up and running with Docker.

## Project Overview

This project uses a Flask backend to serve data to a React frontend. Docker will be used to containerize both the frontend and backend for easy deployment.

## Installation

1. First, download the project files and open them in VS Code.

2. In the terminal, navigate to the downloaded project files using the `cd` command.

3. Type `npm install` in the terminal to install the backend dependencies.

4. Navigate to the `my-app` folder using the `cd` command.

5. Type `npm install` in the terminal to install the frontend dependencies.

## Docker Setup

### Windows

1. If you're using Windows, open PowerShell.

2. Navigate to the location of your project files using the `cd` command.

3. Type `docker pull ahmedmansy/finalrestapi:latest` in the terminal to download the Docker image.

4. Type `docker compose up --build flask_app` in the terminal to build and run the backend.

### Other Operating Systems

1. Open Docker Desktop or the terminal if you're using other operating systems.

2. Navigate to the location of your project files using the `cd` command.

3. Type `docker pull ahmedmansy/finalrestapi:latest` in the terminal to download the Docker image.

4. Type `docker compose up --build flask_app` in the terminal to build and run the backend.

## Start the Website

1. In the VS Code terminal, type `npm start` to start the website.

Congratulations! You have successfully set up Docker for your project and can now start building and testing your application. 

Please note that if you encounter any issues during the installation or setup process, refer to the Docker documentation or seek help from the Docker community. Happy coding!
