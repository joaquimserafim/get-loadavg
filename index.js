/*
eslint
no-multi-spaces: ["error", {exceptions: {"VariableDeclarator": true}}]
padded-blocks: ["error", {"classes": "always"}]
max-len: ["error", 80]
*/
'use strict'
const os = require('os')

module.exports = getLoadAvg

function getLoadAvg () {
  return {
    one: procLoadAvg(os.cpus().length, os.loadavg()[0]),
    five: procLoadAvg(os.cpus().length, os.loadavg()[1]),
    fifteen: procLoadAvg(os.cpus().length, os.loadavg()[2])
  }
}

function procLoadAvg (cpus, loadavg) {
  return loadavg < cpus
    ? {idle: +(100 - (loadavg * 100 / cpus)).toFixed(2)}
    : {
      overload: +(loadavg * 100 - 100 * cpus).toFixed(2),
      processes: +(loadavg - cpus).toFixed(2)
    }
}

