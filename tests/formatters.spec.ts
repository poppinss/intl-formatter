/*
 * @poppinss/intl-formatter
 *
 * (c) Poppinss
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import { test } from '@japa/runner'
import formatters from '../index.js'

test.group('formatters', () => {
  test('format a number', ({ assert }) => {
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

  test('format a date', ({ assert }) => {
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

  test('select plural rules', ({ assert }) => {
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

  test('format relative time', ({ assert }) => {
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

  test('format a list', ({ assert }) => {
    assert.equal(
      formatters
        .list('en-in', { style: 'short', type: 'disjunction' })
        .format(['Motorcycle', 'Bus', 'Car']),
      'Motorcycle, Bus or Car'
    )

    /**
     * Ensure memoize works fine when the options are changed
     */
    assert.equal(
      formatters
        .list('en-in', { style: 'long', type: 'conjunction' })
        .format(['Motorcycle', 'Bus', 'Car']),
      'Motorcycle, Bus and Car'
    )
  })

  test('format display names', ({ assert }) => {
    assert.equal(
      formatters.displayNames('en-in', { type: 'language' }).of('en-in'),
      'English (India)'
    )

    /**
     * Ensure memoize works fine when the options are changed
     */
    assert.equal(
      formatters.displayNames('en-in', { type: 'region', style: 'long' }).of('IN'),
      'India'
    )
  })
})
