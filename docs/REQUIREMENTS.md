# Project Requirements

## 1. Project Overview

This project is part of the Voxgig SDK mini-task.

The objective is to select an API that is not already represented in the
Voxgig open-source SDK catalogue and generate an open-source SDK using the
Voxgig SDK Generator.

Selected API:

**NewsData.io**

Planned repository:

**newsdata-voxgig-sdk**

License:

**MIT License**

---

## 2. Assignment Requirements

The project must:

1. Use an API that is not already available in the Voxgig SDK catalogue.
2. Use the Voxgig SDK Generator.
3. Be published in the developer's own GitHub or GitLab account.
4. Be open source.
5. Use the MIT License.
6. Be tested using a real API key where appropriate.
7. Include observations about the Voxgig SDK Generator developer experience.
8. Document bugs, problems, confusing behavior, and suggested improvements.
9. Keep human work time-boxed to approximately 30 minutes.

---

## 3. API Selection

Selected API:

NewsData.io

Reason for selection:

- SaaS/API-based service
- API-key authentication available
- Suitable for SDK generation
- OpenAPI specification available
- No matching NewsData SDK was found during the Voxgig catalogue search

The catalogue should be checked again immediately before final submission.

---

## 4. Functional Requirements

### FR-001 — SDK Generation

The SDK must be generated using the Voxgig SDK Generator.

### FR-002 — API Authentication

The SDK must support the authentication mechanism required by NewsData.io.

### FR-003 — API Request

The SDK should successfully execute at least one supported API request.

### FR-004 — API Response

The SDK should expose the returned API response to the developer.

### FR-005 — Error Handling

The SDK should provide usable behavior when an API request fails.

### FR-006 — Example

The repository should contain a minimal usage example.

---

## 5. Non-Functional Requirements

### NFR-001 — Security

Real API keys must never be committed to Git.

### NFR-002 — Documentation

The project must contain enough documentation for another developer to
understand and test the SDK.

### NFR-003 — Maintainability

Custom changes should be kept separate from generated code where possible.

### NFR-004 — Reproducibility

The generation process and commands should be documented.

### NFR-005 — Testing

The project should include appropriate unit, component, integration,
system, security, and user acceptance testing.

---

## 6. Constraints

- Human effort should be time-boxed.
- Voxgig SDK Generator must be used.
- Generator problems should be documented rather than hidden.
- The project should not be unnecessarily over-engineered.

---

## 7. Out of Scope

The following are not required unless later requested:

- Web frontend
- Mobile application
- Backend server
- Database
- Docker infrastructure
- Kubernetes
- User authentication system
- Admin dashboard
- Cloud deployment
- npm publication

This project is primarily an SDK/library project.

---

## 8. Deliverables

Expected deliverables:

- Public GitHub/GitLab repository
- Generated SDK
- MIT License
- README
- Example
- Tests
- Technical documentation
- Developer-experience report

---

## 9. Completion Criteria

The project can be considered ready for submission when:

- SDK generation has been attempted using Voxgig
- Generated output has been reviewed
- Build status is known
- At least one real API workflow has been tested where possible
- Test results are documented honestly
- README is complete
- MIT License exists
- Developer-experience observations are documented
- No credentials are present in the repository
