# @poppinss/intl-formatter
> Memoized API for Intl (To be used within Node.js)

[![gh-workflow-image]][gh-workflow-url] [![typescript-image]][typescript-url] [![npm-image]][npm-url] [![license-image]][license-url]

The `intl-formatter` package ships with the memoized version of the `Intl` API. Creating new instances of the `new Intl.<AnyFormatter>` is painfully slow ([see benchmarks](#benchmarks)), and this package caches those instances for re-use.

- The API is 100% identical to the official spec, instead of writing `new Intl.DateTimeFormat()`, you write `formatters.date()`, and the rest is all the same.
- All arguments are deeply compared during memoization.

## Usage
Install the package from the npm registry as follows:

```sh
npm i @poppinss/intl-formatter

# Yarn friends
yarn add @poppinss/intl-formatter
```

And use it as follows:

```ts
import formatters from '@poppinss/intl-formatter'

const amount = formatters
  .number('en-in', { style: 'currency', currency: 'INR' })
  .format(10)

console.log(amount)
```

## Available formatters

- `formatters.number` same as [Intl.NumberFormat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat)
- `formatters.date` same as [Intl.DateTimeFormat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat)
- `formatters.relative` same as [Intl.RelativeTimeFormat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat/RelativeTimeFormat)
- `formatters.plural` same as [Intl.PluralRules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/PluralRules/PluralRules)
- `formatters.list` same as [Intl.ListFormat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/ListFormat/ListFormat)
- `formatters.displayNames` same as [Intl.DisplayNames](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DisplayNames/DisplayNames)

## Why not use FormatJS?
FormatJS is a great and popular library for Internationalization. However, it has a large set of polyfills for different platforms (especially for browsers) that do not have complete support for Intl. 

This package relies on the native Intl APIs available in Node.js runtime and caches the instances for re-use and performance.

## Benchmarks

**DateTimeFormat**

```
DateTimeFormat@memoize x 1,115,507 ops/sec ±0.22% (94 runs sampled)
DateTimeFormat x 20,042 ops/sec ±20.76% (75 runs sampled)

Fastest is DateTimeFormat@memoize
```

**NumberFormat**

```
NumberFormat@memoize x 2,874,842 ops/sec ±0.28% (97 runs sampled)
NumberFormat x 74,720 ops/sec ±1.14% (97 runs sampled)

Fastest is NumberFormat@memoize
```

**PluralRules**

```
PluralRules@memoize x 2,381,739 ops/sec ±0.63% (97 runs sampled)
PluralRules x 62,113 ops/sec ±2.88% (91 runs sampled)

Fastest is PluralRules@memoize
```

**RelativeTimeFormat**

```
RelativeTimeFormat@memoize x 2,426,178 ops/sec ±1.11% (92 runs sampled)
RelativeTimeFormat x 89,485 ops/sec ±3.48% (84 runs sampled)

Fastest is RelativeTimeFormat@memoize
```

**ListFormat**

```
ListFormat@memoize x 1,501,976 ops/sec ±1.94% (97 runs sampled)
ListFormat x 244,943 ops/sec ±0.93% (97 runs sampled)

Fastest is ListFormat@memoize
```

**DisplayNames**

```
DisplayNames@memoize x 299,573 ops/sec ±0.56% (93 runs sampled)
DisplayNames x 106,279 ops/sec ±1.32% (94 runs sampled)

Fastest is DisplayNames@memoize
```

[gh-workflow-image]: https://img.shields.io/github/actions/workflow/status/poppinss/intl-formatter/checks.yml?style=for-the-badge
[gh-workflow-url]: https://github.com/poppinss/intl-formatter/actions/workflows/checks.yml "github-actions"

[npm-image]: https://img.shields.io/npm/v/@poppinss/intl-formatter.svg?style=for-the-badge&logo=npm
[npm-url]: https://npmjs.org/package/@poppinss/intl-formatter "npm"

[license-image]: https://img.shields.io/npm/l/@poppinss/intl-formatter?color=blueviolet&style=for-the-badge
[license-url]: LICENSE.md "license"

[typescript-image]: https://img.shields.io/badge/Typescript-294E80.svg?style=for-the-badge&logo=typescript
[typescript-url]:  "typescript"
