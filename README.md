





-#Setup of MongoDB
-
-1. Go to official website of mongoDB.
-2. Login and create a cluster.
-3. get the cluster connection string.
-4. Download MongoDBCompass, and connect with the connection string .
-5. Create a Database named as Chat_History.
-6. create a new collection named as chat.
-
-#Well Done!
-the project is done now
+# Coding Chatbot
+
+A dual-backend chatbot project:
+- **Flask + OpenAI** for AI response generation
+- **Express + MongoDB** for chat history storage
+
+---
+
+## Tech Stack
+
+- **Python**: Flask, flask-cors, openai
+- **Node.js**: Express, MongoDB driver, Tailwind CSS, Nodemon
+- **Database**: MongoDB Atlas
+
+---
+
+## Prerequisites
+
+- Python 3.9+
+- Node.js 18+
+- npm
+- MongoDB connection string
+- OpenAI API key
+
+---
+
+## Installation
+
+```bash
+git clone <your-repo-url>
+cd coding-chatbot
+npm install
+python -m pip install -r requirements.txt
+```
+
+---
+
+## Configuration
+
+> Current code contains hardcoded credentials. Move secrets to environment variables before production.
+
+Recommended `.env` values:
+
+```env
+PORT=3001
+MONGODB_URI=<your_mongodb_uri>
+MONGODB_DB_NAME=Chat_History
+MONGODB_COLLECTION=chat
+OPENAI_API_KEY=<your_openai_api_key>
+FLASK_APP=app
+FLASK_DEBUG=1
+```
+
+---
+
+## Run the Project
+
+### 1) Flask chatbot API
+
+```bash
+python app.py
+```
+
+Default URL: `http://127.0.0.1:5000`
+
+### 2) Express + MongoDB service
+
+```bash
+npm run dev
+```
+
+Default URL: `http://localhost:3001/login`
+
+### 3) Tailwind watcher (optional)
+
+```bash
+npm run start
+```
+
+---
+
+## Usage
+
+### Flask API
+
+#### POST `/api`
+Request:
+```json
+{ "message": "Hello" }
+```
+
+Example:
+```bash
+curl -X POST http://127.0.0.1:5000/api \
+  -H "Content-Type: application/json" \
+  -d '{"message":"Hello"}'
+```
+
+---
+
+### Express API
+
+#### POST `/addData`
+Insert one chat entry.
+
+Example:
+```bash
+curl -X POST http://localhost:3001/addData \
+  -H "Content-Type: application/json" \
+  -d '{"inputData":{"name":"session-1","text":"hello"}}'
+```
+
+#### POST `/getData`
+Get all chat entries.
+
+Example:
+```bash
+curl -X POST http://localhost:3001/getData
+```
+
+#### POST `/removeData`
+Delete one chat entry by `inputData.name`.
+
+Example:
+```bash
+curl -X POST http://localhost:3001/removeData \
+  -H "Content-Type: application/json" \
+  -d '{"inputData":{"name":"session-1"}}'
+```
+
+---
+
+## Project Structure
+
+```text
+.
+├── app.py               # Flask app (/api)
+├── server.js            # Express app (MongoDB endpoints)
+├── package.json         # Node scripts and dependencies
+├── requirements.txt     # Python dependencies
+├── tailwind.config.js   # Tailwind config
+├── .flaskenv            # Flask defaults
+└── README.md
+```
+
+---
+
+## Build / Test / Checks
+
+No formal automated test suite is included yet.
+
+Basic validation:
+
+```bash
+python -m py_compile app.py
+node --check server.js
+```
+
+---
+
+## Linting / Formatting / CI-CD
+
+Currently not configured in this repository.
+
+Recommended additions:
+- ESLint + Prettier (Node)
+- Ruff + Black (Python)
+- GitHub Actions workflow for lint/test
+
+---
+
+## Contributing
+
+1. Create a branch:
+   ```bash
+   git checkout -b feat/<short-description>
+   ```
+2. Commit focused changes.
+3. Open a PR with:
+   - what changed
+   - why it changed
+   - how it was tested
+
+---
+
+## License
+
+No `LICENSE` file is currently included. Add one (for example MIT) before publishing.
+
+---
+
+## Authors / Acknowledgments
+
+Update this section with maintainer and contributor names.
+
+---
+
+## Known Issues
+
+- OpenAI key and MongoDB URI are hardcoded in code.
+- Referenced frontend files (`templates/`, `static/`) are not present in this snapshot.
+- `npm test` is a placeholder and currently fails by design.
+
+---
+
+## Future Enhancements
+
+- Move secrets to `.env`
+- Add request validation and robust error handling
+- Add unit/integration tests
+- Add CI pipeline
+- Consolidate architecture (or document when to use Flask vs Express)
