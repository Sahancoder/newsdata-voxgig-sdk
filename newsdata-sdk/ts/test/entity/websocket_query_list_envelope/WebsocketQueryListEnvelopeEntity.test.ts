

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


describe('WebsocketQueryListEnvelopeEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when NEWSDATA_TEST_LIVE=TRUE.
  afterEach(liveDelay('NEWSDATA_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = NewsdataSDK.test()
    const ent = testsdk.WebsocketQueryListEnvelope()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.NEWSDATA_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'websocket_query_list_envelope.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"results":{"a":true,"h":"Results","n":"results","r":true,"t":"`$OBJECT`","key$":"results","index$":0},"status":{"a":true,"h":"Status","n":"status","r":true,"t":"`$STRING`","key$":"status","index$":1},"totalQueries":{"a":true,"h":"Total Queries","n":"totalQueries","r":true,"sh":"Number of active registrations for this API key.","t":"`$INTEGER`","key$":"totalQueries","index$":2}},"name":"websocket_query_list_envelope","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /1/websocket/fetch","source":"openapi3","version":2},"g":{"query":[{"a":true,"ex":"pub_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx","k":"query","n":"apikey","or":"apikey","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/1/websocket/fetch","q":{"exist":["apikey"]},"r":{},"s":[{"lit":"1"},{"lit":"websocket"},{"lit":"fetch"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"websocket_query_list_envelope","name__orig":"websocket_query_list_envelope","Name":"WebsocketQueryListEnvelope","name_":"websocket_query_list_envelope","name-":"websocket-query-list-envelope","NAME":"WEBSOCKET_QUERY_LIST_ENVELOPE","index$":9}, {"active":true,"entity":"websocket_query_list_envelope","key$":"BasicWebsocketQueryListEnvelopeFlow","kind":"basic","name":"BasicWebsocketQueryListEnvelopeFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"websocket_query_list_envelope_ref01","srcdatavar":"websocket_query_list_envelope_ref01_data","suffix":"_dt0"},"m":{},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-websocket_query_list_envelope_ref01"}}]}]}, 'WebsocketQueryListEnvelope', {"GET /1/websocket/fetch":{}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let websocket_query_list_envelope_ref01_data = Object.values(setup.data.existing.websocket_query_list_envelope)[0] as any

    // LOAD
    const websocket_query_list_envelope_ref01_ent = client.WebsocketQueryListEnvelope()
    const websocket_query_list_envelope_ref01_match_dt0: any = {}
    const websocket_query_list_envelope_ref01_data_dt0 = (await websocket_query_list_envelope_ref01_ent.load(websocket_query_list_envelope_ref01_match_dt0)).data()
    assert(null != websocket_query_list_envelope_ref01_data_dt0)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/websocket_query_list_envelope/WebsocketQueryListEnvelopeTestData.json')

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
    ['websocket_query_list_envelope01','websocket_query_list_envelope02','websocket_query_list_envelope03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'NEWSDATA_TEST_WEBSOCKET_QUERY_LIST_ENVELOPE_ENTID': idmap,
    'NEWSDATA_TEST_LIVE': 'FALSE',
    'NEWSDATA_TEST_EXPLAIN': 'FALSE',
    'NEWSDATA_APIKEY': '',
  })

  idmap = env['NEWSDATA_TEST_WEBSOCKET_QUERY_LIST_ENVELOPE_ENTID']

  const live = 'TRUE' === env.NEWSDATA_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['NEWSDATA_TEST_WEBSOCKET_QUERY_LIST_ENVELOPE_ENTID']
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
  
