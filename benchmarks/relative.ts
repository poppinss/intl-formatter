import { Suite } from 'benchmark'
import { formatters } from '../index'

const suite = new Suite()

suite
  .add('RelativeTimeFormat@memoize', function () {
    formatters.relative('en', { style: 'narrow' }).format(24, 'minutes')
  })
  .add('RelativeTimeFormat', function () {
    new Intl.RelativeTimeFormat('en', { style: 'narrow' }).format(24, 'minutes')
  })
  .on('cycle', function (event) {
    console.log(String(event.target))
  })
  .on('complete', function () {
    console.log('Fastest is ' + this.filter('fastest').map('name'))
  })
  .run({ async: false })
