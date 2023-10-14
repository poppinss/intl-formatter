/*
 * @poppinss/intl-formatter
 *
 * (c) Poppinss
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

// @ts-expect-error
import benchmark from 'benchmark'
import formatters from '../index.js'

const suite = new benchmark.Suite()

suite
  .add('PluralRules@memoize', function () {
    formatters.plural('en', { type: 'ordinal' }).select(10)
  })
  .add('PluralRules', function () {
    new Intl.PluralRules('en', { type: 'ordinal' }).select(10)
  })
  .on('cycle', function (event: any) {
    console.log(String(event.target))
  })
  .on('complete', function (this: any) {
    console.log('Fastest is ' + this.filter('fastest').map('name'))
  })
  .run({ async: false })
