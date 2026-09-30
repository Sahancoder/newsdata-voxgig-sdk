# Voxgig SDK Generator — Developer Experience Report

## 1. Purpose

This document records my experience using the Voxgig SDK Generator.

The goal is to provide honest observations about:

- Setup
- Documentation
- Generator usability
- Generated output
- Errors
- Developer experience
- Potential improvements

---

## 2. Environment

Operating System:

Windows 11 (64-bit)

Node.js:

v22.14.0

npm:

11.7.0

Voxgig SDK Generator (`@voxgig/sdkgen`):

4.32.1 (installed via `npx -y @voxgig/sdkgen`)

Voxgig Create SDK (`@voxgig/create-sdkgen`):

0.30.4 (used internally by `npm create @voxgig/sdkgen@latest`)

Target API:

NewsData.io

OpenAPI Version:

OpenAPI 3.1.0 (served at https://newsdata.io/openapi.json)

---

## 3. Time

Requested human-work time box:

30 minutes

Actual human time:

TBD — to be recorded by Richard at submission.

Do not fabricate this value.

---

## 4. API Selection

Selected API:

NewsData.io

Reason:

- Free tier available with API key registration
- Official OpenAPI 3.1.0 specification published at https://newsdata.io/openapi.json
- API-key authentication supported (query param `apikey` or header `X-ACCESS-KEY`)
- No NewsData SDK found in the voxgig-sdk GitHub organization (searched `newsdata`, `news-data`, `newsdataio` — zero results returned)

Catalogue verification:

Searched https://github.com/voxgig-sdk?q=newsdata — no results found.
Searched https://github.com/voxgig-sdk?q=news-data — no results found.
Web search for `site:github.com/voxgig-sdk newsdata` — no results found.

Conclusion at time of verification: NewsData.io is NOT already in the voxgig-sdk catalogue.

Re-check immediately before submission to confirm this is still true.

---

## 5. Getting Started Experience

### Documentation

The Voxgig sdkgen GitHub repository (https://github.com/voxgig/sdkgen) provides
a README but it is not easily readable via raw HTTP fetch (returns HTML not markdown).
The npm package page (https://www.npmjs.com/package/@voxgig/sdkgen) returned HTTP 403.
Documentation discoverability is poor — the first step was unclear without trial and error.

### Installation

Installed via `npx -y @voxgig/sdkgen` — works without a global install.
No pre-installation step documented or required.

### CLI

Two CLI surfaces discovered:

1. `voxgig-sdkgen` — the main sdkgen tool (actions: `target add <lang>`, `feature add <name>`, `doctor`)
2. `npm create @voxgig/sdkgen@latest` — the project creation tool, calls `create-sdkgen` internally

Neither surface makes it immediately obvious which one to use first.

The help output (`voxgig-sdkgen --help`) is concise and accurate once found.

### OpenAPI Input

The `create-sdkgen` command accepts the OpenAPI spec as a positional argument:
```
npm create @voxgig/sdkgen@latest -- <name> <output-name> <path-to-openapi.json>
```
This argument format is not documented in the README that was accessible.
It had to be discovered by trial and error.

---

## 6. SDK Generation

Command used:

```
npm create @voxgig/sdkgen@latest -- newsdata newsdata ./newsdata-openapi.json
```

Result:

PARTIAL FAILURE — See Issues section.

The generator successfully created the `.sdk/` scaffold directory including:
- `newsdata-sdk/.sdk/model/` — project model (aontu format)
- `newsdata-sdk/.sdk/def/` — OpenAPI input copy
- `newsdata-sdk/.sdk/src/` — scaffold TypeScript source
- `newsdata-sdk/.sdk/test/` — test scaffolding
- `newsdata-sdk/.sdk/build/` — build scripts

However, the generator then tried to run `npm install` inside the generated
folder using a child process. This child process FAILED on Windows with:

```
Voxgig Create SDK Error: Failed to start npm: spawn npm ENOENT
```

Generation time:

Approximately 10 seconds until failure.

Warnings:

Multiple `EBADENGINE` warnings during the generator's own install phase:

```
npm warn EBADENGINE Unsupported engine {
  package: 'aontu@0.76.0',
  required: { node: '>=24' },
  current: { node: 'v22.14.0', npm: '11.7.0' }
}
```

Similar warnings appeared for: `@tabnas/jsonic`, `@tabnas/json`, `@tabnas/parser`,
`@tabnas/yaml`, `@tabnas/abnf`, `@tabnas/bnf`, and others.

This means: the Voxgig generator and its dependencies formally require **Node.js >=24**,
but the widely available LTS version at time of testing is **Node.js v22.14.0**.
The generator was not blocked by this (it proceeded), but no compatibility warning
was shown to the user before the tool was invoked.

Errors:

```
Voxgig Create SDK Error: Failed to start npm: spawn npm ENOENT
```

Full error sequence:
1. Generator started and scaffolded files.
2. Generator called `npm install` in the generated folder.
3. The subprocess could not find `npm` in its PATH (Windows child process PATH issue).
4. Generator aborted with the above error.
5. Exit code: 1.

---

## 7. Generated Code

Evaluate:

### Structure

The generated `.sdk/` directory uses a structured internal layout:
- `model/` — `.aontu` format config files (Voxgig's own DSL, not standard JSON/YAML)
- `def/` — stores the input OpenAPI spec copy
- `src/` — TypeScript source scaffold
- `test/` — test fixture files
- `build/` — generator build scripts
- `tm/` — template files

This structure is opaque to a new user without documentation. The `.aontu` DSL is
unfamiliar and not widely documented outside of the Voxgig ecosystem.

### Naming

File naming is consistent but opaque (`entity-index.aontu`, `edition-index.aontu`).
Relationship between files is not self-evident.

### Readability

Not yet fully assessed — generation did not complete.
The `.aontu` format will likely be unfamiliar to most developers.

### Documentation

No inline documentation was generated in the source files observed.

### Authentication

Not yet assessed — language target was not added.
The OpenAPI spec defines two auth schemes (`ApiKeyQuery`, `ApiKeyHeader`).
Whether the generator correctly converts these is unknown.

### Ease of First API Call

Not assessable — generation did not complete successfully on first attempt.

---

## 8. What Worked Well

To be completed after successful SDK generation and build.

1. The generator does scaffold a structured project from an OpenAPI spec.
2. The `--help` output is concise and accurate.
3. The OpenAPI spec at https://newsdata.io/openapi.json is directly consumable.

---

## 9. Problems Encountered

### Issue 1

Title:

`spawn npm ENOENT` — Generator child process cannot find npm on Windows

Steps to reproduce:

1. Install Node.js v22 LTS on Windows.
2. Run: `npm create @voxgig/sdkgen@latest -- newsdata newsdata ./newsdata-openapi.json`
3. Observe that the generator scaffolds files then attempts `npm install` in the created folder.
4. The subprocess fails with `spawn npm ENOENT`.

Expected:

Generator completes installation of the created SDK scaffold.

Actual:

```
Voxgig Create SDK Error: Failed to start npm: spawn npm ENOENT
```

Error:

`spawn npm ENOENT` — the child process cannot locate the `npm` executable in PATH.
This is a known Windows issue where child processes spawned by Node.js do not always
inherit the parent's PATH correctly, especially when npm is invoked as `npm` rather than
`npm.cmd`.

Workaround:

Manually run `npm install` in the generated `.sdk/` folder after the generator fails:
```
cd newsdata-sdk\.sdk
npm install
```
Then proceed with `voxgig-sdkgen target add typescript` manually.

Suggested improvement:

The Voxgig generator should use `npm.cmd` (the Windows batch wrapper) instead of `npm`
when spawning child processes on Windows. Alternatively, detect the platform and use
the appropriate executable name, or use `cross-spawn` or a similar library.

---

### Issue 2

Title:

Generator requires Node.js >=24 but does not warn the user before installation

Steps to reproduce:

1. Use Node.js v22 LTS (current LTS at time of testing).
2. Run the Voxgig generator.
3. Observe `EBADENGINE` warnings for over 20 packages.

Expected:

Either: (a) support Node.js v22 LTS, or (b) display a clear warning before running
that Node.js 24 is required.

Actual:

The generator installs and runs without blocking, but emits EBADENGINE warnings.
The user is not informed that Node.js 24 is required before they start.

Error:

```
npm warn EBADENGINE Unsupported engine {
  package: 'aontu@0.76.0',
  required: { node: '>=24' },
  current: { node: 'v22.14.0', npm: '11.7.0' }
}
```

Workaround:

Install Node.js 24 or use nvm to switch to Node.js 24 before running the generator.

Suggested improvement:

The generator's README and CLI should explicitly document the minimum Node.js version.
A pre-flight check that fails loudly (before installation) when the Node version is
too low would prevent wasted time.

---

### Issue 3

Title:

CLI entry points are not clearly documented — two overlapping tools with unclear relationship

Steps to reproduce:

1. Search for how to use the Voxgig SDK Generator.
2. Find `@voxgig/sdkgen` (the existing CLI) and `npm create @voxgig/sdkgen` (the create tool).
3. Attempt to understand which to use first and in what order.

Expected:

A clear, step-by-step getting started guide.

Actual:

- `voxgig-sdkgen` is the post-creation management CLI.
- `npm create @voxgig/sdkgen` is the project scaffolding tool.
- The order of use, and the relationship between them, is not explained.
- The README on GitHub was not readable via standard HTTP tools (returns raw HTML).
- The npm package page returns HTTP 403.

Workaround:

Run `voxgig-sdkgen --help` and `npm create @voxgig/sdkgen --help` separately
to discover the interface by trial and error.

Suggested improvement:

A single, clear "Getting Started" page documenting:
1. Prerequisites (Node.js version)
2. The scaffolding command
3. The language target add command
4. How to build
5. A minimal SDK usage example

---

### Issue 4

Title:

OpenAPI specification is not parsed — `api-info.aontu` and `def/*.yml` remain empty

Steps to reproduce:

1. Run `npm create @voxgig/sdkgen@latest -- newsdata newsdata ./newsdata-openapi.json`
2. After workaround (manual npm install), inspect `def/newsdata-openapi3.yml`.
3. Inspect `model/api/api-info.aontu`.

Expected:

`def/newsdata-openapi3.yml` should contain the converted OpenAPI definition.
`model/api/api-info.aontu` should be populated with API metadata derived from the OpenAPI spec.

Actual:

`def/newsdata-openapi3.yml` contains only:
```
# OpenAPI Definition
```

`model/api/api-info.aontu` contains only:
```
# API Information
```

Both files are placeholders — the actual OpenAPI content was never processed.

Consequence:

Running `npm run generate` (the model build step) immediately fails:
```
[aontu/multisource_not_found]: source not found: api/api-info.aontu
```
The generator created a broken scaffold that cannot build without manual population.

Error:

```
Voxgig SDK Generation Error: Error: ENOENT: no such file or directory, open 'api/api-info.aontu'
```

Workaround:

Manually populate `model/api/api-info.aontu` and `def/newsdata-openapi3.yml`
from the input OpenAPI spec. This requires knowledge of the `.aontu` DSL and
the expected model format — which is not documented.

Suggested improvement:

The `create-sdkgen` command should parse the provided OpenAPI file and populate
the model files during the scaffold step. If the OpenAPI file cannot be parsed,
the error should be reported immediately with a clear message, not silently skipped.

---

### Issue 5

Title:

`target add typescript` fails — the correct name is `ts` but it is not discoverable

Steps to reproduce:

1. Run `voxgig-sdkgen target add typescript` (the natural language choice for TypeScript).
2. Observe error.

Expected:

TypeScript language target is added.

Actual:

```
Voxgig SDK Generation Error: Error: Target definition not found:
node_modules\@voxgig\sdkgen\project\.sdk\model\target\typescript.aontu
```

The correct command is `voxgig-sdkgen target add ts` (the abbreviated name).

Error:

`Target definition not found: typescript.aontu`

Workaround:

Use `voxgig-sdkgen target add ts` instead of `voxgig-sdkgen target add typescript`.

Suggested improvement:

The CLI should list available target names when an invalid target is given:
```
voxgig-sdkgen target add typescript
Error: Target 'typescript' not found.
Available targets: c, clojure, cpp, csharp, elixir, go, go-cli, go-mcp,
                   java, js, kotlin, lua, ocaml, perl, php, py, py-data,
                   rb, rust, scala, swift, ts, zig
```

---

## 10. Documentation Feedback

Based on actual use:

- **Was the first step obvious?** No. There are two overlapping CLI tools. The relationship between `npm create @voxgig/sdkgen` (scaffolding) and `voxgig-sdkgen` (management) is unclear without prior knowledge.
- **Was the OpenAPI input format obvious?** No. The positional argument format for the create command had to be discovered by trial and error.
- **Were examples current?** Cannot confirm — the README was not accessible in a human-readable form.
- **Could a new developer reach first generation quickly?** No. A new developer would encounter Node.js version confusion, unclear CLI interface, and then a Windows-specific `spawn npm ENOENT` error — all before any SDK code is produced.
- **Were error messages explained?** No. `spawn npm ENOENT` gives no guidance on how to fix the issue. The engine version warnings appear after the fact.

---

## 11. Generator Feedback

Based on actual use:

- **CLI usability:** Moderate. `--help` output is concise. But the two-tool split is confusing. Target names are not obvious (`ts` not `typescript`).
- **Generation speed:** Fast — scaffolding completes in seconds. The bottleneck is the subsequent npm install.
- **Error messages:** Poor. `spawn npm ENOENT` is a raw Node.js error with no Voxgig-level guidance. `target add typescript` gives no list of valid targets.
- **Generated structure:** The `.sdk/` internal folder uses `.aontu` files, an unfamiliar DSL with no inline explanation.
- **Authentication handling:** Not assessed — model build failed (Issue 4).
- **Generated examples:** Not generated — model build failed before TypeScript code was produced.
- **Build experience:** FAILED — `npm run generate` fails with `multisource_not_found` because the OpenAPI spec was not parsed into the model.

---

## 12. Suggested Improvements

Based on actual experience:

Suggestion 1:

Fix Windows `spawn npm ENOENT` — use `npm.cmd` or `cross-spawn` when spawning npm child processes on Windows. This is a blocker for Windows developers.

Suggestion 2:

Document the Node.js minimum version (>=24) prominently in the README and on the npm package page. Add a pre-flight version check to the CLI that fails with a clear, actionable message before the tool attempts anything.

Suggestion 3:

Publish a single, linear "Getting Started" guide that covers:
1. Node.js version requirement
2. Which command to run first (scaffolding)
3. Which command to run second (target add)
4. How to build
5. A minimal working example

The current discovery process requires trial and error, which costs developer time and erodes confidence in the tool.

---

## 13. Final Result

SDK scaffold created:

PARTIAL — `.sdk/` structure created, OpenAPI spec NOT parsed into model (Issue 4)

Manual npm install in .sdk/ (workaround for Issue 1):

PASS — 101 packages installed, exit 0

Language target added (ts):

PASS — `voxgig-sdkgen target add ts` succeeded

Model build (`npm run generate`):

FAIL — `multisource_not_found: api/api-info.aontu` (consequence of Issue 4)

TypeScript source code generated:

FAIL — blocked by model build failure

Build (tsc compile of generated SDK):

NOT RUN — blocked by model build failure

Real API test:

NOT RUN — blocked by build failure

Documentation:

IN PROGRESS

Submission ready:

NO — SDK generation is blocked by Issue 4 (OpenAPI not parsed)

---

## 14. Final Notes

This report intentionally distinguishes actual observations from planned
testing.

No test or generator behavior should be reported as successful unless it
was actually executed and verified.
