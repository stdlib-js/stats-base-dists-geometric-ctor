/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

/* eslint-disable no-restricted-syntax, no-invalid-this */

'use strict';

// MODULES //

var defineProperty = require( '@stdlib/utils-define-property' );
var setReadOnly = require( '@stdlib/utils-define-nonenumerable-read-only-property' );
var setReadOnlyAccessor = require( '@stdlib/utils-define-nonenumerable-read-only-accessor' );
var isProbability = require( '@stdlib/assert-is-probability' ).isPrimitive;
var entropy = require( '@stdlib/stats-base-dists-geometric-entropy' );
var kurtosis = require( '@stdlib/stats-base-dists-geometric-kurtosis' );
var mean = require( '@stdlib/stats-base-dists-geometric-mean' );
var median = require( '@stdlib/stats-base-dists-geometric-median' );
var mode = require( '@stdlib/stats-base-dists-geometric-mode' );
var skewness = require( '@stdlib/stats-base-dists-geometric-skewness' );
var stdev = require( '@stdlib/stats-base-dists-geometric-stdev' );
var variance = require( '@stdlib/stats-base-dists-geometric-variance' );
var cdf = require( '@stdlib/stats-base-dists-geometric-cdf' );
var logcdf = require( '@stdlib/stats-base-dists-geometric-logcdf' );
var logpmf = require( '@stdlib/stats-base-dists-geometric-logpmf' );
var mgf = require( '@stdlib/stats-base-dists-geometric-mgf' );
var pmf = require( '@stdlib/stats-base-dists-geometric-pmf' );
var quantile = require( '@stdlib/stats-base-dists-geometric-quantile' );
var format = require( '@stdlib/string-format' );


// FUNCTIONS //

/**
* Evaluates the cumulative distribution function (CDF).
*
* @private
* @param {number} x - input value
* @returns {number} evaluated CDF
*/
function geometricCDF( x ) {
	return cdf( x, this.p );
}

/**
* Evaluates the natural logarithm of the cumulative distribution function (CDF).
*
* @private
* @param {number} x - input value
* @returns {number} evaluated logCDF
*/
function geometricLogCDF( x ) {
	return logcdf( x, this.p );
}

/**
* Evaluates the natural logarithm of the probability mass function (PMF).
*
* @private
* @param {number} x - input value
* @returns {number} evaluated logPMF
*/
function geometricLogPMF( x ) {
	return logpmf( x, this.p );
}

/**
* Evaluates the moment-generating function (MGF).
*
* @private
* @param {number} t - input value
* @returns {number} evaluated MGF
*/
function geometricMGF( t ) {
	return mgf( t, this.p );
}

/**
* Evaluates the probability mass function (PMF).
*
* @private
* @param {number} x - input value
* @returns {number} evaluated PMF
*/
function geometricPMF( x ) {
	return pmf( x, this.p );
}

/**
* Evaluates the quantile function.
*
* @private
* @param {Probability} p - input probability
* @returns {number} evaluated quantile function
*/
function geometricQuantile( p ) {
	return quantile( p, this.p );
}


// MAIN //

/**
* Geometric distribution constructor.
*
* @constructor
* @param {Probability} [p=0.5] - success probability
* @throws {TypeError} `p` must be a probability
* @returns {Geometric} distribution instance
*
* @example
* var geometric = new Geometric();
*
* var y = geometric.cdf( 1.8 );
* // returns 0.75
*
* var v = geometric.mode;
* // returns 0.0
*/
function Geometric() {
	var p;
	if ( !(this instanceof Geometric) ) {
		if ( arguments.length === 0 ) {
			return new Geometric();
		}
		return new Geometric( arguments[ 0 ] );
	}
	if ( arguments.length ) {
		p = arguments[ 0 ];
		if ( !isProbability( p ) ) {
			throw new TypeError( format( 'invalid argument. Mean parameter `%s` must be a probability. Value: `%s`.', 'p', p ) );
		}
	} else {
		p = 0.5;
	}
	defineProperty( this, 'p', {
		'configurable': false,
		'enumerable': true,
		'get': function get() {
			return p;
		},
		'set': function set( value ) {
			if ( !isProbability( value ) ) {
				throw new TypeError( format( 'invalid assignment. Must be a probability. Value: `%s`.', value ) );
			}
			p = value;
		}
	});
	return this;
}

/**
* Geometric distribution differential entropy.
*
* @name entropy
* @memberof Geometric.prototype
* @type {number}
* @see [differential entropy]{@link https://en.wikipedia.org/wiki/Entropy_%28information_theory%29}
*
* @example
* var geometric = new Geometric( 0.4 );
*
* var v = geometric.entropy;
* // returns ~1.683
*/
setReadOnlyAccessor( Geometric.prototype, 'entropy', function get() {
	return entropy( this.p );
});

/**
* Geometric distribution excess kurtosis.
*
* @name kurtosis
* @memberof Geometric.prototype
* @type {number}
* @see [kurtosis]{@link https://en.wikipedia.org/wiki/Kurtosis}
*
* @example
* var geometric = new Geometric( 0.4 );
*
* var v = geometric.kurtosis;
* // returns ~6.267
*/
setReadOnlyAccessor( Geometric.prototype, 'kurtosis', function get() {
	return kurtosis( this.p );
});

/**
* Geometric distribution expected value.
*
* @name mean
* @memberof Geometric.prototype
* @type {number}
* @see [expected value]{@link https://en.wikipedia.org/wiki/Expected_value}
*
* @example
* var geometric = new Geometric( 0.4 );
*
* var v = geometric.mean;
* // returns ~1.5
*/
setReadOnlyAccessor( Geometric.prototype, 'mean', function get() {
	return mean( this.p );
});

/**
* Geometric distribution median.
*
* @name median
* @memberof Geometric.prototype
* @type {number}
* @see [median]{@link https://en.wikipedia.org/wiki/Median}
*
* @example
* var geometric = new Geometric( 0.4 );
*
* var v = geometric.median;
* // returns 1.0
*/
setReadOnlyAccessor( Geometric.prototype, 'median', function get() {
	return median( this.p );
});

/**
* Geometric distribution mode.
*
* @name mode
* @memberof Geometric.prototype
* @type {number}
* @see [mode]{@link https://en.wikipedia.org/wiki/Mode_%28statistics%29}
*
* @example
* var geometric = new Geometric( 0.4 );
*
* var v = geometric.mode;
* // returns 0.0
*/
setReadOnlyAccessor( Geometric.prototype, 'mode', function get() {
	return mode( this.p );
});

/**
* Geometric distribution skewness.
*
* @name skewness
* @memberof Geometric.prototype
* @type {number}
* @see [skewness]{@link https://en.wikipedia.org/wiki/Skewness}
*
* @example
* var geometric = new Geometric( 0.4 );
*
* var v = geometric.skewness;
* // returns ~2.066
*/
setReadOnlyAccessor( Geometric.prototype, 'skewness', function get() {
	return skewness( this.p );
});

/**
* Geometric distribution standard deviation.
*
* @name stdev
* @memberof Geometric.prototype
* @type {PositiveNumber}
* @see [standard deviation]{@link https://en.wikipedia.org/wiki/Standard_deviation}
*
* @example
* var geometric = new Geometric( 0.4 );
*
* var v = geometric.stdev;
* // returns ~1.936
*/
setReadOnlyAccessor( Geometric.prototype, 'stdev', function get() {
	return stdev( this.p );
});

/**
* Geometric distribution variance.
*
* @name variance
* @memberof Geometric.prototype
* @type {PositiveNumber}
* @see [variance]{@link https://en.wikipedia.org/wiki/Variance}
*
* @example
* var geometric = new Geometric( 0.4 );
*
* var v = geometric.variance;
* // returns ~3.75
*/
setReadOnlyAccessor( Geometric.prototype, 'variance', function get() {
	return variance( this.p );
});

/**
* Evaluates the cumulative distribution function (CDF).
*
* @name cdf
* @memberof Geometric.prototype
* @type {Function}
* @param {number} x - input value
* @returns {number} evaluated CDF
* @see [cdf]{@link https://en.wikipedia.org/wiki/Cumulative_distribution_function}
*
* @example
* var geometric = new Geometric( 0.2 );
*
* var v = geometric.cdf( 1.5 );
* // returns ~0.36
*/
setReadOnly( Geometric.prototype, 'cdf', geometricCDF );

/**
* Evaluates the natural logarithm of the cumulative distribution function (logCDF).
*
* @name logcdf
* @memberof Geometric.prototype
* @type {Function}
* @param {number} x - input value
* @returns {number} evaluated logCDF
* @see [cdf]{@link https://en.wikipedia.org/wiki/Cumulative_distribution_function}
*
* @example
* var geometric = new Geometric( 0.2 );
*
* var v = geometric.logcdf( 1.5 );
* // returns ~-1.022
*/
setReadOnly( Geometric.prototype, 'logcdf', geometricLogCDF );

/**
* Evaluates the natural logarithm of the probability mass function (logPMF).
*
* @name logpdf
* @memberof Geometric.prototype
* @type {Function}
* @param {number} x - input value
* @returns {number} evaluated logPMF
* @see [pmf]{@link https://en.wikipedia.org/wiki/Probability_mass_function}
*
* @example
* var geometric = new Geometric( 0.2 );
*
* var v = geometric.logpmf( 2.0 );
* // returns ~-2.056
*/
setReadOnly( Geometric.prototype, 'logpmf', geometricLogPMF );

/**
* Evaluates the moment-generating function (MGF).
*
* @name mgf
* @memberof Geometric.prototype
* @type {Function}
* @param {number} t - input value
* @returns {number} evaluated MGF
* @see [mgf]{@link https://en.wikipedia.org/wiki/Moment-generating_function}
*
* @example
* var geometric = new Geometric( 0.2 );
*
* var v = geometric.mgf( 0.1 );
* // returns ~1.908
*/
setReadOnly( Geometric.prototype, 'mgf', geometricMGF );

/**
* Evaluates the probability mass function (PMF).
*
* @name pmf
* @memberof Geometric.prototype
* @type {Function}
* @param {number} x - input value
* @returns {number} evaluated PMF
* @see [pmf]{@link https://en.wikipedia.org/wiki/Probability_mass_function}
*
* @example
* var geometric = new Geometric( 0.2 );
*
* var v = geometric.pmf( 2.0 );
* // returns ~0.128
*
* v = geometric.pmf( 0.8 );
* // returns 0.0
*/
setReadOnly( Geometric.prototype, 'pmf', geometricPMF );

/**
* Evaluates the quantile function.
*
* @name quantile
* @memberof Geometric.prototype
* @type {Function}
* @param {Probability} p - input probability
* @returns {number} evaluated quantile function
* @see [quantile function]{@link https://en.wikipedia.org/wiki/Quantile_function}
*
* @example
* var geometric = new Geometric( 0.2 );
*
* var v = geometric.quantile( 0.5 );
* // returns 3.0
*/
setReadOnly( Geometric.prototype, 'quantile', geometricQuantile );


// EXPORTS //

module.exports = Geometric;
