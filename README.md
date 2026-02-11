 (cd "$(git rev-parse --show-toplevel)" && git apply --3way <<'EOF' 
diff --git a/README.md b/README.md
index 6fc2301e29c5056b38e194a45359804f5cebc17d..80f202f410d33e4e0d3040cce51f1fff7db5d263 100644
--- a/README.md
+++ b/README.md
@@ -1,11 +1,204 @@
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
+A lightweight chatbot backend project with two server implementations:
+- **Flask + OpenAI API** (`app.py`) for AI chat responses.
+- **Express + MongoDB** (`server.js`) for chat history storage and simple page routing.
+
+> This repository currently contains backend/server scaffolding and configuration files. Frontend template/static assets referenced in code (for example `templates/` and `static/`) are not present in this snapshot.
+
+## Tech Stack
+
+- **Python**: Flask, flask-cors, OpenAI Python SDK (`requirements.txt`, `app.py`)
+- **Node.js**: Express, MongoDB Node driver, Tailwind CSS, Nodemon (`package.json`, `server.js`)
+- **Database**: MongoDB Atlas (used by `server.js`)
+
+## Installation
+
+### Prerequisites
+
+- Python 3.9+
+- Node.js 18+ and npm
+- MongoDB Atlas cluster (or compatible MongoDB deployment)
+- OpenAI API key
+
+### 1) Clone and install dependencies
+
+```bash
+git clone <your-repo-url>
+cd coding-chatbot
+npm install
+python -m pip install -r requirements.txt
+```
+
+## Configuration
+
+The current code uses hardcoded secrets in source files. Move these to environment variables before production use.
+
+### Recommended environment variables
+
+| Variable | Used by | Default | Purpose |
+|---|---|---|---|
+| `PORT` | `server.js` | `3001` | Express server port |
+| `MONGODB_URI` | `server.js` | _none_ | MongoDB connection string |
+| `MONGODB_DB_NAME` | `server.js` | `Chat_History` | MongoDB database name |
+| `MONGODB_COLLECTION` | `server.js` | `chat` | MongoDB collection name |
+| `OPENAI_API_KEY` | `app.py` | _none_ | OpenAI API key |
+| `FLASK_APP` | Flask CLI | `app` (in `.flaskenv`) | Flask entrypoint |
+| `FLASK_DEBUG` | Flask CLI | `1` (in `.flaskenv`) | Flask debug mode |
+
+## Build and Run
+
+### Option A: Run Flask chatbot API
+
+```bash
+python app.py
+```
+
+- Starts Flask app (default: `http://127.0.0.1:5000/`)
+- `POST /api` sends user input to OpenAI Chat Completions
+
+### Option B: Run Express + MongoDB service
+
+```bash
+npm run dev
+```
+
+- Starts Express server with Nodemon (default: `http://localhost:3001/login`)
+- Provides MongoDB-backed endpoints for storing/retrieving chat data
+
+### Optional: Tailwind watcher
+
+```bash
+npm run start
+```
+
+- Runs Tailwind CLI in watch mode to compile CSS from `./static/src/input.css` to `./static/css/main.css`
+
+## Usage Guide
+
+### Flask workflow (`app.py`)
+
+1. Start server: `python app.py`
+2. Send message:
+   ```bash
+   curl -X POST http://127.0.0.1:5000/api \
+     -H "Content-Type: application/json" \
+     -d '{"message":"Hello"}'
+   ```
+3. Receive model response payload.
+
+### Express workflow (`server.js`)
+
+1. Start server: `npm run dev`
+2. Create chat record:
+   ```bash
+   curl -X POST http://localhost:3001/addData \
+     -H "Content-Type: application/json" \
+     -d '{"inputData":{"name":"session-1","text":"hello"}}'
+   ```
+3. Fetch records:
+   ```bash
+   curl -X POST http://localhost:3001/getData
+   ```
+4. Delete one record by `inputData.name`:
+   ```bash
+   curl -X POST http://localhost:3001/removeData \
+     -H "Content-Type: application/json" \
+     -d '{"inputData":{"name":"session-1"}}'
+   ```
+
+## Project Structure
+
+```text
+.
+├── app.py                # Flask app with /api endpoint using OpenAI
+├── server.js             # Express app with MongoDB CRUD endpoints
+├── package.json          # Node scripts + dependencies
+├── requirements.txt      # Python dependencies
+├── tailwind.config.js    # Tailwind content scan config
+├── .flaskenv             # Flask environment defaults
+└── README.md
+```
+
+## API Reference
+
+### Flask API (`app.py`)
+
+- `GET /`
+  - Renders `templates/index.html` (template file expected but not present in repo snapshot).
+- `POST /api`
+  - Request JSON: `{ "message": "<user input>" }`
+  - Behavior: calls OpenAI `ChatCompletion.create(...)` with `gpt-3.5-turbo`.
+
+### Express API (`server.js`)
+
+- `POST /addData`
+  - Request JSON: `{ "inputData": <object> }`
+  - Inserts `{ data: inputData }` into MongoDB.
+- `POST /getData`
+  - Returns all chat documents from collection.
+- `POST /removeData`
+  - Request JSON: `{ "inputData": { "name": "..." } }`
+  - Deletes one document matching `data.name`.
+- `GET /login`, `GET /main`, `GET /logout`
+  - Basic page routing/session flow hooks.
+
+## Testing
+
+This repository currently has no implemented automated test suite.
+
+Suggested baseline checks:
+
+```bash
+python -m py_compile app.py
+node --check server.js
+```
+
+## Linting / Formatting / CI-CD
+
+- No linting or formatting config is currently present (no ESLint/Prettier/Black configs in repo root).
+- No CI/CD workflows are currently present in this snapshot.
+
+Recommended additions:
+- JavaScript: ESLint + Prettier
+- Python: Black + Ruff
+- CI: GitHub Actions for lint + tests
+
+## Contributing
+
+Until a formal policy is added, use this lightweight flow:
+
+1. Create a feature branch from `main`:
+   ```bash
+   git checkout -b feat/<short-description>
+   ```
+2. Keep commits focused and descriptive.
+3. Open a PR with:
+   - What changed
+   - Why it changed
+   - How you tested
+4. Request review before merge.
+
+## License
+
+No explicit license file is currently included. Add a `LICENSE` file (for example MIT) to clarify usage terms.
+
+## Authors / Acknowledgments
+
+- Current author metadata in `package.json` is empty.
+- Add maintainers/contributors here once confirmed.
+
+## Known Issues
+
+- Secrets (MongoDB URI and OpenAI key) are currently hardcoded in source.
+- Frontend files referenced by Flask/Express routes are missing from this repository snapshot.
+- `npm test` is a placeholder script and intentionally exits with an error.
+- OpenAI call path in `app.py` uses older API style and may require migration depending on SDK version.
+
+## Future Enhancements
+
+- Move all secrets to environment variables (`.env` + config loader).
+- Add robust error handling and HTTP status codes for all endpoints.
+- Add schema validation for request payloads.
+- Add unit/integration tests and CI pipeline.
+- Unify Flask/Express architecture or document when each service should be used.
 
EOF
)
