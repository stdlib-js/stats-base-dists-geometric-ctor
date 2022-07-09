<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# Geometric

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Geometric distribution constructor.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->



<section class="usage">

## Usage

To use in Observable,

```javascript
Geometric = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-geometric-ctor@umd/browser.js' )
```

To vendor stdlib functionality and avoid installing dependency trees for Node.js, you can use the UMD server build:

```javascript
var Geometric = require( 'path/to/vendor/umd/stats-base-dists-geometric-ctor/index.js' )
```

To include the bundle in a webpage,

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-geometric-ctor@umd/browser.js"></script>
```

If no recognized module system is present, access bundle contents via the global scope:

```html
<script type="text/javascript">
(function () {
    window.Geometric;
})();
</script>
```

#### Geometric( \[p] )

Returns a [geometric][geometric-distribution] distribution object.

```javascript
var geometric = new Geometric();

var mean = geometric.mean;
// returns 1.0
```

By default, `p = 0.5`. To create a distribution having a different success probability `p`, provide a parameter value.

```javascript
var geometric = new Geometric( 0.2 );

var mean = geometric.mean;
// returns 4.0
```

* * *

## geometric

A [geometric][geometric-distribution] distribution object has the following properties and methods...

### Writable Properties

#### geometric.p

Success probability of the distribution. `p` **must** be a probability.

```javascript
var geometric = new Geometric( 0.2 );

var p = geometric.p;
// returns 0.2

geometric.p = 0.3;

p = geometric.p;
// returns 0.3
```

* * *

### Computed Properties

#### Geometric.prototype.entropy

Returns the [differential entropy][entropy].

```javascript
var geometric = new Geometric( 0.4 );

var entropy = geometric.entropy;
// returns ~1.683
```

#### Geometric.prototype.kurtosis

Returns the [excess kurtosis][kurtosis].

```javascript
var geometric = new Geometric( 0.4 );

var kurtosis = geometric.kurtosis;
// returns ~6.267
```

#### Geometric.prototype.mean

Returns the [median][expected-value].

```javascript
var geometric = new Geometric( 0.4 );

var mu = geometric.mean;
// returns ~1.5
```

#### Geometric.prototype.median

Returns the [median][median].

```javascript
var geometric = new Geometric( 0.4 );

var median = geometric.median;
// returns 1.0
```

#### Geometric.prototype.mode

Returns the [mode][mode].

```javascript
var geometric = new Geometric( 0.4 );

var mode = geometric.mode;
// returns 0.0
```

#### Geometric.prototype.skewness

Returns the [skewness][skewness].

```javascript
var geometric = new Geometric( 0.4 );

var skewness = geometric.skewness;
// returns ~2.066
```

#### Geometric.prototype.stdev

Returns the [standard deviation][standard-deviation].

```javascript
var geometric = new Geometric( 0.4 );

var s = geometric.stdev;
// returns ~1.936
```

#### Geometric.prototype.variance

Returns the [variance][variance].

```javascript
var geometric = new Geometric( 0.4 );

var s2 = geometric.variance;
// returns ~3.75
```

* * *

### Methods

#### Geometric.prototype.cdf( x )

Evaluates the [cumulative distribution function][cdf] (CDF).

```javascript
var geometric = new Geometric( 0.2 );

var y = geometric.cdf( 0.5 );
// returns ~0.2
```

#### Geometric.prototype.logcdf( x )

Evaluates the natural logarithm of the [cumulative distribution function][cdf] (logCDF).

```javascript
var geometric = new Geometric( 0.2 );

var y = geometric.logcdf( 0.5 );
// returns ~-1.609
```

#### Geometric.prototype.logpmf( x )

Evaluates the natural logarithm of the [probability mass function][pmf] (logPMF).

```javascript
var geometric = new Geometric( 0.2 );

var y = geometric.logpmf( 3.0 );
// returns ~-2.279

y = geometric.logpmf( 2.3 );
// returns -Infinity
```

#### Geometric.prototype.mgf( t )

Evaluates the [moment-generating function][mgf] (MGF).

```javascript
var geometric = new Geometric( 0.2 );

var y = geometric.mgf( 0.1 );
// returns ~1.908
```

#### Geometric.prototype.pmf( x )

Evaluates the [probability mass function][pmf] (PMF).

```javascript
var geometric = new Geometric( 0.2 );

var y = geometric.pmf( 3.0 );
// returns ~0.102

y = geometric.pmf( 2.3 );
// returns 0.0
```

#### Geometric.prototype.quantile( p )

Evaluates the [quantile function][quantile-function] at probability `p`.

```javascript
var geometric = new Geometric( 0.2 );

var y = geometric.quantile( 0.5 );
// returns 3.0

y = geometric.quantile( 1.9 );
// returns NaN
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

* * *

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-geometric-ctor@umd/browser.js"></script>
<script type="text/javascript">
(function () {

var geometric = new Geometric( 0.5 );

var mu = geometric.mean;
// returns 1.0

var mode = geometric.mode;
// returns 0.0

var s2 = geometric.variance;
// returns 2.0

var y = geometric.cdf( 2.0 );
// returns 0.875

})();
</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2022. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/stats-base-dists-geometric-ctor.svg
[npm-url]: https://npmjs.org/package/@stdlib/stats-base-dists-geometric-ctor

[test-image]: https://github.com/stdlib-js/stats-base-dists-geometric-ctor/actions/workflows/test.yml/badge.svg?branch=v0.0.8
[test-url]: https://github.com/stdlib-js/stats-base-dists-geometric-ctor/actions/workflows/test.yml?query=branch:v0.0.8

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/stats-base-dists-geometric-ctor/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/stats-base-dists-geometric-ctor?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/stats-base-dists-geometric-ctor.svg
[dependencies-url]: https://david-dm.org/stdlib-js/stats-base-dists-geometric-ctor/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/stats-base-dists-geometric-ctor/tree/deno
[umd-url]: https://github.com/stdlib-js/stats-base-dists-geometric-ctor/tree/umd
[esm-url]: https://github.com/stdlib-js/stats-base-dists-geometric-ctor/tree/esm
[branches-url]: https://github.com/stdlib-js/stats-base-dists-geometric-ctor/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/stats-base-dists-geometric-ctor/main/LICENSE

[geometric-distribution]: https://en.wikipedia.org/wiki/Geometric_distribution

[cdf]: https://en.wikipedia.org/wiki/Cumulative_distribution_function

[mgf]: https://en.wikipedia.org/wiki/Moment-generating_function

[pmf]: https://en.wikipedia.org/wiki/Probability_mass_function

[quantile-function]: https://en.wikipedia.org/wiki/Quantile_function

[entropy]: https://en.wikipedia.org/wiki/Entropy_%28information_theory%29

[expected-value]: https://en.wikipedia.org/wiki/Expected_value

[kurtosis]: https://en.wikipedia.org/wiki/Kurtosis

[median]: https://en.wikipedia.org/wiki/Median

[mode]: https://en.wikipedia.org/wiki/Mode_%28statistics%29

[skewness]: https://en.wikipedia.org/wiki/Skewness

[standard-deviation]: https://en.wikipedia.org/wiki/Standard_deviation

[variance]: https://en.wikipedia.org/wiki/Variance

</section>

<!-- /.links -->
