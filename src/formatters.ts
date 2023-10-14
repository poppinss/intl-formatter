/*
 * @poppinss/intl-formatter
 *
 * (c) Poppinss
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

// @todo formatList | formatDisplayName

import moize from 'moize'

export const number = moize.default(
  (...args: ConstructorParameters<(typeof Intl)['NumberFormat']>) => {
    return new Intl.NumberFormat(...args)
  },
  { isDeepEqual: true }
)

export const date = moize.default(
  (...args: ConstructorParameters<(typeof Intl)['DateTimeFormat']>) => {
    return new Intl.DateTimeFormat(...args)
  },
  { isDeepEqual: true }
)

export const plural = moize.default(
  (...args: ConstructorParameters<(typeof Intl)['PluralRules']>) => {
    return new Intl.PluralRules(...args)
  },
  { isDeepEqual: true }
)

export const relative = moize.default(
  (...args: ConstructorParameters<(typeof Intl)['RelativeTimeFormat']>) => {
    return new Intl.RelativeTimeFormat(...args)
  },
  { isDeepEqual: true }
)

export const list = moize.default(
  (...args: ConstructorParameters<(typeof Intl)['ListFormat']>) => {
    return new Intl.ListFormat(...args)
  },
  { isDeepEqual: true }
)

export const displayNames = moize.default(
  (...args: ConstructorParameters<(typeof Intl)['DisplayNames']>) => {
    return new Intl.DisplayNames(...args)
  },
  { isDeepEqual: true }
)
