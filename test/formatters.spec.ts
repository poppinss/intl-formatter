/*
 * @poppinss/utils
 *
 * (c) Harminder Virk <virk@adonisjs.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import test from 'japa'
import { formatters } from '../index'

test.group('formatters', () => {
  test('format a number', (assert) => {
    assert.equal(
      formatters.number('en-in', { style: 'currency', currency: 'INR' }).format(10),
      '₹10.00'
    )

    /**
     * Ensure memoize works fine when the options are changed
     */
    assert.equal(
      formatters.number('en-in', { style: 'currency', currency: 'USD' }).format(10),
      '$10.00'
    )
  })

  test('format a date', (assert) => {
    const date = new Date()

    assert.equal(
      formatters
        .date('en-in', {
          year: 'numeric',
          month: 'numeric',
          day: 'numeric',
        })
        .format(new Date()),
      `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
    )

    /**
     * Ensure memoize works fine when the options are changed
     */
    assert.equal(
      formatters
        .date('en-in', {
          year: '2-digit',
          month: 'numeric',
          day: 'numeric',
        })
        .format(new Date()),
      `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear().toString().slice(-2)}`
    )
  })

  test('select plural rules', (assert) => {
    assert.equal(
      formatters
        .plural('en-in', {
          type: 'ordinal',
        })
        .select(2),
      'two'
    )

    /**
     * Ensure memoize works fine when the options are changed
     */
    assert.equal(
      formatters
        .plural('en-in', {
          type: 'cardinal',
        })
        .select(2),
      'other'
    )
  })

  test('format relative time', (assert) => {
    assert.equal(
      formatters
        .relative('en-in', {
          style: 'long',
        })
        .format(24, 'minute'),
      'in 24 minutes'
    )

    /**
     * Ensure memoize works fine when the options are changed
     */
    assert.equal(
      formatters
        .relative('en-in', {
          style: 'short',
        })
        .format(-24, 'minute'),
      '24 min ago'
    )
  })
})
