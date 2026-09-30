

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


describe('SourceEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when NEWSDATA_TEST_LIVE=TRUE.
  afterEach(liveDelay('NEWSDATA_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = NewsdataSDK.test()
    const ent = testsdk.Source()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.NEWSDATA_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'source.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"category":{"a":true,"h":"Category","n":"category","r":false,"sh":"Categories the source covers.","t":["`$ONE`",["`$ARRAY`","`$NULL`"]],"key$":"category","index$":0},"country":{"a":true,"h":"Country","n":"country","r":false,"sh":"Countries the source covers.","t":["`$ONE`",["`$ARRAY`","`$NULL`"]],"key$":"country","index$":1},"description":{"a":true,"h":"Description","n":"description","r":false,"sh":"Short description of the source.","t":["`$ONE`",["`$STRING`","`$NULL`"]],"key$":"description","index$":2},"icon":{"a":true,"fo":"uri","h":"Icon","n":"icon","r":false,"sh":"Source icon URL.","t":["`$ONE`",["`$STRING`","`$NULL`"]],"key$":"icon","index$":3},"id":{"a":true,"h":"Id","n":"id","r":true,"sh":"Source id.","t":"`$STRING`","key$":"id","index$":4},"language":{"a":true,"h":"Language","n":"language","r":false,"sh":"Languages the source publishes in.","t":["`$ONE`",["`$ARRAY`","`$NULL`"]],"key$":"language","index$":5},"last_fetch":{"a":true,"h":"Last Fetch","n":"last_fetch","r":false,"sh":"When the source was last fetched, `YYYY-MM-DD HH:MM:SS`.","t":["`$ONE`",["`$STRING`","`$NULL`"]],"key$":"last_fetch","index$":6},"name":{"a":true,"h":"Name","n":"name","r":false,"sh":"Source display name.","t":["`$ONE`",["`$STRING`","`$NULL`"]],"key$":"name","index$":7},"priority":{"a":true,"h":"Priority","n":"priority","r":false,"sh":"Source ranking (lower = higher-ranked).","t":["`$ONE`",["`$INTEGER`","`$NULL`"]],"key$":"priority","index$":8},"total_article":{"a":true,"h":"Total Article","n":"total_article","r":false,"sh":"Number of articles collected from this source.","t":["`$ONE`",["`$INTEGER`","`$NULL`"]],"key$":"total_article","index$":9},"url":{"a":true,"fo":"uri","h":"Url","n":"url","r":false,"sh":"Source website URL.","t":["`$ONE`",["`$STRING`","`$NULL`"]],"key$":"url","index$":10}},"id":{"field":"id","name":"id"},"name":"source","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /1/sources","source":"openapi3","version":2},"g":{"query":[{"a":true,"ex":"pub_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx","k":"query","n":"apikey","or":"apikey","r":false,"t":"`$STRING`","index$":0},{"a":true,"ex":"business,technology","k":"query","n":"category","or":"category","r":false,"t":"`$ARRAY`","index$":1},{"a":true,"ex":"us","k":"query","n":"country","or":"country","r":false,"t":"`$ARRAY`","index$":2},{"a":true,"ex":"bbc.com,cnn.com","k":"query","n":"domainurl","or":"domainurl","r":false,"t":"`$ARRAY`","index$":3},{"a":true,"ex":"en,hi","k":"query","n":"language","or":"language","r":false,"t":"`$ARRAY`","index$":4},{"a":true,"k":"query","n":"prioritydomain","or":"prioritydomain","r":false,"t":"`$STRING`","index$":5}]},"k":"http","m":"GET","o":"/1/sources","q":{"exist":["apikey","category","country","domainurl","language","prioritydomain"]},"r":{},"s":[{"lit":"1"},{"lit":"sources"}],"t":{"req":"`reqdata`","res":"`body.results`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"source","name__orig":"source","Name":"Source","name_":"source","name-":"source","NAME":"SOURCE","index$":6}, {"active":true,"entity":"source","key$":"BasicSourceFlow","kind":"basic","name":"BasicSourceFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"source_ref01"}}]}]}, 'Source', {"GET /1/sources":{}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let source_ref01_data = Object.values(setup.data.existing.source)[0] as any

    // LIST
    const source_ref01_ent = client.Source()
    const source_ref01_match: any = {}

    const source_ref01_list = (await source_ref01_ent.list(source_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/source/SourceTestData.json')

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
    ['source01','source02','source03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'NEWSDATA_TEST_SOURCE_ENTID': idmap,
    'NEWSDATA_TEST_LIVE': 'FALSE',
    'NEWSDATA_TEST_EXPLAIN': 'FALSE',
    'NEWSDATA_APIKEY': '',
  })

  idmap = env['NEWSDATA_TEST_SOURCE_ENTID']

  const live = 'TRUE' === env.NEWSDATA_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['NEWSDATA_TEST_SOURCE_ENTID']
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
  
