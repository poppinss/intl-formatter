/*
 * @poppinss/intl-formatter
 *
 * (c) Poppinss
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import { memoize } from 'micro-memoize'

export const number = memoize(
  (...args: ConstructorParameters<(typeof Intl)['NumberFormat']>) => {
    return new Intl.NumberFormat(...args)
  },
  { isKeyItemEqual: 'deep' }
)

export const date = memoize(
  (...args: ConstructorParameters<(typeof Intl)['DateTimeFormat']>) => {
    return new Intl.DateTimeFormat(...args)
  },
  { isKeyItemEqual: 'deep' }
)

export const plural = memoize(
  (...args: ConstructorParameters<(typeof Intl)['PluralRules']>) => {
    return new Intl.PluralRules(...args)
  },
  { isKeyItemEqual: 'deep' }
)

export const relative = memoize(
  (...args: ConstructorParameters<(typeof Intl)['RelativeTimeFormat']>) => {
    return new Intl.RelativeTimeFormat(...args)
  },
  { isKeyItemEqual: 'deep' }
)

export const list = memoize(
  (...args: ConstructorParameters<(typeof Intl)['ListFormat']>) => {
    return new Intl.ListFormat(...args)
  },
  { isKeyItemEqual: 'deep' }
)

export const displayNames = memoize(
  (...args: ConstructorParameters<(typeof Intl)['DisplayNames']>) => {
    return new Intl.DisplayNames(...args)
  },
  { isKeyItemEqual: 'deep' }
)
