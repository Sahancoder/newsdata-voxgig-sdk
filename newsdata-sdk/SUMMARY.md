# NewsData.io API

REST API returning JSON. Every read endpoint is `GET`; the two state-changing WebSocket management endpoints use `POST` (`/1/websocket/register`) and `DELETE` (`/1/websocket/delete`). All parameters, including for `POST`/`DELETE`, are sent in the query string, never in a request body. **Authentication.** Send your API key either as the `apikey` query-string parameter or as the `X-ACCESS-KEY` HTTP header. One of the two is required. Parameter names are case-insensitive. **Credits &amp; rate limits.** Each call costs a fixed number of API credits (`/latest`, `/news`, `/crypto`, `/market`, `/sources` = 1 credit; `/archive` = 5 credits; `/count`, `/crypto/count`, `/market/count` = 50 credits; the `/websocket/*` management endpoints are free, instead, each article delivered over the WebSocket stream costs 1 credit per connected device). The response headers `X-RateLimit-Remaining` and `X-API-Limit-Remaining` report your remaining request budget and remaining API credits. **Plan-based limits.** Some limits depend on your plan: the number of values allowed per filter (default 5), the maximum search-query length (default 100 characters), and the page size (default 50 on paid plans, 10 on the free plan). **Filter compatibility.** Some filters cannot be combined: use at most one of `q`, `qInTitle`, `qInMeta`; at most one of `domain`, `domainurl`, `excludedomain`; `country` or `excludecountry`; `category` or `excludecategory`; `language` or `excludelanguage`; `timeframe` or `from_date`/`to_date`. The `id` and `url` filters must be used alone. **Pagination.** With the default sort (`pubdatedesc` / `pubdateasc`), pass the `nextPage` value from the previous response as the `page` parameter. With `sort=relevancy|source|fetched_at`, pass a page number instead (up to 10,000 results in total). **Real-time WebSocket stream.** Plans with WebSocket access can register standing queries with `/1/websocket/register` and receive matching articles the moment they are collected by connecting to `wss://ws.newsdata.io/ws/event`. See the *Websocket* endpoints.

## Start here

This guide introduces the API, the client libraries, and the companion tools in this repository. Start with the API capabilities, choose a client for your application, and use the linked reference when you need exact request and response details.

The selected API surface contains 11 entities and 13 HTTP routes. There are 1 SDK targets.

An entity groups related API operations. An operation can have several routes with different inputs or authentication requirements. The SDK exposes the entity and its operations using the conventions of the selected language.

## What the API provides

### Archive

Results: Success.

SDK operations: `list`.

Key fields to recognise:

- `ai_org`: AI-extracted organization names. Plan-specific (Corporate).
- `ai_region`: AI-extracted regions, for example &#39;paris,france&#39;. Plan-specific (Corporate).
- `ai_summary`: AI-generated article summary. Plan-specific.
- `ai_tag`: AI-classified topic tags. Plan-specific (Professional/Corporate).
- `article_id`: Unique article identifier (32 characters).

### Count

Results: Success. The shape depends on the `interval` parameter.

SDK operations: `load`.

### Crypto

Results: Success.

SDK operations: `list`.

Key fields to recognise:

- `ai_tag`: AI-classified topic tags (crypto-specific tag set). Plan-specific (Professional/Corporate).
- `article_id`: Unique article identifier (32 characters).
- `coin`: Cryptocurrencies the article mentions, by ticker symbol.
- `content`: Full article text. Plan-specific (full-content access). Returned as `null` when `full_content=0`.
- `creator`: Article author(s).

### Latest

Results: Success.

SDK operations: `list`.

Key fields to recognise:

- `ai_org`: AI-extracted organization names. Plan-specific (Corporate).
- `ai_region`: AI-extracted regions, for example &#39;paris,france&#39;. Plan-specific (Corporate).
- `ai_summary`: AI-generated article summary. Plan-specific.
- `ai_tag`: AI-classified topic tags. Plan-specific (Professional/Corporate).
- `article_id`: Unique article identifier (32 characters).

### Market

Results: Success.

SDK operations: `list`.

Key fields to recognise:

- `ai_org`: AI-extracted organization names. Plan-specific (Corporate).
- `ai_summary`: AI-generated article summary. Plan-specific.
- `ai_tag`: AI-classified topic tags. Plan-specific (Professional/Corporate).
- `article_id`: Unique article identifier (32 characters).
- `content`: Full article text. Plan-specific (full-content access). Returned as `null` when `full_content=0`.

### New

Results: Success.

SDK operations: `list`.

Key fields to recognise:

- `ai_org`: AI-extracted organization names. Plan-specific (Corporate).
- `ai_region`: AI-extracted regions, for example &#39;paris,france&#39;. Plan-specific (Corporate).
- `ai_summary`: AI-generated article summary. Plan-specific.
- `ai_tag`: AI-classified topic tags. Plan-specific (Professional/Corporate).
- `article_id`: Unique article identifier (32 characters).

### Source

Results: Success.

SDK operations: `list`.

Key fields to recognise:

- `category`: Categories the source covers.
- `country`: Countries the source covers.
- `description`: Short description of the source.
- `icon`: Source icon URL.
- `id`: Source id. Use it with the `domain` parameter on the news endpoints.

### Websocket

SDK operations: `load`.

### WebsocketDeleteEnvelope

Results: Registration deleted.

SDK operations: `remove`.

### WebsocketQueryListEnvelope

Results: Success.

SDK operations: `load`.

Key fields to recognise:

- `totalQueries`: Number of active registrations for this API key.

### WebsocketRegisterEnvelope

Results: Query registered.

SDK operations: `create`.

Key fields to recognise:

- `message`: Human-readable confirmation.
- `registration_id`: Identifier of the registered query (32 characters). Use it to connect to the WebSocket stream and to delete the registration.

### Route map

Use this map to locate a capability. Consult the entity reference before supplying request data; routes for the same operation can require different fields.

| Entity | SDK operation | HTTP route | Authentication |
| --- | --- | --- | --- |
| Archive | `list` | `GET /1/archive` | Required |
| Count | `load` | `GET /1/count` | Required |
| Count | `load` | `GET /1/market/count` | Required |
| Count | `load` | `GET /1/crypto/count` | Required |
| Crypto | `list` | `GET /1/crypto` | Required |
| Latest | `list` | `GET /1/latest` | Required |
| Market | `list` | `GET /1/market` | Required |
| New | `list` | `GET /1/news` | Required |
| Source | `list` | `GET /1/sources` | Required |
| Websocket | `load` | `GET /ws/event` | Required |
| WebsocketDeleteEnvelope | `remove` | `DELETE /1/websocket/delete` | Required |
| WebsocketQueryListEnvelope | `load` | `GET /1/websocket/fetch` | Required |
| WebsocketRegisterEnvelope | `create` | `POST /1/websocket/register` | Required |

## Connect to the API

- Production: `https://newsdata.io/api`

The default credential is sent in the `apikey` query.

API key passed as a query-string parameter.

API key passed as an HTTP header. Used when `apikey` is not supplied in the query string.

Check authentication for the route you plan to call. A route that declares no authentication can be used without credentials; this does not change the requirements of other routes. Keep credentials in environment variables or a configured secret provider, and keep them out of source control and logs.

## Make a first request

1. Choose the API server and an operation that matches your task.
2. Check the operation’s required input and authentication. Use values valid for your account and environment.
3. Send one request and inspect the returned data before adding retries, concurrency, or a larger batch.

For an SDK call, install or build the chosen client, create a client instance with its documented configuration, and call the required entity operation. Language references describe the argument shape, asynchronous behaviour, and returned values.

## Choose an SDK

Choose the language already used by your application or service. The clients represent the same API model, while package setup, naming, and return types follow each language. Check the selected client’s reference and tests before integrating it into an existing application.

| Client | Repository directory | Distribution |
| --- | --- | --- |
| TypeScript | `ts/` | Build from source |

Build-from-source entries are not marked as published in the project model. Follow the build instructions in that target’s README, then consume the resulting package using your language’s local dependency mechanism. Published entries give the installation command recorded for that client.

## Operational features

Features supply behaviour around API calls, such as request handling, diagnostics, or local testing. Inclusion in this project does not mean a feature is enabled at runtime. Check the selected SDK’s supported features and configuration defaults, then enable the behaviour your application needs.

- `test`: In-memory mock transport for testing without a live server

Start with the default client configuration. Add request limits and diagnostics as needed, test error paths, and review retry behaviour before using operations that change data. A retry can repeat an operation unless the API provides a suitable guarantee.

## Continue with the documentation

- Follow the first-call guide for the setup sequence.
- Read the authentication guide before using protected routes.
- Use the API reference for request schemas, response formats, and status codes.
- Check the chosen SDK or companion tool reference for its configuration and supported operations.

