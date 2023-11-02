"use strict";var f=function(e,i){return function(){return i||e((i={exports:{}}).exports,i),i.exports}};var a=f(function(T,s){
var c=require('@stdlib/utils-define-property/dist'),n=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),t=require('@stdlib/utils-define-nonenumerable-read-only-accessor/dist'),u=require('@stdlib/assert-is-probability/dist').isPrimitive,g=require('@stdlib/stats-base-dists-geometric-entropy/dist'),m=require('@stdlib/stats-base-dists-geometric-kurtosis/dist'),v=require('@stdlib/stats-base-dists-geometric-mean/dist'),y=require('@stdlib/stats-base-dists-geometric-median/dist'),q=require('@stdlib/stats-base-dists-geometric-mode/dist'),h=require('@stdlib/stats-base-dists-geometric-skewness/dist'),l=require('@stdlib/stats-base-dists-geometric-stdev/dist'),d=require('@stdlib/stats-base-dists-geometric-variance/dist'),b=require('@stdlib/stats-base-dists-geometric-cdf/dist'),w=require('@stdlib/stats-base-dists-geometric-logcdf/dist'),F=require('@stdlib/stats-base-dists-geometric-logpmf/dist'),M=require('@stdlib/stats-base-dists-geometric-mgf/dist'),P=require('@stdlib/stats-base-dists-geometric-pmf/dist'),k=require('@stdlib/stats-base-dists-geometric-quantile/dist'),p=require('@stdlib/error-tools-fmtprodmsg/dist');function x(e){return b(e,this.p)}function C(e){return w(e,this.p)}function D(e){return F(e,this.p)}function E(e){return M(e,this.p)}function G(e){return P(e,this.p)}function L(e){return k(e,this.p)}function r(){var e;if(!(this instanceof r))return arguments.length===0?new r:new r(arguments[0]);if(arguments.length){if(e=arguments[0],!u(e))throw new TypeError(p('11P92',"p",e))}else e=.5;return c(this,"p",{configurable:!1,enumerable:!0,get:function(){return e},set:function(o){if(!u(o))throw new TypeError(p('11P8h',o));e=o}}),this;}t(r.prototype,"entropy",function(){return g(this.p)});t(r.prototype,"kurtosis",function(){return m(this.p)});t(r.prototype,"mean",function(){return v(this.p)});t(r.prototype,"median",function(){return y(this.p)});t(r.prototype,"mode",function(){return q(this.p)});t(r.prototype,"skewness",function(){return h(this.p)});t(r.prototype,"stdev",function(){return l(this.p)});t(r.prototype,"variance",function(){return d(this.p)});n(r.prototype,"cdf",x);n(r.prototype,"logcdf",C);n(r.prototype,"logpmf",D);n(r.prototype,"mgf",E);n(r.prototype,"pmf",G);n(r.prototype,"quantile",L);s.exports=r
});var O=a();module.exports=O;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map