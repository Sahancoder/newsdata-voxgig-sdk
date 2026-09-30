

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { NewsdataSDK, BaseFeature, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


loadEnvLocal(__dirname + '/../../../.env.local')


describe('CountEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when NEWSDATA_TEST_LIVE=TRUE.
  afterEach(liveDelay('NEWSDATA_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = NewsdataSDK.test()
    const ent = testsdk.Count()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.NEWSDATA_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'count.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"results":{"a":true,"h":"Results","n":"results","r":false,"t":"`$OBJECT`","key$":"results","index$":0},"status":{"a":true,"h":"Status","n":"status","r":false,"t":"`$STRING`","key$":"status","index$":1}},"name":"count","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /1/count","source":"openapi3","version":2},"g":{"query":[{"a":true,"ex":"pub_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx","k":"query","n":"apikey","or":"apikey","r":false,"t":"`$STRING`","index$":0},{"a":true,"ex":"business,technology","k":"query","n":"category","or":"category","r":false,"t":"`$ARRAY`","index$":1},{"a":true,"ex":"us","k":"query","n":"country","or":"country","r":false,"t":"`$ARRAY`","index$":2},{"a":true,"k":"query","n":"creator","or":"creator","r":false,"t":"`$ARRAY`","index$":3},{"a":true,"k":"query","n":"datatype","or":"datatype","r":false,"t":"`$ARRAY`","index$":4},{"a":true,"ex":"bbc,cnn","k":"query","n":"domain","or":"domain","r":false,"t":"`$ARRAY`","index$":5},{"a":true,"ex":"bbc.com,cnn.com","k":"query","n":"domainurl","or":"domainurl","r":false,"t":"`$ARRAY`","index$":6},{"a":true,"k":"query","n":"excludecategory","or":"excludecategory","r":false,"t":"`$ARRAY`","index$":7},{"a":true,"k":"query","n":"excludecountry","or":"excludecountry","r":false,"t":"`$ARRAY`","index$":8},{"a":true,"k":"query","n":"excludedomain","or":"excludedomain","r":false,"t":"`$ARRAY`","index$":9},{"a":true,"k":"query","n":"excludelanguage","or":"excludelanguage","r":false,"t":"`$ARRAY`","index$":10},{"a":true,"ex":"2026-05-01","k":"query","n":"from_date","or":"from_date","r":true,"t":"`$STRING`","index$":11},{"a":true,"k":"query","n":"full_content","or":"full_content","r":false,"t":"`$STRING`","index$":12},{"a":true,"k":"query","n":"image","or":"image","r":false,"t":"`$STRING`","index$":13},{"a":true,"ex":"all","k":"query","n":"interval","or":"interval","r":false,"t":"`$STRING`","index$":14},{"a":true,"ex":"en,hi","k":"query","n":"language","or":"language","r":false,"t":"`$ARRAY`","index$":15},{"a":true,"k":"query","n":"organization","or":"organization","r":false,"t":"`$ARRAY`","index$":16},{"a":true,"k":"query","n":"page","or":"page","r":false,"t":"`$STRING`","index$":17},{"a":true,"k":"query","n":"prioritydomain","or":"prioritydomain","r":false,"t":"`$STRING`","index$":18},{"a":true,"ex":"elections","k":"query","n":"q","or":"q","r":false,"t":"`$STRING`","index$":19},{"a":true,"k":"query","n":"q_in_meta","or":"qInMeta","r":false,"t":"`$STRING`","index$":20},{"a":true,"k":"query","n":"q_in_title","or":"qInTitle","r":false,"t":"`$STRING`","index$":21},{"a":true,"k":"query","n":"region","or":"region","r":false,"t":"`$ARRAY`","index$":22},{"a":true,"k":"query","n":"removeduplicate","or":"removeduplicate","r":false,"t":"`$STRING`","index$":23},{"a":true,"k":"query","n":"sentiment","or":"sentiment","r":false,"t":"`$STRING`","index$":24},{"a":true,"k":"query","n":"sentiment_score","or":"sentiment_score","r":false,"t":"`$NUMBER`","index$":25},{"a":true,"k":"query","n":"size","or":"size","r":false,"t":"`$INTEGER`","index$":26},{"a":true,"ex":"pubdatedesc","k":"query","n":"sort","or":"sort","r":false,"t":"`$STRING`","index$":27},{"a":true,"k":"query","n":"tag","or":"tag","r":false,"t":"`$ARRAY`","index$":28},{"a":true,"ex":"2026-05-31","k":"query","n":"to_date","or":"to_date","r":true,"t":"`$STRING`","index$":29},{"a":true,"k":"query","n":"video","or":"video","r":false,"t":"`$STRING`","index$":30}]},"k":"http","m":"GET","o":"/1/count","q":{"exist":["apikey","category","country","creator","datatype","domain","domainurl","excludecategory","excludecountry","excludedomain","excludelanguage","from_date","full_content","image","interval","language","organization","page","prioritydomain","q","q_in_meta","q_in_title","region","removeduplicate","sentiment","sentiment_score","size","sort","tag","to_date","video"]},"r":{},"s":[{"lit":"1"},{"lit":"count"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"GET /1/market/count","source":"openapi3","version":2},"g":{"query":[{"a":true,"ex":"pub_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx","k":"query","n":"apikey","or":"apikey","r":false,"t":"`$STRING`","index$":0},{"a":true,"ex":"us","k":"query","n":"country","or":"country","r":false,"t":"`$ARRAY`","index$":1},{"a":true,"k":"query","n":"creator","or":"creator","r":false,"t":"`$ARRAY`","index$":2},{"a":true,"k":"query","n":"datatype","or":"datatype","r":false,"t":"`$ARRAY`","index$":3},{"a":true,"ex":"bbc,cnn","k":"query","n":"domain","or":"domain","r":false,"t":"`$ARRAY`","index$":4},{"a":true,"ex":"bbc.com,cnn.com","k":"query","n":"domainurl","or":"domainurl","r":false,"t":"`$ARRAY`","index$":5},{"a":true,"k":"query","n":"excludecountry","or":"excludecountry","r":false,"t":"`$ARRAY`","index$":6},{"a":true,"k":"query","n":"excludedomain","or":"excludedomain","r":false,"t":"`$ARRAY`","index$":7},{"a":true,"k":"query","n":"excludelanguage","or":"excludelanguage","r":false,"t":"`$ARRAY`","index$":8},{"a":true,"ex":"2026-05-01","k":"query","n":"from_date","or":"from_date","r":true,"t":"`$STRING`","index$":9},{"a":true,"k":"query","n":"full_content","or":"full_content","r":false,"t":"`$STRING`","index$":10},{"a":true,"k":"query","n":"image","or":"image","r":false,"t":"`$STRING`","index$":11},{"a":true,"ex":"all","k":"query","n":"interval","or":"interval","r":false,"t":"`$STRING`","index$":12},{"a":true,"ex":"en,hi","k":"query","n":"language","or":"language","r":false,"t":"`$ARRAY`","index$":13},{"a":true,"ex":"aapl-us-vy,msft-us-vy","k":"query","n":"market_id","or":"market_id","r":false,"t":"`$ARRAY`","index$":14},{"a":true,"k":"query","n":"organization","or":"organization","r":false,"t":"`$ARRAY`","index$":15},{"a":true,"k":"query","n":"page","or":"page","r":false,"t":"`$STRING`","index$":16},{"a":true,"k":"query","n":"prioritydomain","or":"prioritydomain","r":false,"t":"`$STRING`","index$":17},{"a":true,"ex":"elections","k":"query","n":"q","or":"q","r":false,"t":"`$STRING`","index$":18},{"a":true,"k":"query","n":"q_in_meta","or":"qInMeta","r":false,"t":"`$STRING`","index$":19},{"a":true,"k":"query","n":"q_in_title","or":"qInTitle","r":false,"t":"`$STRING`","index$":20},{"a":true,"k":"query","n":"removeduplicate","or":"removeduplicate","r":false,"t":"`$STRING`","index$":21},{"a":true,"k":"query","n":"sentiment","or":"sentiment","r":false,"t":"`$STRING`","index$":22},{"a":true,"k":"query","n":"sentiment_score","or":"sentiment_score","r":false,"t":"`$NUMBER`","index$":23},{"a":true,"k":"query","n":"size","or":"size","r":false,"t":"`$INTEGER`","index$":24},{"a":true,"ex":"pubdatedesc","k":"query","n":"sort","or":"sort","r":false,"t":"`$STRING`","index$":25},{"a":true,"k":"query","n":"tag","or":"tag","r":false,"t":"`$ARRAY`","index$":26},{"a":true,"ex":"2026-05-31","k":"query","n":"to_date","or":"to_date","r":true,"t":"`$STRING`","index$":27},{"a":true,"k":"query","n":"video","or":"video","r":false,"t":"`$STRING`","index$":28}]},"k":"http","m":"GET","o":"/1/market/count","q":{"exist":["apikey","country","creator","datatype","domain","domainurl","excludecountry","excludedomain","excludelanguage","from_date","full_content","image","interval","language","market_id","organization","page","prioritydomain","q","q_in_meta","q_in_title","removeduplicate","sentiment","sentiment_score","size","sort","tag","to_date","video"]},"r":{},"s":[{"lit":"1"},{"lit":"market"},{"lit":"count"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1},{"a":true,"co":{"id":"GET /1/crypto/count","source":"openapi3","version":2},"g":{"query":[{"a":true,"ex":"pub_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx","k":"query","n":"apikey","or":"apikey","r":false,"t":"`$STRING`","index$":0},{"a":true,"ex":"btc,eth","k":"query","n":"coin","or":"coin","r":false,"t":"`$ARRAY`","index$":1},{"a":true,"ex":"bbc,cnn","k":"query","n":"domain","or":"domain","r":false,"t":"`$ARRAY`","index$":2},{"a":true,"ex":"bbc.com,cnn.com","k":"query","n":"domainurl","or":"domainurl","r":false,"t":"`$ARRAY`","index$":3},{"a":true,"k":"query","n":"excludedomain","or":"excludedomain","r":false,"t":"`$ARRAY`","index$":4},{"a":true,"k":"query","n":"excludelanguage","or":"excludelanguage","r":false,"t":"`$ARRAY`","index$":5},{"a":true,"ex":"2026-05-01","k":"query","n":"from_date","or":"from_date","r":true,"t":"`$STRING`","index$":6},{"a":true,"k":"query","n":"full_content","or":"full_content","r":false,"t":"`$STRING`","index$":7},{"a":true,"k":"query","n":"image","or":"image","r":false,"t":"`$STRING`","index$":8},{"a":true,"ex":"all","k":"query","n":"interval","or":"interval","r":false,"t":"`$STRING`","index$":9},{"a":true,"ex":"en,hi","k":"query","n":"language","or":"language","r":false,"t":"`$ARRAY`","index$":10},{"a":true,"k":"query","n":"page","or":"page","r":false,"t":"`$STRING`","index$":11},{"a":true,"k":"query","n":"prioritydomain","or":"prioritydomain","r":false,"t":"`$STRING`","index$":12},{"a":true,"ex":"elections","k":"query","n":"q","or":"q","r":false,"t":"`$STRING`","index$":13},{"a":true,"k":"query","n":"q_in_meta","or":"qInMeta","r":false,"t":"`$STRING`","index$":14},{"a":true,"k":"query","n":"q_in_title","or":"qInTitle","r":false,"t":"`$STRING`","index$":15},{"a":true,"k":"query","n":"removeduplicate","or":"removeduplicate","r":false,"t":"`$STRING`","index$":16},{"a":true,"k":"query","n":"sentiment","or":"sentiment","r":false,"t":"`$STRING`","index$":17},{"a":true,"k":"query","n":"size","or":"size","r":false,"t":"`$INTEGER`","index$":18},{"a":true,"ex":"pubdatedesc","k":"query","n":"sort","or":"sort","r":false,"t":"`$STRING`","index$":19},{"a":true,"k":"query","n":"tag","or":"tag","r":false,"t":"`$ARRAY`","index$":20},{"a":true,"ex":"2026-05-31","k":"query","n":"to_date","or":"to_date","r":true,"t":"`$STRING`","index$":21},{"a":true,"k":"query","n":"video","or":"video","r":false,"t":"`$STRING`","index$":22}]},"k":"http","m":"GET","o":"/1/crypto/count","q":{"exist":["apikey","coin","domain","domainurl","excludedomain","excludelanguage","from_date","full_content","image","interval","language","page","prioritydomain","q","q_in_meta","q_in_title","removeduplicate","sentiment","size","sort","tag","to_date","video"]},"r":{},"s":[{"lit":"1"},{"lit":"crypto"},{"lit":"count"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":2}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"count","name__orig":"count","Name":"Count","name_":"count","name-":"count","NAME":"COUNT","index$":1}, {"active":true,"entity":"count","key$":"BasicCountFlow","kind":"basic","name":"BasicCountFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"count_ref01","srcdatavar":"count_ref01_data","suffix":"_dt0"},"m":{},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-count_ref01"}}]}]}, 'Count', {"GET /1/count":{},"GET /1/market/count":{},"GET /1/crypto/count":{}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let count_ref01_data = Object.values(setup.data.existing.count)[0] as any

    // LOAD
    const count_ref01_ent = client.Count()
    const count_ref01_match_dt0: any = {}
    const count_ref01_data_dt0 = (await count_ref01_ent.load(count_ref01_match_dt0)).data()
    assert(null != count_ref01_data_dt0)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/count/CountTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = NewsdataSDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['count01','count02','count03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'NEWSDATA_TEST_COUNT_ENTID': idmap,
    'NEWSDATA_TEST_LIVE': 'FALSE',
    'NEWSDATA_TEST_EXPLAIN': 'FALSE',
    'NEWSDATA_APIKEY': '',
  })

  idmap = env['NEWSDATA_TEST_COUNT_ENTID']

  const live = 'TRUE' === env.NEWSDATA_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['NEWSDATA_TEST_COUNT_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new NewsdataSDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
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
    ]))
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
  }

  return setup
}
  
