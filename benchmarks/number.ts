import { Suite } from 'benchmark'
import { formatters } from '../index'

const suite = new Suite()

suite
  .add('NumberFormat@memoize', function () {
    formatters.number('en', { style: 'currency', currency: 'INR' }).format(100)
  })
  .add('NumberFormat', function () {
    new Intl.NumberFormat('en', { style: 'currency', currency: 'INR' }).format(100)
  })
  .on('cycle', function (event) {
    console.log(String(event.target))
  })
  .on('complete', function () {
    console.log('Fastest is ' + this.filter('fastest').map('name'))
  })
  .run({ async: false })
