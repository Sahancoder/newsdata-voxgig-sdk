# newsdata-voxgig-sdk

An open-source SDK for the [NewsData.io](https://newsdata.io) API, generated
using the [Voxgig SDK Generator](https://github.com/voxgig).

This project is part of the Voxgig SDK mini-task assignment.

---

## What is this project?

This repository contains an SDK for the NewsData.io REST API, generated from
the official OpenAPI specification using the Voxgig SDK Generator.

It is a library project — no frontend, backend, or database is required.

License: **MIT**

---

## Quick Start

> Prerequisites: Node.js and npm installed.

```bash
# 1. Clone the repository
git clone https://github.com/oxysusl/newsdata-voxgig-sdk.git
cd newsdata-voxgig-sdk

# 2. Install dependencies
npm install

# 3. Configure your API key (see API Key Setup below)
cp .env.example .env
# Edit .env and add your real NewsData API key

# 4. Build the SDK
npm run build

# 5. Run the example
node examples/basic.js
```

> **Note:** Build and example commands will be confirmed after SDK generation.
> Do not treat this section as verified until tests are actually run.

---

## API Key Setup

1. Register at [https://newsdata.io](https://newsdata.io) to obtain a free API key.

2. Copy the environment template:

   ```bash
   cp .env.example .env
   ```

3. Open `.env` and set your real key:

   ```
   NEWSDATA_API_KEY=YOUR_API_KEY_HERE
   ```

4. The `.env` file is listed in `.gitignore` and must **never** be committed.

> **Security:** Never hard-code your API key in source files, examples,
> or documentation. Use environment variables only.

---

## Installation

```bash
npm install
```

---

## Example

> The example below is a placeholder. It will be updated with the actual
> generated SDK interface after the Voxgig generator has been run.

```js
// examples/basic.js
require('dotenv').config();

const { NewsDataClient } = require('./src');

const client = new NewsDataClient({
  apiKey: process.env.NEWSDATA_API_KEY,
});

client.getLatestNews({ q: 'technology' })
  .then(response => console.log(response))
  .catch(err => console.error('Error:', err.message));
```

---

## Testing

> All test statuses are `NOT RUN` until tests are actually executed.
> See [docs/TESTING.md](docs/TESTING.md) and [docs/TEST-CASES.md](docs/TEST-CASES.md) for details.

| Level | Command | Status |
|---|---|---|
| Unit | `npm test` | NOT RUN |
| Component | TBD | NOT RUN |
| Integration | TBD | NOT RUN |
| Build | `npm run build` | NOT RUN |

---

## Documentation

| Document | Description |
|---|---|
| [REQUIREMENTS.md](docs/REQUIREMENTS.md) | Project and assignment requirements |
| [TASKS.md](docs/TASKS.md) | Full task checklist |
| [ARCHITECTURE.md](docs/ARCHITECTURE.md) | System architecture overview |
| [IMPLEMENTATION.md](docs/IMPLEMENTATION.md) | Implementation guide |
| [TESTING.md](docs/TESTING.md) | Testing strategy |
| [TEST-CASES.md](docs/TEST-CASES.md) | Detailed QA test cases |
| [SECURITY.md](docs/SECURITY.md) | Security guidelines |
| [DEPLOYMENT.md](docs/DEPLOYMENT.md) | Release and distribution |
| [DEVELOPER-EXPERIENCE.md](docs/DEVELOPER-EXPERIENCE.md) | Voxgig generator DX report |

---

## Security

- Real API keys must never be committed.
- Use `.env` locally (it is `.gitignore`d).
- Commit only `.env.example` with an empty placeholder value.
- See [docs/SECURITY.md](docs/SECURITY.md) for the full policy.

---

## License

[MIT License](LICENSE)
