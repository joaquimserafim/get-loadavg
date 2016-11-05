# get-loadavg

returns the load average for the Unix-like systems but in an object

----
<a href="https://nodei.co/npm/get-loadavg/"><img src="https://nodei.co/npm/get-loadavg.png?downloads=true"></a>

[![Build Status](https://img.shields.io/badge/build-passing-brightgreen.svg?style=flat-square)](https://travis-ci.org/joaquimserafim/get-loadavg)![Code Coverage 100%](https://img.shields.io/badge/code%20coverage-100%25-green.svg?style=flat-square)[![ISC License](https://img.shields.io/badge/license-ISC-blue.svg?style=flat-square)](https://github.com/joaquimserafim/get-loadavg/blob/master/LICENSE)[![NodeJS](https://img.shields.io/badge/node-6.1.x-brightgreen.svg?style=flat-square)](https://github.com/joaquimserafim/get-loadavg/blob/master/package.json#L33)

[![JavaScript Style Guide](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)


### api
**returns an object with the following properties:**

* **idle** % of CPU idle of the time - this property should be returned when the load is below the number of CPUs
* **overload** % of CPU overloaded on average - this property should be returned when the load is above the number of CPUs
* **processes** % of processes were waiting for the CPU - this property should be returned when the load is above the number of CPUs

### example


```js
const getLoadAvg = require('get-loadavg')

// let's suppose that the current loadavg is [9.19921875, 5.2197265625, 3.16796875]
getLoadAvg()
// should return
{
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
```



#### ISC License (ISC)
