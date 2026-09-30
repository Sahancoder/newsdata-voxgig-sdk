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
(0, node_test_1.describe)('SourceEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when NEWSDATA_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('NEWSDATA_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.NewsdataSDK.test();
        const ent = testsdk.Source();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.NEWSDATA_TEST_LIVE;
        for (const op of ['list']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'source.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "category": { "a": true, "h": "Category", "n": "category", "r": false, "sh": "Categories the source covers.", "t": ["`$ONE`", ["`$ARRAY`", "`$NULL`"]], "key$": "category", "index$": 0 }, "country": { "a": true, "h": "Country", "n": "country", "r": false, "sh": "Countries the source covers.", "t": ["`$ONE`", ["`$ARRAY`", "`$NULL`"]], "key$": "country", "index$": 1 }, "description": { "a": true, "h": "Description", "n": "description", "r": false, "sh": "Short description of the source.", "t": ["`$ONE`", ["`$STRING`", "`$NULL`"]], "key$": "description", "index$": 2 }, "icon": { "a": true, "fo": "uri", "h": "Icon", "n": "icon", "r": false, "sh": "Source icon URL.", "t": ["`$ONE`", ["`$STRING`", "`$NULL`"]], "key$": "icon", "index$": 3 }, "id": { "a": true, "h": "Id", "n": "id", "r": true, "sh": "Source id.", "t": "`$STRING`", "key$": "id", "index$": 4 }, "language": { "a": true, "h": "Language", "n": "language", "r": false, "sh": "Languages the source publishes in.", "t": ["`$ONE`", ["`$ARRAY`", "`$NULL`"]], "key$": "language", "index$": 5 }, "last_fetch": { "a": true, "h": "Last Fetch", "n": "last_fetch", "r": false, "sh": "When the source was last fetched, `YYYY-MM-DD HH:MM:SS`.", "t": ["`$ONE`", ["`$STRING`", "`$NULL`"]], "key$": "last_fetch", "index$": 6 }, "name": { "a": true, "h": "Name", "n": "name", "r": false, "sh": "Source display name.", "t": ["`$ONE`", ["`$STRING`", "`$NULL`"]], "key$": "name", "index$": 7 }, "priority": { "a": true, "h": "Priority", "n": "priority", "r": false, "sh": "Source ranking (lower = higher-ranked).", "t": ["`$ONE`", ["`$INTEGER`", "`$NULL`"]], "key$": "priority", "index$": 8 }, "total_article": { "a": true, "h": "Total Article", "n": "total_article", "r": false, "sh": "Number of articles collected from this source.", "t": ["`$ONE`", ["`$INTEGER`", "`$NULL`"]], "key$": "total_article", "index$": 9 }, "url": { "a": true, "fo": "uri", "h": "Url", "n": "url", "r": false, "sh": "Source website URL.", "t": ["`$ONE`", ["`$STRING`", "`$NULL`"]], "key$": "url", "index$": 10 } }, "id": { "field": "id", "name": "id" }, "name": "source", "op": { "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /1/sources", "source": "openapi3", "version": 2 }, "g": { "query": [{ "a": true, "ex": "pub_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx", "k": "query", "n": "apikey", "or": "apikey", "r": false, "t": "`$STRING`", "index$": 0 }, { "a": true, "ex": "business,technology", "k": "query", "n": "category", "or": "category", "r": false, "t": "`$ARRAY`", "index$": 1 }, { "a": true, "ex": "us", "k": "query", "n": "country", "or": "country", "r": false, "t": "`$ARRAY`", "index$": 2 }, { "a": true, "ex": "bbc.com,cnn.com", "k": "query", "n": "domainurl", "or": "domainurl", "r": false, "t": "`$ARRAY`", "index$": 3 }, { "a": true, "ex": "en,hi", "k": "query", "n": "language", "or": "language", "r": false, "t": "`$ARRAY`", "index$": 4 }, { "a": true, "k": "query", "n": "prioritydomain", "or": "prioritydomain", "r": false, "t": "`$STRING`", "index$": 5 }] }, "k": "http", "m": "GET", "o": "/1/sources", "q": { "exist": ["apikey", "category", "country", "domainurl", "language", "prioritydomain"] }, "r": {}, "s": [{ "lit": "1" }, { "lit": "sources" }], "t": { "req": "`reqdata`", "res": "`body.results`" }, "index$": 0 }], "key$": "list" } }, "relations": { "ancestors": [] }, "key$": "source", "name__orig": "source", "Name": "Source", "name_": "source", "name-": "source", "NAME": "SOURCE", "index$": 6 }, { "active": true, "entity": "source", "key$": "BasicSourceFlow", "kind": "basic", "name": "BasicSourceFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": {}, "m": {}, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "source_ref01" } }] }] }, 'Source', { "GET /1/sources": {} });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let source_ref01_data = Object.values(setup.data.existing.source)[0];
        // LIST
        const source_ref01_ent = client.Source();
        const source_ref01_match = {};
        const source_ref01_list = (await source_ref01_ent.list(source_ref01_match)).map((e) => e.data());
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/source/SourceTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.NewsdataSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['source01', 'source02', 'source03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'NEWSDATA_TEST_SOURCE_ENTID': idmap,
        'NEWSDATA_TEST_LIVE': 'FALSE',
        'NEWSDATA_TEST_EXPLAIN': 'FALSE',
        'NEWSDATA_APIKEY': '',
    });
    idmap = env['NEWSDATA_TEST_SOURCE_ENTID'];
    const live = 'TRUE' === env.NEWSDATA_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['NEWSDATA_TEST_SOURCE_ENTID'];
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
//# sourceMappingURL=SourceEntity.test.js.map