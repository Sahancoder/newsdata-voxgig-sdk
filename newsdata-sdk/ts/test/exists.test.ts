
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { NewsdataSDK } from '..'


describe('exists', async () => {

  test('test-mode', () => {
    const testsdk = NewsdataSDK.test()
    equal(testsdk instanceof NewsdataSDK, true,
      'NewsdataSDK.test() must return a client synchronously')
  })

})
