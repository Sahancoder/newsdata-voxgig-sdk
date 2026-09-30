# Security Guidelines

## 1. Credential Policy

Real API credentials must never be committed to this repository.

Sensitive values include:

- API keys
- Access tokens
- Passwords
- Private keys
- Authentication headers
- Personal credentials

---

## 2. Local Environment

Use:

```
.env
```

Example:

```
NEWSDATA_API_KEY=<real-key>
```

The `.env` file must remain local.

---

## 3. Public Environment Template

Commit:

```
.env.example
```

Content:

```
NEWSDATA_API_KEY=
```

Never add a real value.

---

## 4. Git Ignore

`.gitignore` must include:

```
.env
.env.*
!.env.example
```

---

## 5. Source Code

Never write:

```js
const apiKey = "REAL_API_KEY";
```

Instead use environment-based configuration.

---

## 6. Documentation

README and documentation must use placeholders such as:

```
YOUR_API_KEY
```

Never use real credentials in documentation.

---

## 7. Logging

Never log:

- API key
- Authorization header
- complete sensitive configuration

---

## 8. Before Push

Before every public push:

1. Run `git status`.
2. Review staged files.
3. Search for secrets.
4. Check `.env` is absent.
5. Review examples.
6. Review test files.
7. Review documentation.

---

## 9. Accidental Exposure

If a credential is committed:

1. Treat it as compromised.
2. Revoke it immediately.
3. Generate a new key.
4. Remove the exposed value from Git history where necessary.
5. Verify public repository/history.
6. Use only the replacement credential.

Deleting the key from the latest source file alone is not sufficient if
the secret remains in Git history.
