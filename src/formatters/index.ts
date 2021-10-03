/*
 * @poppinss/intl-formatter
 *
 * (c) Harminder Virk <virk@adonisjs.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

// @todo formatList | formatDisplayName

import moize from 'moize'

export const number = moize(
  (...args: ConstructorParameters<typeof Intl['NumberFormat']>) => {
    return new Intl.NumberFormat(...args)
  },
  { isDeepEqual: true }
)

export const date = moize(
  (...args: ConstructorParameters<typeof Intl['DateTimeFormat']>) => {
    return new Intl.DateTimeFormat(...args)
  },
  { isDeepEqual: true }
)

export const plural = moize(
  (...args: ConstructorParameters<typeof Intl['PluralRules']>) => {
    return new Intl.PluralRules(...args)
  },
  { isDeepEqual: true }
)

export const relative = moize(
  (...args: ConstructorParameters<typeof Intl['RelativeTimeFormat']>) => {
    return new Intl.RelativeTimeFormat(...args)
  },
  { isDeepEqual: true }
)
