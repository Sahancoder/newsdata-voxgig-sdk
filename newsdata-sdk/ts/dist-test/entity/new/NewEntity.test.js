"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_path_1 = __importDefault(require("node:path"));
const Fs = __importStar(require("node:fs"));
const node_test_1 = require("node:test");
const node_assert_1 = __importDefault(require("node:assert"));
const live_runner_1 = require("../../live-runner");
const live_entity_1 = require("../../live-entity");
const __1 = require("../../..");
const utility_1 = require("../../utility");
(0, utility_1.loadEnvLocal)(__dirname + '/../../../.env.local');
(0, node_test_1.describe)('NewEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when NEWSDATA_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('NEWSDATA_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.NewsdataSDK.test();
        const ent = testsdk.New();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.NEWSDATA_TEST_LIVE;
        for (const op of ['list']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'new.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "ai_org": { "a": true, "h": "Ai Org", "n": "ai_org", "r": false, "sh": "AI-extracted organization names.", "t": "`$ANY`", "union": { "branches": 2, "count": 1, "depth": 0 }, "key$": "ai_org", "index$": 0 }, "ai_region": { "a": true, "h": "Ai Region", "n": "ai_region", "r": false, "sh": "AI-extracted regions, e.g.", "t": "`$ANY`", "union": { "branches": 2, "count": 1, "depth": 0 }, "key$": "ai_region", "index$": 1 }, "ai_summary": { "a": true, "h": "Ai Summary", "n": "ai_summary", "r": false, "sh": "AI-generated article summary.", "t": ["`$ONE`", ["`$STRING`", "`$NULL`"]], "key$": "ai_summary", "index$": 2 }, "ai_tag": { "a": true, "h": "Ai Tag", "n": "ai_tag", "r": false, "sh": "AI-classified topic tags.", "t": "`$ANY`", "union": { "branches": 2, "count": 1, "depth": 0 }, "key$": "ai_tag", "index$": 3 }, "article_id": { "a": true, "h": "Article Id", "n": "article_id", "r": true, "sh": "Unique article identifier (32 characters).", "t": "`$STRING`", "key$": "article_id", "index$": 4 }, "category": { "a": true, "h": "Category", "n": "category", "r": false, "sh": "Article categories.", "t": ["`$ONE`", ["`$ARRAY`", "`$NULL`"]], "key$": "category", "index$": 5 }, "content": { "a": true, "h": "Content", "n": "content", "r": false, "sh": "Full article text.", "t": ["`$ONE`", ["`$STRING`", "`$NULL`"]], "key$": "content", "index$": 6 }, "country": { "a": true, "h": "Country", "n": "country", "r": false, "sh": "Country names, e.g.", "t": ["`$ONE`", ["`$ARRAY`", "`$NULL`"]], "key$": "country", "index$": 7 }, "creator": { "a": true, "h": "Creator", "n": "creator", "r": false, "sh": "Article author(s).", "t": ["`$ONE`", ["`$ARRAY`", "`$NULL`"]], "key$": "creator", "index$": 8 }, "datatype": { "a": true, "h": "Datatype", "n": "datatype", "r": false, "sh": "Content type, e.g.", "t": "`$STRING`", "key$": "datatype", "index$": 9 }, "description": { "a": true, "h": "Description", "n": "description", "r": false, "sh": "Short article description.", "t": ["`$ONE`", ["`$STRING`", "`$NULL`"]], "key$": "description", "index$": 10 }, "duplicate": { "a": true, "h": "Duplicate", "n": "duplicate", "r": false, "sh": "Whether the article is a duplicate of another article.", "t": "`$BOOLEAN`", "key$": "duplicate", "index$": 11 }, "fetched_at": { "a": true, "h": "Fetched At", "n": "fetched_at", "r": false, "sh": "When the article was collected, `YYYY-MM-DD HH:MM:SS`.", "t": ["`$ONE`", ["`$STRING`", "`$NULL`"]], "key$": "fetched_at", "index$": 12 }, "image_url": { "a": true, "fo": "uri", "h": "Image Url", "n": "image_url", "r": false, "sh": "Article image URL.", "t": ["`$ONE`", ["`$STRING`", "`$NULL`"]], "key$": "image_url", "index$": 13 }, "keywords": { "a": true, "h": "Keywords", "n": "keywords", "r": false, "sh": "Article keywords.", "t": ["`$ONE`", ["`$ARRAY`", "`$NULL`"]], "key$": "keywords", "index$": 14 }, "language": { "a": true, "h": "Language", "n": "language", "r": false, "sh": "Language name, e.g.", "t": ["`$ONE`", ["`$STRING`", "`$NULL`"]], "key$": "language", "index$": 15 }, "link": { "a": true, "fo": "uri", "h": "Link", "n": "link", "r": false, "sh": "Article URL.", "t": ["`$ONE`", ["`$STRING`", "`$NULL`"]], "key$": "link", "index$": 16 }, "pubDate": { "a": true, "h": "Pub Date", "n": "pubDate", "r": false, "sh": "Publish date, `YYYY-MM-DD HH:MM:SS`, in the requested `timezone`.", "t": ["`$ONE`", ["`$STRING`", "`$NULL`"]], "key$": "pubDate", "index$": 17 }, "pubDateTZ": { "a": true, "h": "Pub Date Tz", "n": "pubDateTZ", "r": false, "sh": "Timezone of the dates in this article.", "t": "`$STRING`", "key$": "pubDateTZ", "index$": 18 }, "sentiment": { "a": true, "h": "Sentiment", "n": "sentiment", "r": false, "sh": "Overall sentiment: positive, neutral, or negative.", "t": "`$ANY`", "union": { "branches": 2, "count": 1, "depth": 0 }, "key$": "sentiment", "index$": 19 }, "sentiment_stats": { "a": true, "h": "Sentiment Stats", "n": "sentiment_stats", "r": false, "sh": "Sentiment percentage breakdown.", "t": "`$ANY`", "union": { "branches": 2, "count": 1, "depth": 0 }, "key$": "sentiment_stats", "index$": 20 }, "source_icon": { "a": true, "fo": "uri", "h": "Source Icon", "n": "source_icon", "r": false, "sh": "Source icon URL.", "t": ["`$ONE`", ["`$STRING`", "`$NULL`"]], "key$": "source_icon", "index$": 21 }, "source_id": { "a": true, "h": "Source Id", "n": "source_id", "r": false, "sh": "Source id (usable with the `domain` filter).", "t": ["`$ONE`", ["`$STRING`", "`$NULL`"]], "key$": "source_id", "index$": 22 }, "source_name": { "a": true, "h": "Source Name", "n": "source_name", "r": false, "sh": "Source display name.", "t": ["`$ONE`", ["`$STRING`", "`$NULL`"]], "key$": "source_name", "index$": 23 }, "source_priority": { "a": true, "h": "Source Priority", "n": "source_priority", "r": false, "sh": "Source ranking (lower = higher-ranked).", "t": ["`$ONE`", ["`$INTEGER`", "`$NULL`"]], "key$": "source_priority", "index$": 24 }, "source_url": { "a": true, "fo": "uri", "h": "Source Url", "n": "source_url", "r": false, "sh": "Source website URL.", "t": ["`$ONE`", ["`$STRING`", "`$NULL`"]], "key$": "source_url", "index$": 25 }, "title": { "a": true, "h": "Title", "n": "title", "r": false, "sh": "Article title.", "t": ["`$ONE`", ["`$STRING`", "`$NULL`"]], "key$": "title", "index$": 26 }, "video_url": { "a": true, "fo": "uri", "h": "Video Url", "n": "video_url", "r": false, "sh": "Article video URL.", "t": ["`$ONE`", ["`$STRING`", "`$NULL`"]], "key$": "video_url", "index$": 27 } }, "name": "new", "op": { "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /1/news", "source": "openapi3", "version": 2 }, "g": { "query": [{ "a": true, "ex": "pub_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx", "k": "query", "n": "apikey", "or": "apikey", "r": false, "t": "`$STRING`", "index$": 0 }, { "a": true, "ex": "business,technology", "k": "query", "n": "category", "or": "category", "r": false, "t": "`$ARRAY`", "index$": 1 }, { "a": true, "ex": "us", "k": "query", "n": "country", "or": "country", "r": false, "t": "`$ARRAY`", "index$": 2 }, { "a": true, "k": "query", "n": "creator", "or": "creator", "r": false, "t": "`$ARRAY`", "index$": 3 }, { "a": true, "k": "query", "n": "datatype", "or": "datatype", "r": false, "t": "`$ARRAY`", "index$": 4 }, { "a": true, "ex": "bbc,cnn", "k": "query", "n": "domain", "or": "domain", "r": false, "t": "`$ARRAY`", "index$": 5 }, { "a": true, "ex": "bbc.com,cnn.com", "k": "query", "n": "domainurl", "or": "domainurl", "r": false, "t": "`$ARRAY`", "index$": 6 }, { "a": true, "k": "query", "n": "excludecategory", "or": "excludecategory", "r": false, "t": "`$ARRAY`", "index$": 7 }, { "a": true, "k": "query", "n": "excludecountry", "or": "excludecountry", "r": false, "t": "`$ARRAY`", "index$": 8 }, { "a": true, "k": "query", "n": "excludedomain", "or": "excludedomain", "r": false, "t": "`$ARRAY`", "index$": 9 }, { "a": true, "ex": "content,keywords", "k": "query", "n": "excludefield", "or": "excludefield", "r": false, "t": "`$ARRAY`", "index$": 10 }, { "a": true, "k": "query", "n": "excludelanguage", "or": "excludelanguage", "r": false, "t": "`$ARRAY`", "index$": 11 }, { "a": true, "k": "query", "n": "full_content", "or": "full_content", "r": false, "t": "`$STRING`", "index$": 12 }, { "a": true, "k": "query", "n": "id", "or": "id", "r": false, "t": "`$ARRAY`", "index$": 13 }, { "a": true, "k": "query", "n": "image", "or": "image", "r": false, "t": "`$STRING`", "index$": 14 }, { "a": true, "ex": "en,hi", "k": "query", "n": "language", "or": "language", "r": false, "t": "`$ARRAY`", "index$": 15 }, { "a": true, "k": "query", "n": "organization", "or": "organization", "r": false, "t": "`$ARRAY`", "index$": 16 }, { "a": true, "ex": "1749547200000000000", "k": "query", "n": "page", "or": "page", "r": false, "t": "`$STRING`", "index$": 17 }, { "a": true, "k": "query", "n": "prioritydomain", "or": "prioritydomain", "r": false, "t": "`$STRING`", "index$": 18 }, { "a": true, "ex": "elections", "k": "query", "n": "q", "or": "q", "r": false, "t": "`$STRING`", "index$": 19 }, { "a": true, "k": "query", "n": "q_in_meta", "or": "qInMeta", "r": false, "t": "`$STRING`", "index$": 20 }, { "a": true, "k": "query", "n": "q_in_title", "or": "qInTitle", "r": false, "t": "`$STRING`", "index$": 21 }, { "a": true, "k": "query", "n": "region", "or": "region", "r": false, "t": "`$ARRAY`", "index$": 22 }, { "a": true, "k": "query", "n": "removeduplicate", "or": "removeduplicate", "r": false, "t": "`$STRING`", "index$": 23 }, { "a": true, "k": "query", "n": "sentiment", "or": "sentiment", "r": false, "t": "`$STRING`", "index$": 24 }, { "a": true, "k": "query", "n": "sentiment_score", "or": "sentiment_score", "r": false, "t": "`$NUMBER`", "index$": 25 }, { "a": true, "k": "query", "n": "size", "or": "size", "r": false, "t": "`$INTEGER`", "index$": 26 }, { "a": true, "ex": "pubdatedesc", "k": "query", "n": "sort", "or": "sort", "r": false, "t": "`$STRING`", "index$": 27 }, { "a": true, "k": "query", "n": "tag", "or": "tag", "r": false, "t": "`$ARRAY`", "index$": 28 }, { "a": true, "ex": "24", "k": "query", "n": "timeframe", "or": "timeframe", "r": false, "t": "`$STRING`", "index$": 29 }, { "a": true, "ex": "Asia/Kolkata", "k": "query", "n": "timezone", "or": "timezone", "r": false, "t": "`$STRING`", "index$": 30 }, { "a": true, "k": "query", "n": "url", "or": "url", "r": false, "t": "`$STRING`", "index$": 31 }, { "a": true, "k": "query", "n": "video", "or": "video", "r": false, "t": "`$STRING`", "index$": 32 }] }, "k": "http", "m": "GET", "o": "/1/news", "q": { "exist": ["apikey", "category", "country", "creator", "datatype", "domain", "domainurl", "excludecategory", "excludecountry", "excludedomain", "excludefield", "excludelanguage", "full_content", "id", "image", "language", "organization", "page", "prioritydomain", "q", "q_in_meta", "q_in_title", "region", "removeduplicate", "sentiment", "sentiment_score", "size", "sort", "tag", "timeframe", "timezone", "url", "video"] }, "r": {}, "s": [{ "lit": "1" }, { "lit": "news" }], "t": { "req": "`reqdata`", "res": "`body.results`" }, "index$": 0 }], "key$": "list" } }, "relations": { "ancestors": [] }, "key$": "new", "name__orig": "new", "Name": "New", "name_": "new", "name-": "new", "NAME": "NEW", "index$": 5 }, { "active": true, "entity": "new", "key$": "BasicNewFlow", "kind": "basic", "name": "BasicNewFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": {}, "m": {}, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "new_ref01" } }] }] }, 'New', { "GET /1/news": {} });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let new_ref01_data = Object.values(setup.data.existing.new)[0];
        // LIST
        const new_ref01_ent = client.New();
        const new_ref01_match = {};
        const new_ref01_list = (await new_ref01_ent.list(new_ref01_match)).map((e) => e.data());
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/new/NewTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.NewsdataSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['new01', 'new02', 'new03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'NEWSDATA_TEST_NEW_ENTID': idmap,
        'NEWSDATA_TEST_LIVE': 'FALSE',
        'NEWSDATA_TEST_EXPLAIN': 'FALSE',
        'NEWSDATA_APIKEY': '',
    });
    idmap = env['NEWSDATA_TEST_NEW_ENTID'];
    const live = 'TRUE' === env.NEWSDATA_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['NEWSDATA_TEST_NEW_ENTID'];
        idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {};
        if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
            throw new Error('Live ENTID must be a JSON object');
        }
        client = new __1.NewsdataSDK(merge([
            // FIRST, so the generated fields below win: sdk-test-control.json's
            // test.client.options adds to the live client, it does not redirect it.
            (0, utility_1.liveClientOptions)(),
            {
                apikey: env.NEWSDATA_APIKEY,
            },
            // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
            // last entry is undefined, and basicSetup is normally called with no
            // argument at all - so a bare 'extra' silently discarded the apikey
            // and server values above and handed the SDK undefined. Harmless
            // while there was nothing in that object; not harmless now.
            extra || {},
            { system: { fetch: transport.fetch } }
        ]));
    }
    const setup = {
        idmap,
        env,
        options,
        client,
        struct,
        data: entityData,
        explain: 'TRUE' === env.NEWSDATA_TEST_EXPLAIN,
        live,
        transport,
        now: Date.now(),
    };
    return setup;
}
//# sourceMappingURL=NewEntity.test.js.map