

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


describe('WebsocketRegisterEnvelopeEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when NEWSDATA_TEST_LIVE=TRUE.
  afterEach(liveDelay('NEWSDATA_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = NewsdataSDK.test()
    const ent = testsdk.WebsocketRegisterEnvelope()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.NEWSDATA_TEST_LIVE
    for (const op of ['create']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'websocket_register_envelope.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"message":{"a":true,"h":"Message","n":"message","r":true,"sh":"Human-readable confirmation.","t":"`$STRING`","key$":"message","index$":0},"registration_id":{"a":true,"h":"Registration Id","n":"registration_id","r":true,"sh":"Identifier of the registered query (32 characters).","t":"`$STRING`","key$":"registration_id","index$":1}},"name":"websocket_register_envelope","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /1/websocket/register","source":"openapi3","version":2},"g":{"query":[{"a":true,"ex":"pub_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx","k":"query","n":"apikey","or":"apikey","r":false,"t":"`$STRING`","index$":0},{"a":true,"ex":"business,technology","k":"query","n":"category","or":"category","r":false,"t":"`$ARRAY`","index$":1},{"a":true,"ex":"us","k":"query","n":"country","or":"country","r":false,"t":"`$ARRAY`","index$":2},{"a":true,"k":"query","n":"creator","or":"creator","r":false,"t":"`$ARRAY`","index$":3},{"a":true,"k":"query","n":"datatype","or":"datatype","r":false,"t":"`$ARRAY`","index$":4},{"a":true,"ex":"bbc,cnn","k":"query","n":"domain","or":"domain","r":false,"t":"`$ARRAY`","index$":5},{"a":true,"ex":"bbc.com,cnn.com","k":"query","n":"domainurl","or":"domainurl","r":false,"t":"`$ARRAY`","index$":6},{"a":true,"k":"query","n":"excludecategory","or":"excludecategory","r":false,"t":"`$ARRAY`","index$":7},{"a":true,"k":"query","n":"excludecountry","or":"excludecountry","r":false,"t":"`$ARRAY`","index$":8},{"a":true,"k":"query","n":"excludedomain","or":"excludedomain","r":false,"t":"`$ARRAY`","index$":9},{"a":true,"ex":"content,keywords","k":"query","n":"excludefield","or":"excludefield","r":false,"t":"`$ARRAY`","index$":10},{"a":true,"k":"query","n":"excludelanguage","or":"excludelanguage","r":false,"t":"`$ARRAY`","index$":11},{"a":true,"k":"query","n":"full_content","or":"full_content","r":false,"t":"`$STRING`","index$":12},{"a":true,"k":"query","n":"image","or":"image","r":false,"t":"`$STRING`","index$":13},{"a":true,"ex":"en,hi","k":"query","n":"language","or":"language","r":false,"t":"`$ARRAY`","index$":14},{"a":true,"k":"query","n":"organization","or":"organization","r":false,"t":"`$ARRAY`","index$":15},{"a":true,"k":"query","n":"prioritydomain","or":"prioritydomain","r":false,"t":"`$STRING`","index$":16},{"a":true,"ex":"elections","k":"query","n":"q","or":"q","r":false,"t":"`$STRING`","index$":17},{"a":true,"k":"query","n":"q_in_meta","or":"qInMeta","r":false,"t":"`$STRING`","index$":18},{"a":true,"k":"query","n":"q_in_title","or":"qInTitle","r":false,"t":"`$STRING`","index$":19},{"a":true,"k":"query","n":"region","or":"region","r":false,"t":"`$ARRAY`","index$":20},{"a":true,"k":"query","n":"removeduplicate","or":"removeduplicate","r":false,"t":"`$STRING`","index$":21},{"a":true,"k":"query","n":"sentiment","or":"sentiment","r":false,"t":"`$STRING`","index$":22},{"a":true,"k":"query","n":"sentiment_score","or":"sentiment_score","r":false,"t":"`$NUMBER`","index$":23},{"a":true,"k":"query","n":"tag","or":"tag","r":false,"t":"`$ARRAY`","index$":24},{"a":true,"ex":"Asia/Kolkata","k":"query","n":"timezone","or":"timezone","r":false,"t":"`$STRING`","index$":25},{"a":true,"k":"query","n":"video","or":"video","r":false,"t":"`$STRING`","index$":26}]},"k":"http","m":"POST","o":"/1/websocket/register","q":{"exist":["apikey","category","country","creator","datatype","domain","domainurl","excludecategory","excludecountry","excludedomain","excludefield","excludelanguage","full_content","image","language","organization","prioritydomain","q","q_in_meta","q_in_title","region","removeduplicate","sentiment","sentiment_score","tag","timezone","video"]},"r":{},"s":[{"lit":"1"},{"lit":"websocket"},{"lit":"register"}],"t":{"req":"`reqdata`","res":"`body.results`"},"index$":0}],"key$":"create"}},"relations":{"ancestors":[]},"key$":"websocket_register_envelope","name__orig":"websocket_register_envelope","Name":"WebsocketRegisterEnvelope","name_":"websocket_register_envelope","name-":"websocket-register-envelope","NAME":"WEBSOCKET_REGISTER_ENVELOPE","index$":10}, {"active":true,"entity":"websocket_register_envelope","key$":"BasicWebsocketRegisterEnvelopeFlow","kind":"basic","name":"BasicWebsocketRegisterEnvelopeFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"websocket_register_envelope_ref01"},"m":{},"o":"create","s":[],"v":[]}]}, 'WebsocketRegisterEnvelope', {"POST /1/websocket/register":{}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const websocket_register_envelope_ref01_ent = client.WebsocketRegisterEnvelope()
    let websocket_register_envelope_ref01_data = setup.data.new.websocket_register_envelope['websocket_register_envelope_ref01']

    websocket_register_envelope_ref01_data = (await websocket_register_envelope_ref01_ent.create(websocket_register_envelope_ref01_data)).data()
    assert(null != websocket_register_envelope_ref01_data)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/websocket_register_envelope/WebsocketRegisterEnvelopeTestData.json')

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
    ['websocket_register_envelope01','websocket_register_envelope02','websocket_register_envelope03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'NEWSDATA_TEST_WEBSOCKET_REGISTER_ENVELOPE_ENTID': idmap,
    'NEWSDATA_TEST_LIVE': 'FALSE',
    'NEWSDATA_TEST_EXPLAIN': 'FALSE',
    'NEWSDATA_APIKEY': '',
  })

  idmap = env['NEWSDATA_TEST_WEBSOCKET_REGISTER_ENVELOPE_ENTID']

  const live = 'TRUE' === env.NEWSDATA_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['NEWSDATA_TEST_WEBSOCKET_REGISTER_ENVELOPE_ENTID']
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
  
