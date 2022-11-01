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
  .add('RelativeTimeFormat@memoize', function () {
    formatters.relative('en', { style: 'narrow' }).format(24, 'minutes')
  })
  .add('RelativeTimeFormat', function () {
    new Intl.RelativeTimeFormat('en', { style: 'narrow' }).format(24, 'minutes')
  })
  .on('cycle', function (event: any) {
    console.log(String(event.target))
  })
  .on('complete', function (this: any) {
    console.log('Fastest is ' + this.filter('fastest').map('name'))
  })
  .run({ async: false })
