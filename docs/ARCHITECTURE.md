# Architecture

## 1. Overview

This repository contains an SDK generated from the NewsData API
specification using the Voxgig SDK Generator.

This is a library project.

It does not require a frontend, backend application, or database.

---

## 2. Generation Architecture

```
OpenAPI Specification
        |
        v
Voxgig SDK Generator
        |
        v
Generated SDK Source
        |
        +---- Client
        |
        +---- API Operations
        |
        +---- Models
        |
        +---- Authentication
        |
        v
Buildable SDK
```

---

## 3. Runtime Architecture

```
Developer Application
        |
        v
Generated SDK
        |
        v
Authentication Configuration
        |
        v
HTTPS Request
        |
        v
NewsData API
        |
        v
JSON Response
        |
        v
Generated SDK
        |
        v
Developer Application
```

---

## 4. Security Boundary

The API key belongs to the application using the SDK.

It must not be embedded in the SDK source code.

Local development:

```
.env
  |
  v
Environment Variable
  |
  v
SDK Configuration
```

The `.env` file must not be committed.

---

## 5. Testing Boundaries

### Unit

Individual SDK behavior without real network dependency.

### Component

SDK client/service modules.

### Integration

Generated SDK communicating with the real NewsData API.

### System

Complete developer workflow.

### UAT

A developer following the README and successfully using the SDK.

---

## 6. Design Principles

The project follows:

- Minimal complexity
- Secure credential handling
- Reproducible generation
- Clear documentation
- Separation of generated and custom code
- Testability
- Honest reporting of generator behavior
