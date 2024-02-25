// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-property@v0.2.1-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-accessor@v0.2.2-esm/index.mjs";import{isPrimitive as i}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-probability@v0.2.1-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-geometric-entropy@v0.2.1-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-geometric-kurtosis@v0.2.1-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-geometric-mean@v0.2.1-esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-geometric-median@v0.2.1-esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-geometric-mode@v0.2.1-esm/index.mjs";import p from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-geometric-skewness@v0.2.1-esm/index.mjs";import c from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-geometric-stdev@v0.2.1-esm/index.mjs";import h from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-geometric-variance@v0.2.1-esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-geometric-cdf@v0.2.0-esm/index.mjs";import f from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-geometric-logcdf@v0.2.0-esm/index.mjs";import j from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-geometric-logpmf@v0.2.1-esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-geometric-mgf@v0.2.0-esm/index.mjs";import u from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-geometric-pmf@v0.2.0-esm/index.mjs";import g from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-geometric-quantile@v0.2.1-esm/index.mjs";import v from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.2.1-esm/index.mjs";function b(){var s;if(!(this instanceof b))return 0===arguments.length?new b:new b(arguments[0]);if(arguments.length){if(!i(s=arguments[0]))throw new TypeError(v("11P92","p",s))}else s=.5;return t(this,"p",{configurable:!1,enumerable:!0,get:function(){return s},set:function(t){if(!i(t))throw new TypeError(v("11P8h",t));s=t}}),this}e(b.prototype,"entropy",(function(){return r(this.p)})),e(b.prototype,"kurtosis",(function(){return n(this.p)})),e(b.prototype,"mean",(function(){return o(this.p)})),e(b.prototype,"median",(function(){return d(this.p)})),e(b.prototype,"mode",(function(){return m(this.p)})),e(b.prototype,"skewness",(function(){return p(this.p)})),e(b.prototype,"stdev",(function(){return c(this.p)})),e(b.prototype,"variance",(function(){return h(this.p)})),s(b.prototype,"cdf",(function(t){return l(t,this.p)})),s(b.prototype,"logcdf",(function(t){return f(t,this.p)})),s(b.prototype,"logpmf",(function(t){return j(t,this.p)})),s(b.prototype,"mgf",(function(t){return a(t,this.p)})),s(b.prototype,"pmf",(function(t){return u(t,this.p)})),s(b.prototype,"quantile",(function(t){return g(t,this.p)}));export{b as default};
//# sourceMappingURL=index.mjs.map
