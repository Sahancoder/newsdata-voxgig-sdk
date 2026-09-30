

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


describe('WebsocketEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when NEWSDATA_TEST_LIVE=TRUE.
  afterEach(liveDelay('NEWSDATA_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = NewsdataSDK.test()
    const ent = testsdk.Websocket()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.NEWSDATA_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'websocket.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{},"name":"websocket","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /ws/event","source":"openapi3","version":2},"g":{"query":[{"a":true,"ex":"pub_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx","k":"query","n":"apikey","or":"apikey","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"9b2d1e8a7c4f4b6e9d3a5c7e1f2a4b6c","k":"query","n":"registration_id","or":"registration_id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"GET","o":"/ws/event","q":{"exist":["apikey","registration_id"]},"r":{},"s":[{"lit":"ws"},{"lit":"event"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"websocket","name__orig":"websocket","Name":"Websocket","name_":"websocket","name-":"websocket","NAME":"WEBSOCKET","index$":7}, {"active":true,"entity":"websocket","key$":"BasicWebsocketFlow","kind":"basic","name":"BasicWebsocketFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"websocket_ref01","srcdatavar":"websocket_ref01_data","suffix":"_dt0"},"m":{},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-websocket_ref01"}}]}]}, 'Websocket', {"GET /ws/event":{}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let websocket_ref01_data = Object.values(setup.data.existing.websocket)[0] as any

    // LOAD
    const websocket_ref01_ent = client.Websocket()
    const websocket_ref01_match_dt0: any = {}
    const websocket_ref01_data_dt0 = (await websocket_ref01_ent.load(websocket_ref01_match_dt0)).data()
    assert(null != websocket_ref01_data_dt0)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/websocket/WebsocketTestData.json')

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
    ['websocket01','websocket02','websocket03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'NEWSDATA_TEST_WEBSOCKET_ENTID': idmap,
    'NEWSDATA_TEST_LIVE': 'FALSE',
    'NEWSDATA_TEST_EXPLAIN': 'FALSE',
    'NEWSDATA_APIKEY': '',
  })

  idmap = env['NEWSDATA_TEST_WEBSOCKET_ENTID']

  const live = 'TRUE' === env.NEWSDATA_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['NEWSDATA_TEST_WEBSOCKET_ENTID']
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
  
