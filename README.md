# Coding Chatbot

A lightweight chatbot backend project with two server implementations:

-   Flask + OpenAI (app.py) --- handles AI chat responses.
-   Express + MongoDB (server.js) --- stores chat history and serves
    routes.

------------------------------------------------------------------------

## Tech Stack

-   Python: Flask, flask-cors, OpenAI SDK
-   Node.js: Express, MongoDB driver
-   Database: MongoDB Atlas

------------------------------------------------------------------------

## Installation

### Prerequisites

-   Python 3.9+
-   Node.js 18+
-   MongoDB Atlas
-   OpenAI API key

### Install

``` bash
git clone <your-repo-url>
cd <repo-folder>
npm install
python -m pip install -r requirements.txt
```

------------------------------------------------------------------------

## Environment Variables

Create a .env file:

    MONGODB_URI=your_mongodb_uri
    OPENAI_API_KEY=your_openai_key
    PORT=3001

------------------------------------------------------------------------

## Run

### Flask

``` bash
python app.py
```

### Express

``` bash
npm run dev
```

------------------------------------------------------------------------

## Project Structure

    app.py
    server.js
    package.json
    requirements.txt
    README.md

------------------------------------------------------------------------

## Future Improvements

-   Move secrets to environment variables
-   Add validation and error handling
-   Add tests and CI/CD
