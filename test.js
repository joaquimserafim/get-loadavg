/*
eslint
no-multi-spaces: ["error", {exceptions: {"VariableDeclarator": true}}]
padded-blocks: ["error", {"classes": "always"}]
max-len: ["error", 80]
*/
'use strict'

const test = require('tape')

const getLoadAvg = require('./')

// stub `os.loadavg`
require('os').loadavg = function loadavg () {
  return [9.19921875, 5.2197265625, 3.16796875]
}

require('os').cpus = function cpus () {
  return [0, 1, 2, 3]
}

test('get-loadavg', (assert) => {
  const load1 = {
    one: {
      overload: 519.92,
      processes: 5.2
    },
    five: {
      overload: 121.97,
      processes: 1.22
    },
    fifteen: {
      idle: 20.8
    }
  }

  assert.equal(
    JSON.stringify(load1),
    JSON.stringify(getLoadAvg()),
    'should return the same object'
  )

  assert.end()
})

