# Coding Chatbot

A lightweight chatbot backend project with two server implementations:

- **Flask + OpenAI API** (`app.py`) — handles AI chat responses.  
- **Express + MongoDB** (`server.js`) — stores chat history and provides simple page routing.

> Note: This repository snapshot contains backend/server scaffolding and configuration files. Frontend templates/static assets referenced in code (for example `templates/` and `static/`) are not included.

# Tech Stack

- **Python**: Flask, flask-cors, OpenAI Python SDK (`requirements.txt`, `app.py`)  
- **Node.js**: Express, MongoDB Node driver, Tailwind CSS, Nodemon (`package.json`, `server.js`)  
- **Database**: MongoDB Atlas (used by `server.js`)

# Prerequisites

- Python 3.9+  
- Node.js 18+ and npm  
- MongoDB Atlas cluster (or another MongoDB deployment)  
- OpenAI API key

# Installation

1. Clone the repo and install dependencies:

```bash
git clone <your-repo-url>
cd coding-chatbot
npm install
python -m pip install -r requirements.txt
