import { Suite } from 'benchmark'
import { formatters } from '../index'

const suite = new Suite()
const date = new Date()

suite
  .add('DateTimeFormat@memoize', function () {
    formatters.date('en', {}).format(date)
  })
  .add('DateTimeFormat', function () {
    new Intl.DateTimeFormat('en', {}).format(date)
  })
  .on('cycle', function (event) {
    console.log(String(event.target))
  })
  .on('complete', function () {
    console.log('Fastest is ' + this.filter('fastest').map('name'))
  })
  .run({ async: false })
