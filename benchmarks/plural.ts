import { Suite } from 'benchmark'
import { formatters } from '../index'

const suite = new Suite()

suite
  .add('PluralRules@memoize', function () {
    formatters.plural('en', { type: 'ordinal' }).select(10)
  })
  .add('PluralRules', function () {
    new Intl.PluralRules('en', { type: 'ordinal' }).select(10)
  })
  .on('cycle', function (event) {
    console.log(String(event.target))
  })
  .on('complete', function () {
    console.log('Fastest is ' + this.filter('fastest').map('name'))
  })
  .run({ async: false })
