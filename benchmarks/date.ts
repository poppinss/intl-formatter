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
const date = new Date()

suite
  .add('DateTimeFormat@memoize', function () {
    formatters.date('en', {}).format(date)
  })
  .add('DateTimeFormat', function () {
    new Intl.DateTimeFormat('en', {}).format(date)
  })
  .on('cycle', function (event: any) {
    console.log(String(event.target))
  })
  .on('complete', function (this: any) {
    console.log('Fastest is ' + this.filter('fastest').map('name'))
  })
  .run({ async: false })
