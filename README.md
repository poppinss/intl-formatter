<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
## Table of contents

- [@poppinss/intl-formatter](#poppinssintl-formatter)
  - [Usage](#usage)
  - [Available formatters](#available-formatters)
  - [Why not use FormatJS?](#why-not-use-formatjs)
  - [Benchmarks](#benchmarks)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# @poppinss/intl-formatter
> Memoized API for Intl (To be used within Node)

[![github-actions-image]][github-actions-url] [![npm-image]][npm-url] [![license-image]][license-url] [![typescript-image]][typescript-url]

The `intl-formatter` package ships with the memoized version of the `Intl` API. Creating new instances of the `new Intl.<AnyFormatter>` is painfully slow ([see benchmarks](#benchmarks)) and this package just caches those instances for re-use.

- The API is 100% indentical to the official spec. Instead of writing `new Intl.DateTimeFormat()`, you write `formatters.date()` and rest is all the same.
- All arguments are deeply compared during memoization.

## Usage
Install the package from npm registry as follows:

```sh
npm i @poppinss/intl-formatter

# Yarn friends
yarn add @poppinss/intl-formatter
```

And use it as follows:

```ts
import { formatters } from '@poppinss/intl-formatter'

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

## Why not use FormatJS?
FormatJS is a great and a popular library for Internationalization. However, it comes with large polyfills for platforms (especially certain browser) that does not have complete support for Intl. 

Whereas, this package relies on the native Intl APIs available in Node runtime and caches the instances for re-use and performance.

## Benchmarks

**DateTimeFormat**

```
DateTimeFormat@memoize x 1,031,069 ops/sec ±0.22% (96 runs sampled)
DateTimeFormat x 16,338 ops/sec ±16.30% (82 runs sampled)

Fastest is DateTimeFormat@memoize
```

**NumberFormat**

```
NumberFormat@memoize x 2,740,775 ops/sec ±0.29% (94 runs sampled)
NumberFormat x 67,829 ops/sec ±1.75% (95 runs sampled)

Fastest is NumberFormat@memoize
```

**PluralRules**

```
PluralRules@memoize x 2,240,552 ops/sec ±0.22% (91 runs sampled)
PluralRules x 55,671 ops/sec ±5.13% (92 runs sampled)

Fastest is PluralRules@memoize
```

**RelativeTimeFormat**

```
RelativeTimeFormat@memoize x 2,344,764 ops/sec ±0.24% (96 runs sampled)
RelativeTimeFormat x 79,338 ops/sec ±4.08% (83 runs sampled)

Fastest is RelativeTimeFormat@memoize
```

[github-actions-image]: https://img.shields.io/github/workflow/status/poppinss/intl-formatter/test?style=for-the-badge
[github-actions-url]: https://github.com/poppinss/intl-formatter/actions/workflows/test.yml "github-actions"

[npm-image]: https://img.shields.io/npm/v/@poppinss/intl-formatter.svg?style=for-the-badge&logo=npm
[npm-url]: https://npmjs.org/package/@poppinss/intl-formatter "npm"

[license-image]: https://img.shields.io/npm/l/@poppinss/intl-formatter?color=blueviolet&style=for-the-badge
[license-url]: LICENSE.md "license"

[typescript-image]: https://img.shields.io/badge/Typescript-294E80.svg?style=for-the-badge&logo=typescript
[typescript-url]:  "typescript"
