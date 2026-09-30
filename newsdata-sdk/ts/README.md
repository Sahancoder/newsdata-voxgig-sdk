# Newsdata TypeScript SDK



The TypeScript SDK for the Newsdata API — a type-safe, entity-oriented client with full async/await support.

The API is exposed as capitalised, semantic **Entities** — e.g.
`client.Archive()` — each with a small set of operations (`list`, `load`, `create`, `remove`)
instead of raw URL paths and query parameters. This keeps the surface
predictable and low-friction for both humans and AI agents.


## Install
This package is not yet published to npm. Install it from the GitHub
release tag (`ts/vX.Y.Z`, see [Releases](https://github.com/voxgig-sdk/newsdata-sdk/releases)), or from a
clone, which carries the compiled `dist/`:

```bash
git clone https://github.com/voxgig-sdk/newsdata-sdk
npm install ./newsdata-sdk/ts
```


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```ts
import { NewsdataSDK } from '@voxgig-sdk/newsdata-sdk'

const client = new NewsdataSDK({
  apikey: process.env.NEWSDATA_APIKEY,
})
```

### 2. List archive records

`list()` resolves to an array of Archive ENTITIES — every operation
resolves to entities, not raw records. Iterate them directly, and call
`.data()` on one for the record it holds:

```ts
const archives = await client.Archive().list()

for (const archive of archives) {
  console.log(archive)
}
```


## Error handling

Entity operations reject on failure, so wrap them in `try` / `catch`:

```ts
try {
  const cryptos = await client.Crypto().list()
  console.log(cryptos)
} catch (err) {
  console.error('list failed:', err)
}
```

The low-level `direct()` method does **not** throw — it returns the
value or an `Error`, so check the result before using it:

```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example_id' },
})

if (result instanceof Error) {
  throw result
}
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example' },
})

if (result instanceof Error) {
  throw result
}
if (result.ok) {
  console.log(result.status)  // 200
  console.log(result.data)    // response body
}
```

### Prepare a request without sending it

```ts
const fetchdef = await client.prepare({
  path: '/api/resource/{id}',
  method: 'DELETE',
  params: { id: 'example' },
})

// Inspect before sending
console.log(fetchdef.url)
console.log(fetchdef.method)
console.log(fetchdef.headers)
```

### Use test mode

Create a mock client for unit testing — no server required:

```ts
const client = NewsdataSDK.test()

const crypto = await client.Crypto().list()
// crypto is the entity, populated with mock response data
// — call crypto.data() for the record itself
console.log(crypto)
```

You can also use the instance method:

```ts
const client = new NewsdataSDK({ apikey: '...' })
const testClient = client.tester()
```

### Retain entity state across calls

Entity instances remember their last match and data:

```ts
const entity = client.Crypto()

// First call runs the operation and stores its result
await entity.list()

// Subsequent calls reuse the stored state
const data = entity.data()
console.log(data)
```

### Add custom middleware

Pass features via the `extend` option:

```ts
const logger = {
  hooks: {
    PreRequest: (ctx: any) => {
      console.log('Requesting:', ctx.spec.method, ctx.spec.path)
    },
    PreResponse: (ctx: any) => {
      console.log('Status:', ctx.out.request?.status)
    },
  },
}

const client = new NewsdataSDK({
  apikey: '...',
  extend: [logger],
})
```

### Run live tests

Create a `.env.local` file at the project root:

```
NEWSDATA_TEST_LIVE=TRUE
NEWSDATA_APIKEY=<your-key>
```

Then run:

```bash
cd ts && npm test
```

Live entity tests continue independent operations after errors and attempt
supported cleanup. Their final result reports failures and missing prerequisites
after the remaining work completes. The model and test inputs determine which
API operations the generated scenarios cover.


## Reference

### NewsdataSDK

#### Constructor

```ts
new NewsdataSDK(options?: {
  apikey?: string
  base?: string
  prefix?: string
  suffix?: string
  feature?: Record<string, { active: boolean }>
  extend?: Feature[]
})
```

| Option | Type | Description |
| --- | --- | --- |
| `apikey` | `string` | API key for authentication. |
| `base` | `string` | Base URL of the API server. |
| `prefix` | `string` | URL path prefix prepended to all requests. |
| `suffix` | `string` | URL path suffix appended to all requests. |
| `feature` | `object` | Feature activation flags (e.g. `{ test: { active: true } }`). |
| `extend` | `Feature[]` | Additional feature instances to load. |

#### Methods

| Method | Returns | Description |
| --- | --- | --- |
| `options()` | `object` | Deep copy of current SDK options. |
| `utility()` | `Utility` | Deep copy of the SDK utility object. |
| `prepare(fetchargs?)` | `Promise<FetchDef>` | Build an HTTP request definition without sending it. |
| `direct(fetchargs?)` | `Promise<DirectResult>` | Build and send an HTTP request. |
| `Archive(data?)` | `ArchiveEntity` | Create an Archive entity instance. |
| `Count(data?)` | `CountEntity` | Create a Count entity instance. |
| `Crypto(data?)` | `CryptoEntity` | Create a Crypto entity instance. |
| `Latest(data?)` | `LatestEntity` | Create a Latest entity instance. |
| `Market(data?)` | `MarketEntity` | Create a Market entity instance. |
| `New(data?)` | `NewEntity` | Create a New entity instance. |
| `Source(data?)` | `SourceEntity` | Create a Source entity instance. |
| `Websocket(data?)` | `WebsocketEntity` | Create a Websocket entity instance. |
| `WebsocketDeleteEnvelope(data?)` | `WebsocketDeleteEnvelopeEntity` | Create a WebsocketDeleteEnvelope entity instance. |
| `WebsocketQueryListEnvelope(data?)` | `WebsocketQueryListEnvelopeEntity` | Create a WebsocketQueryListEnvelope entity instance. |
| `WebsocketRegisterEnvelope(data?)` | `WebsocketRegisterEnvelopeEntity` | Create a WebsocketRegisterEnvelope entity instance. |
| `tester(testopts?, sdkopts?)` | `NewsdataSDK` | Create a test-mode client instance. |

#### Static methods

| Method | Returns | Description |
| --- | --- | --- |
| `NewsdataSDK.test(testopts?, sdkopts?)` | `NewsdataSDK` | Create a test-mode client. |

### Entity interface

All entities share the same interface.

#### Methods

| Method | Signature | Description |
| --- | --- | --- |
| `load` | `load(reqmatch?, ctrl?): Promise<Entity>` | Load a single entity by match criteria. |
| `list` | `list(reqmatch?, ctrl?): Promise<Entity[]>` | List entities matching the criteria. |
| `create` | `create(reqdata?, ctrl?): Promise<Entity>` | Create a new entity. |
| `remove` | `remove(reqmatch?, ctrl?): Promise<void>` | Remove an entity. |
| `data` | `data(data?: Partial<Entity>): Entity` | Get or set entity data. |
| `match` | `match(match?: Partial<Entity>): Partial<Entity>` | Get or set entity match criteria. |
| `make` | `make(): Entity` | Create a new instance with the same options. |
| `client` | `client(): NewsdataSDK` | Return the parent SDK client. |
| `entopts` | `entopts(): object` | Return a copy of the entity options. |

#### Return values

Entity operations resolve to the entity data directly — there is no
result envelope:

- `load` and `create` resolve to a single entity object.
- `list` resolves to an **array** of entity objects (iterate it directly;
  there is no `.data` and no `.ok`).
- `remove` resolves to `void`.

On a failed request these methods **throw**, so wrap calls in
`try`/`catch` to handle errors. Only `direct()` returns the result
envelope described below.

### DirectResult shape

The `direct()` method returns:

```ts
{
  ok: boolean
  status: number
  headers: object
  data: any
}
```

On error, `ok` is `false` and an `err` property contains the error.

### FetchDef shape

The `prepare()` method returns:

```ts
{
  url: string
  method: string
  headers: Record<string, string>
  body?: any
}
```

### Entities

#### Archive

| Field | Description |
| --- | --- |
| `ai_org` | AI-extracted organization names. |
| `ai_region` | AI-extracted regions, e.g. |
| `ai_summary` | AI-generated article summary. |
| `ai_tag` | AI-classified topic tags. |
| `article_id` | Unique article identifier (32 characters). |
| `category` | Article categories. |
| `content` | Full article text. |
| `country` | Country names, e.g. |
| `creator` | Article author(s). |
| `datatype` | Content type, e.g. |
| `description` | Short article description. |
| `duplicate` | Whether the article is a duplicate of another article. |
| `fetched_at` | When the article was collected, `YYYY-MM-DD HH:MM:SS`. |
| `image_url` | Article image URL. |
| `keywords` | Article keywords. |
| `language` | Language name, e.g. |
| `link` | Article URL. |
| `pubDate` | Publish date, `YYYY-MM-DD HH:MM:SS`, in the requested `timezone`. |
| `pubDateTZ` | Timezone of the dates in this article. |
| `sentiment` | Overall sentiment: positive, neutral, or negative. |
| `sentiment_stats` | Sentiment percentage breakdown. |
| `source_icon` | Source icon URL. |
| `source_id` | Source id (usable with the `domain` filter). |
| `source_name` | Source display name. |
| `source_priority` | Source ranking (lower = higher-ranked). |
| `source_url` | Source website URL. |
| `title` | Article title. |
| `video_url` | Article video URL. |

Operations: list.

API path: `/1/archive`

#### Count

| Field | Description |
| --- | --- |
| `results` |  |
| `status` |  |

Operations: load.

API path: `/1/count`

#### Crypto

| Field | Description |
| --- | --- |
| `ai_tag` | AI-classified topic tags (crypto-specific tag set). |
| `article_id` | Unique article identifier (32 characters). |
| `coin` | Cryptocurrencies the article mentions, by ticker symbol. |
| `content` | Full article text. |
| `creator` | Article author(s). |
| `description` | Short article description. |
| `duplicate` | Whether the article is a duplicate of another article. |
| `fetched_at` | When the article was collected, `YYYY-MM-DD HH:MM:SS`. |
| `image_url` | Article image URL. |
| `keywords` | Article keywords. |
| `language` | Language name, e.g. |
| `link` | Article URL. |
| `pubDate` | Publish date, `YYYY-MM-DD HH:MM:SS`, in the requested `timezone`. |
| `pubDateTZ` | Timezone of the dates in this article. |
| `sentiment` | Overall sentiment: positive, neutral, or negative. |
| `sentiment_stats` | Sentiment percentage breakdown. |
| `source_icon` | Source icon URL. |
| `source_id` | Source id (usable with the `domain` filter). |
| `source_name` | Source display name. |
| `source_priority` | Source ranking (lower = higher-ranked). |
| `source_url` | Source website URL. |
| `title` | Article title. |
| `video_url` | Article video URL. |

Operations: list.

API path: `/1/crypto`

#### Latest

| Field | Description |
| --- | --- |
| `ai_org` | AI-extracted organization names. |
| `ai_region` | AI-extracted regions, e.g. |
| `ai_summary` | AI-generated article summary. |
| `ai_tag` | AI-classified topic tags. |
| `article_id` | Unique article identifier (32 characters). |
| `category` | Article categories. |
| `content` | Full article text. |
| `country` | Country names, e.g. |
| `creator` | Article author(s). |
| `datatype` | Content type, e.g. |
| `description` | Short article description. |
| `duplicate` | Whether the article is a duplicate of another article. |
| `fetched_at` | When the article was collected, `YYYY-MM-DD HH:MM:SS`. |
| `image_url` | Article image URL. |
| `keywords` | Article keywords. |
| `language` | Language name, e.g. |
| `link` | Article URL. |
| `pubDate` | Publish date, `YYYY-MM-DD HH:MM:SS`, in the requested `timezone`. |
| `pubDateTZ` | Timezone of the dates in this article. |
| `sentiment` | Overall sentiment: positive, neutral, or negative. |
| `sentiment_stats` | Sentiment percentage breakdown. |
| `source_icon` | Source icon URL. |
| `source_id` | Source id (usable with the `domain` filter). |
| `source_name` | Source display name. |
| `source_priority` | Source ranking (lower = higher-ranked). |
| `source_url` | Source website URL. |
| `title` | Article title. |
| `video_url` | Article video URL. |

Operations: list.

API path: `/1/latest`

#### Market

| Field | Description |
| --- | --- |
| `ai_org` | AI-extracted organization names. |
| `ai_summary` | AI-generated article summary. |
| `ai_tag` | AI-classified topic tags. |
| `article_id` | Unique article identifier (32 characters). |
| `content` | Full article text. |
| `country` | Country names, e.g. |
| `creator` | Article author(s). |
| `datatype` | Content type, e.g. |
| `description` | Short article description. |
| `duplicate` | Whether the article is a duplicate of another article. |
| `fetched_at` | When the article was collected, `YYYY-MM-DD HH:MM:SS`. |
| `image_url` | Article image URL. |
| `keywords` | Article keywords. |
| `language` | Language name, e.g. |
| `link` | Article URL. |
| `market_id` | Unique market identifiers for the tickers in `symbol` — the values accepted by the `market_id` filter. |
| `pubDate` | Publish date, `YYYY-MM-DD HH:MM:SS`, in the requested `timezone`. |
| `pubDateTZ` | Timezone of the dates in this article. |
| `sentiment` | Overall sentiment: positive, neutral, or negative. |
| `sentiment_stats` | Sentiment percentage breakdown. |
| `source_icon` | Source icon URL. |
| `source_id` | Source id (usable with the `domain` filter). |
| `source_name` | Source display name. |
| `source_priority` | Source ranking (lower = higher-ranked). |
| `source_url` | Source website URL. |
| `symbol` | Stock ticker symbols the article mentions. |
| `title` | Article title. |
| `video_url` | Article video URL. |

Operations: list.

API path: `/1/market`

#### New

| Field | Description |
| --- | --- |
| `ai_org` | AI-extracted organization names. |
| `ai_region` | AI-extracted regions, e.g. |
| `ai_summary` | AI-generated article summary. |
| `ai_tag` | AI-classified topic tags. |
| `article_id` | Unique article identifier (32 characters). |
| `category` | Article categories. |
| `content` | Full article text. |
| `country` | Country names, e.g. |
| `creator` | Article author(s). |
| `datatype` | Content type, e.g. |
| `description` | Short article description. |
| `duplicate` | Whether the article is a duplicate of another article. |
| `fetched_at` | When the article was collected, `YYYY-MM-DD HH:MM:SS`. |
| `image_url` | Article image URL. |
| `keywords` | Article keywords. |
| `language` | Language name, e.g. |
| `link` | Article URL. |
| `pubDate` | Publish date, `YYYY-MM-DD HH:MM:SS`, in the requested `timezone`. |
| `pubDateTZ` | Timezone of the dates in this article. |
| `sentiment` | Overall sentiment: positive, neutral, or negative. |
| `sentiment_stats` | Sentiment percentage breakdown. |
| `source_icon` | Source icon URL. |
| `source_id` | Source id (usable with the `domain` filter). |
| `source_name` | Source display name. |
| `source_priority` | Source ranking (lower = higher-ranked). |
| `source_url` | Source website URL. |
| `title` | Article title. |
| `video_url` | Article video URL. |

Operations: list.

API path: `/1/news`

#### Source

| Field | Description |
| --- | --- |
| `category` | Categories the source covers. |
| `country` | Countries the source covers. |
| `description` | Short description of the source. |
| `icon` | Source icon URL. |
| `id` | Source id. |
| `language` | Languages the source publishes in. |
| `last_fetch` | When the source was last fetched, `YYYY-MM-DD HH:MM:SS`. |
| `name` | Source display name. |
| `priority` | Source ranking (lower = higher-ranked). |
| `total_article` | Number of articles collected from this source. |
| `url` | Source website URL. |

Operations: list.

API path: `/1/sources`

#### Websocket

| Field | Description |
| --- | --- |

Operations: load.

API path: `/ws/event`

#### WebsocketDeleteEnvelope

| Field | Description |
| --- | --- |

Operations: remove.

API path: `/1/websocket/delete`

#### WebsocketQueryListEnvelope

| Field | Description |
| --- | --- |
| `results` |  |
| `status` |  |
| `totalQueries` | Number of active registrations for this API key. |

Operations: load.

API path: `/1/websocket/fetch`

#### WebsocketRegisterEnvelope

| Field | Description |
| --- | --- |
| `message` | Human-readable confirmation. |
| `registration_id` | Identifier of the registered query (32 characters). |

Operations: create.

API path: `/1/websocket/register`



## Entities


### Archive

Create an instance: `const archive = client.Archive()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `ai_org` | `any` | AI-extracted organization names. |
| `ai_region` | `any` | AI-extracted regions, e.g. |
| `ai_summary` | `string | null` | AI-generated article summary. |
| `ai_tag` | `any` | AI-classified topic tags. |
| `article_id` | `string` | Unique article identifier (32 characters). |
| `category` | `any[] | null` | Article categories. |
| `content` | `string | null` | Full article text. |
| `country` | `any[] | null` | Country names, e.g. |
| `creator` | `any[] | null` | Article author(s). |
| `datatype` | `string` | Content type, e.g. |
| `description` | `string | null` | Short article description. |
| `duplicate` | `boolean` | Whether the article is a duplicate of another article. |
| `fetched_at` | `string | null` | When the article was collected, `YYYY-MM-DD HH:MM:SS`. |
| `image_url` | `string | null` | Article image URL. |
| `keywords` | `any[] | null` | Article keywords. |
| `language` | `string | null` | Language name, e.g. |
| `link` | `string | null` | Article URL. |
| `pubDate` | `string | null` | Publish date, `YYYY-MM-DD HH:MM:SS`, in the requested `timezone`. |
| `pubDateTZ` | `string` | Timezone of the dates in this article. |
| `sentiment` | `any` | Overall sentiment: positive, neutral, or negative. |
| `sentiment_stats` | `any` | Sentiment percentage breakdown. |
| `source_icon` | `string | null` | Source icon URL. |
| `source_id` | `string | null` | Source id (usable with the `domain` filter). |
| `source_name` | `string | null` | Source display name. |
| `source_priority` | `number | null` | Source ranking (lower = higher-ranked). |
| `source_url` | `string | null` | Source website URL. |
| `title` | `string | null` | Article title. |
| `video_url` | `string | null` | Article video URL. |

#### Example: List

```ts
const archives = await client.Archive().list()
```


### Count

Create an instance: `const count = client.Count()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `results` | `Record<string, any>` |  |
| `status` | `string` |  |

#### Example: Load

```ts
const count = await client.Count().load({ from_date: 'from_date', to_date: 'to_date' })
```


### Crypto

Create an instance: `const crypto = client.Crypto()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `ai_tag` | `any` | AI-classified topic tags (crypto-specific tag set). |
| `article_id` | `string` | Unique article identifier (32 characters). |
| `coin` | `any[] | null` | Cryptocurrencies the article mentions, by ticker symbol. |
| `content` | `string | null` | Full article text. |
| `creator` | `any[] | null` | Article author(s). |
| `description` | `string | null` | Short article description. |
| `duplicate` | `boolean` | Whether the article is a duplicate of another article. |
| `fetched_at` | `string | null` | When the article was collected, `YYYY-MM-DD HH:MM:SS`. |
| `image_url` | `string | null` | Article image URL. |
| `keywords` | `any[] | null` | Article keywords. |
| `language` | `string | null` | Language name, e.g. |
| `link` | `string | null` | Article URL. |
| `pubDate` | `string | null` | Publish date, `YYYY-MM-DD HH:MM:SS`, in the requested `timezone`. |
| `pubDateTZ` | `string` | Timezone of the dates in this article. |
| `sentiment` | `any` | Overall sentiment: positive, neutral, or negative. |
| `sentiment_stats` | `any` | Sentiment percentage breakdown. |
| `source_icon` | `string | null` | Source icon URL. |
| `source_id` | `string | null` | Source id (usable with the `domain` filter). |
| `source_name` | `string | null` | Source display name. |
| `source_priority` | `number | null` | Source ranking (lower = higher-ranked). |
| `source_url` | `string | null` | Source website URL. |
| `title` | `string | null` | Article title. |
| `video_url` | `string | null` | Article video URL. |

#### Example: List

```ts
const cryptos = await client.Crypto().list()
```


### Latest

Create an instance: `const latest = client.Latest()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `ai_org` | `any` | AI-extracted organization names. |
| `ai_region` | `any` | AI-extracted regions, e.g. |
| `ai_summary` | `string | null` | AI-generated article summary. |
| `ai_tag` | `any` | AI-classified topic tags. |
| `article_id` | `string` | Unique article identifier (32 characters). |
| `category` | `any[] | null` | Article categories. |
| `content` | `string | null` | Full article text. |
| `country` | `any[] | null` | Country names, e.g. |
| `creator` | `any[] | null` | Article author(s). |
| `datatype` | `string` | Content type, e.g. |
| `description` | `string | null` | Short article description. |
| `duplicate` | `boolean` | Whether the article is a duplicate of another article. |
| `fetched_at` | `string | null` | When the article was collected, `YYYY-MM-DD HH:MM:SS`. |
| `image_url` | `string | null` | Article image URL. |
| `keywords` | `any[] | null` | Article keywords. |
| `language` | `string | null` | Language name, e.g. |
| `link` | `string | null` | Article URL. |
| `pubDate` | `string | null` | Publish date, `YYYY-MM-DD HH:MM:SS`, in the requested `timezone`. |
| `pubDateTZ` | `string` | Timezone of the dates in this article. |
| `sentiment` | `any` | Overall sentiment: positive, neutral, or negative. |
| `sentiment_stats` | `any` | Sentiment percentage breakdown. |
| `source_icon` | `string | null` | Source icon URL. |
| `source_id` | `string | null` | Source id (usable with the `domain` filter). |
| `source_name` | `string | null` | Source display name. |
| `source_priority` | `number | null` | Source ranking (lower = higher-ranked). |
| `source_url` | `string | null` | Source website URL. |
| `title` | `string | null` | Article title. |
| `video_url` | `string | null` | Article video URL. |

#### Example: List

```ts
const latests = await client.Latest().list()
```


### Market

Create an instance: `const market = client.Market()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `ai_org` | `any` | AI-extracted organization names. |
| `ai_summary` | `string | null` | AI-generated article summary. |
| `ai_tag` | `any` | AI-classified topic tags. |
| `article_id` | `string` | Unique article identifier (32 characters). |
| `content` | `string | null` | Full article text. |
| `country` | `any[] | null` | Country names, e.g. |
| `creator` | `any[] | null` | Article author(s). |
| `datatype` | `string` | Content type, e.g. |
| `description` | `string | null` | Short article description. |
| `duplicate` | `boolean` | Whether the article is a duplicate of another article. |
| `fetched_at` | `string | null` | When the article was collected, `YYYY-MM-DD HH:MM:SS`. |
| `image_url` | `string | null` | Article image URL. |
| `keywords` | `any[] | null` | Article keywords. |
| `language` | `string | null` | Language name, e.g. |
| `link` | `string | null` | Article URL. |
| `market_id` | `any[] | null` | Unique market identifiers for the tickers in `symbol` — the values accepted by the `market_id` filter. |
| `pubDate` | `string | null` | Publish date, `YYYY-MM-DD HH:MM:SS`, in the requested `timezone`. |
| `pubDateTZ` | `string` | Timezone of the dates in this article. |
| `sentiment` | `any` | Overall sentiment: positive, neutral, or negative. |
| `sentiment_stats` | `any` | Sentiment percentage breakdown. |
| `source_icon` | `string | null` | Source icon URL. |
| `source_id` | `string | null` | Source id (usable with the `domain` filter). |
| `source_name` | `string | null` | Source display name. |
| `source_priority` | `number | null` | Source ranking (lower = higher-ranked). |
| `source_url` | `string | null` | Source website URL. |
| `symbol` | `any[] | null` | Stock ticker symbols the article mentions. |
| `title` | `string | null` | Article title. |
| `video_url` | `string | null` | Article video URL. |

#### Example: List

```ts
const markets = await client.Market().list()
```


### New

Create an instance: `const new_ = client.New()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `ai_org` | `any` | AI-extracted organization names. |
| `ai_region` | `any` | AI-extracted regions, e.g. |
| `ai_summary` | `string | null` | AI-generated article summary. |
| `ai_tag` | `any` | AI-classified topic tags. |
| `article_id` | `string` | Unique article identifier (32 characters). |
| `category` | `any[] | null` | Article categories. |
| `content` | `string | null` | Full article text. |
| `country` | `any[] | null` | Country names, e.g. |
| `creator` | `any[] | null` | Article author(s). |
| `datatype` | `string` | Content type, e.g. |
| `description` | `string | null` | Short article description. |
| `duplicate` | `boolean` | Whether the article is a duplicate of another article. |
| `fetched_at` | `string | null` | When the article was collected, `YYYY-MM-DD HH:MM:SS`. |
| `image_url` | `string | null` | Article image URL. |
| `keywords` | `any[] | null` | Article keywords. |
| `language` | `string | null` | Language name, e.g. |
| `link` | `string | null` | Article URL. |
| `pubDate` | `string | null` | Publish date, `YYYY-MM-DD HH:MM:SS`, in the requested `timezone`. |
| `pubDateTZ` | `string` | Timezone of the dates in this article. |
| `sentiment` | `any` | Overall sentiment: positive, neutral, or negative. |
| `sentiment_stats` | `any` | Sentiment percentage breakdown. |
| `source_icon` | `string | null` | Source icon URL. |
| `source_id` | `string | null` | Source id (usable with the `domain` filter). |
| `source_name` | `string | null` | Source display name. |
| `source_priority` | `number | null` | Source ranking (lower = higher-ranked). |
| `source_url` | `string | null` | Source website URL. |
| `title` | `string | null` | Article title. |
| `video_url` | `string | null` | Article video URL. |

#### Example: List

```ts
const new_s = await client.New().list()
```


### Source

Create an instance: `const source = client.Source()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `category` | `any[] | null` | Categories the source covers. |
| `country` | `any[] | null` | Countries the source covers. |
| `description` | `string | null` | Short description of the source. |
| `icon` | `string | null` | Source icon URL. |
| `id` | `string` | Source id. |
| `language` | `any[] | null` | Languages the source publishes in. |
| `last_fetch` | `string | null` | When the source was last fetched, `YYYY-MM-DD HH:MM:SS`. |
| `name` | `string | null` | Source display name. |
| `priority` | `number | null` | Source ranking (lower = higher-ranked). |
| `total_article` | `number | null` | Number of articles collected from this source. |
| `url` | `string | null` | Source website URL. |

#### Example: List

```ts
const sources = await client.Source().list()
```


### Websocket

Create an instance: `const websocket = client.Websocket()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```ts
const websocket = await client.Websocket().load({ apikey: 'apikey', registration_id: 'registration_id' })
```


### WebsocketDeleteEnvelope

Create an instance: `const websocket_delete_envelope = client.WebsocketDeleteEnvelope()`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### WebsocketQueryListEnvelope

Create an instance: `const websocket_query_list_envelope = client.WebsocketQueryListEnvelope()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `results` | `Record<string, any>` |  |
| `status` | `string` |  |
| `totalQueries` | `number` | Number of active registrations for this API key. |

#### Example: Load

```ts
const websocket_query_list_envelope = await client.WebsocketQueryListEnvelope().load({ apikey: 'apikey' })
```


### WebsocketRegisterEnvelope

Create an instance: `const websocket_register_envelope = client.WebsocketRegisterEnvelope()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `message` | `string` | Human-readable confirmation. |
| `registration_id` | `string` | Identifier of the registered query (32 characters). |

#### Example: Create

```ts
const websocket_register_envelope = await client.WebsocketRegisterEnvelope().create({
  message: 'example_message',
  registration_id: 'example_registration_id',
})
```

## Features

This SDK ships 1 optional features. Each is **inactive until you
switch it on**, so an SDK you have not configured behaves exactly as if none of
them existed — no retries, no cache, no logging, no measurable overhead.

Activate a feature by name in the client options, alongside the options shown
above:

| Feature | What it does |
|---|---|
| [`test`](#test) | Test transport |

### test

Test transport.

| Option | Default |
|---|---|
| `active` | `false` |

Set `feature.test.active` to enable it, then override any of the options above.


## Advanced

> The sections above cover everyday use. The material below explains the
> SDK's internals — useful when extending it with custom features, but not
> needed for normal use.

### The operation pipeline

Every entity operation follows a six-stage pipeline. Each stage fires a
feature hook before executing:

```
PrePoint → PreSpec → PreRequest → PreResponse → PreResult → PreDone
```

- **PrePoint**: Resolves which API endpoint to call based on the
  operation name and entity configuration.
- **PreSpec**: Builds the HTTP spec — URL, method, headers, body —
  from the resolved point and the caller's parameters.
- **PreRequest**: Sends the HTTP request. Features can intercept here
  to replace the transport (as TestFeature does with mocks).
- **PreResponse**: Parses the raw HTTP response.
- **PreResult**: Extracts the business data from the parsed response.
- **PreDone**: Final stage before returning to the caller. Entity
  state (match, data) is updated here.

If any stage errors, the pipeline short-circuits and the error surfaces
to the caller — see [Error handling](#error-handling) for how that looks
in this language.

### Features and hooks

Features are the extension mechanism. A feature is an object with a
`hooks` map. Each hook key is a pipeline stage name, and the value is
a function that receives the context.

The SDK ships with built-in features:

- **TestFeature**: Test transport

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Module structure

```
newsdata/
├── src/
│   ├── NewsdataSDK.ts        # Main SDK class
│   ├── entity/             # Entity implementations
│   ├── feature/            # Built-in features (Base, Test, Log)
│   └── utility/            # Utility functions
├── test/                   # Test suites
└── dist/                   # Compiled output
```

Import the SDK from the package root:

```ts
import { NewsdataSDK } from '@voxgig-sdk/newsdata-sdk'
```

### Entity state

Entity instances are stateful. After a successful `list`, the entity
stores the returned data and match criteria internally. Subsequent
calls on the same instance can rely on this state.

```ts
const crypto = client.Crypto()
await crypto.list()

// crypto.data() now returns the crypto data from the last `list`
// crypto.match() returns the last match criteria
```

Call `make()` to create a fresh instance with the same configuration
but no stored state.

### Direct vs entity access

The entity interface handles URL construction, parameter placement,
and response parsing automatically. Use it for standard CRUD operations.

The `direct` method gives full control over the HTTP request. Use it
for non-standard endpoints, bulk operations, or any path not modelled
as an entity. The `prepare` method is useful for debugging — it
shows exactly what `direct` would send.


## Full Reference

See [REFERENCE.md](REFERENCE.md) for complete API reference
documentation including all method signatures, entity field schemas,
and detailed usage examples.
