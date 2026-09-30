# Newsdata TypeScript SDK Reference

Complete API reference for the Newsdata TypeScript SDK.


## NewsdataSDK

### Constructor

```ts
new NewsdataSDK(options?: object)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `object` | SDK configuration options. |
| `options.apikey` | `string` | API key for authentication. |
| `options.base` | `string` | Base URL for API requests. |
| `options.prefix` | `string` | URL prefix appended after base. |
| `options.suffix` | `string` | URL suffix appended after path. |
| `options.headers` | `object` | Custom headers for all requests. |
| `options.feature` | `object` | Feature configuration. |
| `options.system` | `object` | System overrides (e.g. custom fetch). |


### Static Methods

#### `NewsdataSDK.test(testopts?, sdkopts?)`

Create a test client with mock features active.

```ts
const client = NewsdataSDK.test()
```

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `testopts` | `object` | Test feature options. |
| `sdkopts` | `object` | Additional SDK options merged with test defaults. |

**Returns:** `NewsdataSDK` instance in test mode.


### Instance Methods

#### `Archive(data?: object)`

Create a new `Archive` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ArchiveEntity` instance.

#### `Count(data?: object)`

Create a new `Count` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CountEntity` instance.

#### `Crypto(data?: object)`

Create a new `Crypto` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CryptoEntity` instance.

#### `Latest(data?: object)`

Create a new `Latest` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `LatestEntity` instance.

#### `Market(data?: object)`

Create a new `Market` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `MarketEntity` instance.

#### `New(data?: object)`

Create a new `New` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `NewEntity` instance.

#### `Source(data?: object)`

Create a new `Source` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `SourceEntity` instance.

#### `Websocket(data?: object)`

Create a new `Websocket` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `WebsocketEntity` instance.

#### `WebsocketDeleteEnvelope(data?: object)`

Create a new `WebsocketDeleteEnvelope` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `WebsocketDeleteEnvelopeEntity` instance.

#### `WebsocketQueryListEnvelope(data?: object)`

Create a new `WebsocketQueryListEnvelope` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `WebsocketQueryListEnvelopeEntity` instance.

#### `WebsocketRegisterEnvelope(data?: object)`

Create a new `WebsocketRegisterEnvelope` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `WebsocketRegisterEnvelopeEntity` instance.

#### `options()`

Return a deep copy of the current SDK options.

**Returns:** `object`

#### `utility()`

Return a copy of the SDK utility object.

**Returns:** `object`

#### `direct(fetchargs?: object)`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs.path` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs.method` | `string` | HTTP method (default: `GET`). |
| `fetchargs.params` | `object` | Path parameter values for `{param}` substitution. |
| `fetchargs.query` | `object` | Query string parameters. |
| `fetchargs.headers` | `object` | Request headers (merged with defaults). |
| `fetchargs.body` | `any` | Request body (objects are JSON-serialized). |
| `fetchargs.ctrl` | `object` | Control options (e.g. `{ explain: true }`). |

**Returns:** `Promise<{ ok, status, headers, data } | Error>`

#### `prepare(fetchargs?: object)`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`.

**Returns:** `Promise<{ url, method, headers, body } | Error>`

#### `tester(testopts?, sdkopts?)`

Alias for `NewsdataSDK.test()`.

**Returns:** `NewsdataSDK` instance in test mode.


---

## ArchiveEntity

```ts
const archive = client.Archive()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ai_org` | `any` | No | AI-extracted organization names. |
| `ai_region` | `any` | No | AI-extracted regions, e.g. |
| `ai_summary` | `string | null` | No | AI-generated article summary. |
| `ai_tag` | `any` | No | AI-classified topic tags. |
| `article_id` | `string` | Yes | Unique article identifier (32 characters). |
| `category` | `any[] | null` | No | Article categories. |
| `content` | `string | null` | No | Full article text. |
| `country` | `any[] | null` | No | Country names, e.g. |
| `creator` | `any[] | null` | No | Article author(s). |
| `datatype` | `string` | No | Content type, e.g. |
| `description` | `string | null` | No | Short article description. |
| `duplicate` | `boolean` | No | Whether the article is a duplicate of another article. |
| `fetched_at` | `string | null` | No | When the article was collected, `YYYY-MM-DD HH:MM:SS`. |
| `image_url` | `string | null` | No | Article image URL. |
| `keywords` | `any[] | null` | No | Article keywords. |
| `language` | `string | null` | No | Language name, e.g. |
| `link` | `string | null` | No | Article URL. |
| `pubDate` | `string | null` | No | Publish date, `YYYY-MM-DD HH:MM:SS`, in the requested `timezone`. |
| `pubDateTZ` | `string` | No | Timezone of the dates in this article. |
| `sentiment` | `any` | No | Overall sentiment: positive, neutral, or negative. |
| `sentiment_stats` | `any` | No | Sentiment percentage breakdown. |
| `source_icon` | `string | null` | No | Source icon URL. |
| `source_id` | `string | null` | No | Source id (usable with the `domain` filter). |
| `source_name` | `string | null` | No | Source display name. |
| `source_priority` | `number | null` | No | Source ranking (lower = higher-ranked). |
| `source_url` | `string | null` | No | Source website URL. |
| `title` | `string | null` | No | Article title. |
| `video_url` | `string | null` | No | Article video URL. |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Archive().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ArchiveEntity` instance with the same client and
options.

#### `client()`

Return the parent `NewsdataSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CountEntity

```ts
const count = client.Count()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `results` | `Record<string, any>` | No |  |
| `status` | `string` | No |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Count().load({ from_date: 'from_date', to_date: 'to_date' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CountEntity` instance with the same client and
options.

#### `client()`

Return the parent `NewsdataSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CryptoEntity

```ts
const crypto = client.Crypto()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ai_tag` | `any` | No | AI-classified topic tags (crypto-specific tag set). |
| `article_id` | `string` | Yes | Unique article identifier (32 characters). |
| `coin` | `any[] | null` | No | Cryptocurrencies the article mentions, by ticker symbol. |
| `content` | `string | null` | No | Full article text. |
| `creator` | `any[] | null` | No | Article author(s). |
| `description` | `string | null` | No | Short article description. |
| `duplicate` | `boolean` | No | Whether the article is a duplicate of another article. |
| `fetched_at` | `string | null` | No | When the article was collected, `YYYY-MM-DD HH:MM:SS`. |
| `image_url` | `string | null` | No | Article image URL. |
| `keywords` | `any[] | null` | No | Article keywords. |
| `language` | `string | null` | No | Language name, e.g. |
| `link` | `string | null` | No | Article URL. |
| `pubDate` | `string | null` | No | Publish date, `YYYY-MM-DD HH:MM:SS`, in the requested `timezone`. |
| `pubDateTZ` | `string` | No | Timezone of the dates in this article. |
| `sentiment` | `any` | No | Overall sentiment: positive, neutral, or negative. |
| `sentiment_stats` | `any` | No | Sentiment percentage breakdown. |
| `source_icon` | `string | null` | No | Source icon URL. |
| `source_id` | `string | null` | No | Source id (usable with the `domain` filter). |
| `source_name` | `string | null` | No | Source display name. |
| `source_priority` | `number | null` | No | Source ranking (lower = higher-ranked). |
| `source_url` | `string | null` | No | Source website URL. |
| `title` | `string | null` | No | Article title. |
| `video_url` | `string | null` | No | Article video URL. |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Crypto().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CryptoEntity` instance with the same client and
options.

#### `client()`

Return the parent `NewsdataSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## LatestEntity

```ts
const latest = client.Latest()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ai_org` | `any` | No | AI-extracted organization names. |
| `ai_region` | `any` | No | AI-extracted regions, e.g. |
| `ai_summary` | `string | null` | No | AI-generated article summary. |
| `ai_tag` | `any` | No | AI-classified topic tags. |
| `article_id` | `string` | Yes | Unique article identifier (32 characters). |
| `category` | `any[] | null` | No | Article categories. |
| `content` | `string | null` | No | Full article text. |
| `country` | `any[] | null` | No | Country names, e.g. |
| `creator` | `any[] | null` | No | Article author(s). |
| `datatype` | `string` | No | Content type, e.g. |
| `description` | `string | null` | No | Short article description. |
| `duplicate` | `boolean` | No | Whether the article is a duplicate of another article. |
| `fetched_at` | `string | null` | No | When the article was collected, `YYYY-MM-DD HH:MM:SS`. |
| `image_url` | `string | null` | No | Article image URL. |
| `keywords` | `any[] | null` | No | Article keywords. |
| `language` | `string | null` | No | Language name, e.g. |
| `link` | `string | null` | No | Article URL. |
| `pubDate` | `string | null` | No | Publish date, `YYYY-MM-DD HH:MM:SS`, in the requested `timezone`. |
| `pubDateTZ` | `string` | No | Timezone of the dates in this article. |
| `sentiment` | `any` | No | Overall sentiment: positive, neutral, or negative. |
| `sentiment_stats` | `any` | No | Sentiment percentage breakdown. |
| `source_icon` | `string | null` | No | Source icon URL. |
| `source_id` | `string | null` | No | Source id (usable with the `domain` filter). |
| `source_name` | `string | null` | No | Source display name. |
| `source_priority` | `number | null` | No | Source ranking (lower = higher-ranked). |
| `source_url` | `string | null` | No | Source website URL. |
| `title` | `string | null` | No | Article title. |
| `video_url` | `string | null` | No | Article video URL. |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Latest().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `LatestEntity` instance with the same client and
options.

#### `client()`

Return the parent `NewsdataSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## MarketEntity

```ts
const market = client.Market()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ai_org` | `any` | No | AI-extracted organization names. |
| `ai_summary` | `string | null` | No | AI-generated article summary. |
| `ai_tag` | `any` | No | AI-classified topic tags. |
| `article_id` | `string` | Yes | Unique article identifier (32 characters). |
| `content` | `string | null` | No | Full article text. |
| `country` | `any[] | null` | No | Country names, e.g. |
| `creator` | `any[] | null` | No | Article author(s). |
| `datatype` | `string` | No | Content type, e.g. |
| `description` | `string | null` | No | Short article description. |
| `duplicate` | `boolean` | No | Whether the article is a duplicate of another article. |
| `fetched_at` | `string | null` | No | When the article was collected, `YYYY-MM-DD HH:MM:SS`. |
| `image_url` | `string | null` | No | Article image URL. |
| `keywords` | `any[] | null` | No | Article keywords. |
| `language` | `string | null` | No | Language name, e.g. |
| `link` | `string | null` | No | Article URL. |
| `market_id` | `any[] | null` | No | Unique market identifiers for the tickers in `symbol` — the values accepted by the `market_id` filter. |
| `pubDate` | `string | null` | No | Publish date, `YYYY-MM-DD HH:MM:SS`, in the requested `timezone`. |
| `pubDateTZ` | `string` | No | Timezone of the dates in this article. |
| `sentiment` | `any` | No | Overall sentiment: positive, neutral, or negative. |
| `sentiment_stats` | `any` | No | Sentiment percentage breakdown. |
| `source_icon` | `string | null` | No | Source icon URL. |
| `source_id` | `string | null` | No | Source id (usable with the `domain` filter). |
| `source_name` | `string | null` | No | Source display name. |
| `source_priority` | `number | null` | No | Source ranking (lower = higher-ranked). |
| `source_url` | `string | null` | No | Source website URL. |
| `symbol` | `any[] | null` | No | Stock ticker symbols the article mentions. |
| `title` | `string | null` | No | Article title. |
| `video_url` | `string | null` | No | Article video URL. |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Market().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `MarketEntity` instance with the same client and
options.

#### `client()`

Return the parent `NewsdataSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## NewEntity

```ts
const new_ = client.New()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ai_org` | `any` | No | AI-extracted organization names. |
| `ai_region` | `any` | No | AI-extracted regions, e.g. |
| `ai_summary` | `string | null` | No | AI-generated article summary. |
| `ai_tag` | `any` | No | AI-classified topic tags. |
| `article_id` | `string` | Yes | Unique article identifier (32 characters). |
| `category` | `any[] | null` | No | Article categories. |
| `content` | `string | null` | No | Full article text. |
| `country` | `any[] | null` | No | Country names, e.g. |
| `creator` | `any[] | null` | No | Article author(s). |
| `datatype` | `string` | No | Content type, e.g. |
| `description` | `string | null` | No | Short article description. |
| `duplicate` | `boolean` | No | Whether the article is a duplicate of another article. |
| `fetched_at` | `string | null` | No | When the article was collected, `YYYY-MM-DD HH:MM:SS`. |
| `image_url` | `string | null` | No | Article image URL. |
| `keywords` | `any[] | null` | No | Article keywords. |
| `language` | `string | null` | No | Language name, e.g. |
| `link` | `string | null` | No | Article URL. |
| `pubDate` | `string | null` | No | Publish date, `YYYY-MM-DD HH:MM:SS`, in the requested `timezone`. |
| `pubDateTZ` | `string` | No | Timezone of the dates in this article. |
| `sentiment` | `any` | No | Overall sentiment: positive, neutral, or negative. |
| `sentiment_stats` | `any` | No | Sentiment percentage breakdown. |
| `source_icon` | `string | null` | No | Source icon URL. |
| `source_id` | `string | null` | No | Source id (usable with the `domain` filter). |
| `source_name` | `string | null` | No | Source display name. |
| `source_priority` | `number | null` | No | Source ranking (lower = higher-ranked). |
| `source_url` | `string | null` | No | Source website URL. |
| `title` | `string | null` | No | Article title. |
| `video_url` | `string | null` | No | Article video URL. |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.New().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `NewEntity` instance with the same client and
options.

#### `client()`

Return the parent `NewsdataSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## SourceEntity

```ts
const source = client.Source()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `category` | `any[] | null` | No | Categories the source covers. |
| `country` | `any[] | null` | No | Countries the source covers. |
| `description` | `string | null` | No | Short description of the source. |
| `icon` | `string | null` | No | Source icon URL. |
| `id` | `string` | Yes | Source id. |
| `language` | `any[] | null` | No | Languages the source publishes in. |
| `last_fetch` | `string | null` | No | When the source was last fetched, `YYYY-MM-DD HH:MM:SS`. |
| `name` | `string | null` | No | Source display name. |
| `priority` | `number | null` | No | Source ranking (lower = higher-ranked). |
| `total_article` | `number | null` | No | Number of articles collected from this source. |
| `url` | `string | null` | No | Source website URL. |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Source().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `SourceEntity` instance with the same client and
options.

#### `client()`

Return the parent `NewsdataSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## WebsocketEntity

```ts
const websocket = client.Websocket()
```

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Websocket().load({ apikey: 'apikey', registration_id: 'registration_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `WebsocketEntity` instance with the same client and
options.

#### `client()`

Return the parent `NewsdataSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## WebsocketDeleteEnvelopeEntity

```ts
const websocket_delete_envelope = client.WebsocketDeleteEnvelope()
```

### Operations

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.WebsocketDeleteEnvelope().remove({ apikey: 'apikey', registration_id: 'registration_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `WebsocketDeleteEnvelopeEntity` instance with the same client and
options.

#### `client()`

Return the parent `NewsdataSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## WebsocketQueryListEnvelopeEntity

```ts
const websocket_query_list_envelope = client.WebsocketQueryListEnvelope()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `results` | `Record<string, any>` | Yes |  |
| `status` | `string` | Yes |  |
| `totalQueries` | `number` | Yes | Number of active registrations for this API key. |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.WebsocketQueryListEnvelope().load({ apikey: 'apikey' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `WebsocketQueryListEnvelopeEntity` instance with the same client and
options.

#### `client()`

Return the parent `NewsdataSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## WebsocketRegisterEnvelopeEntity

```ts
const websocket_register_envelope = client.WebsocketRegisterEnvelope()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `message` | `string` | Yes | Human-readable confirmation. |
| `registration_id` | `string` | Yes | Identifier of the registered query (32 characters). |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.WebsocketRegisterEnvelope().create({
  message: 'example_message',
  registration_id: 'example_registration_id',
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `WebsocketRegisterEnvelopeEntity` instance with the same client and
options.

#### `client()`

Return the parent `NewsdataSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | Test transport |


Features are activated via the `feature` option:

```ts
const client = new NewsdataSDK({
  feature: {
    test: { active: true },
  }
})
```


### Configuring features

Each feature is inactive until switched on, and an SDK with no feature
configured does no feature work at all. Every option below keeps its default
unless you name it.

The array form of \`feature\` is significant: several features wrap the
transport, and the order you list them in is the order they nest.

#### `test`

Test transport.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |

| Option | Type |
|---|---|
| `entity` | map |
| `net` | map |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.test.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Attaches to pipeline hooks, not the transport, so activation order does
  not change what it observes.
- Installs the BASE transport that the wrapping features wrap, so it must be
  activated before them.
- Inactive by default: leaving it out costs nothing at runtime.

