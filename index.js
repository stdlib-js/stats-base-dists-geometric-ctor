// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,n;r=this,n=function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,n=Object.defineProperty,t=Object.prototype,e=t.toString,u=t.__defineGetter__,o=t.__defineSetter__,i=t.__lookupGetter__,f=t.__lookupSetter__,a=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?n:function(r,n,a){var c,p,y,l;if("object"!=typeof r||null===r||"[object Array]"===e.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof a||null===a||"[object Array]"===e.call(a))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+a+"`.");if((p="value"in a)&&(i.call(r,n)||f.call(r,n)?(c=r.__proto__,r.__proto__=t,delete r[n],r[n]=a.value,r.__proto__=c):r[n]=a.value),y="get"in a,l="set"in a,p&&(y||l))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&u&&u.call(r,n,a.get),l&&o&&o.call(r,n,a.set),r};function c(r,n,t){a(r,n,{configurable:!1,enumerable:!1,writable:!1,value:t})}function p(r,n,t){a(r,n,{configurable:!1,enumerable:!1,get:t})}function y(r){return"number"==typeof r}var l="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function v(){return l&&"symbol"==typeof Symbol.toStringTag}var N=Object.prototype.toString,s=Object.prototype.hasOwnProperty,b="function"==typeof Symbol?Symbol.toStringTag:"",h=v()?function(r){var n,t,e,u,o;if(null==r)return N.call(r);t=r[b],o=b,n=null!=(u=r)&&s.call(u,o);try{r[b]=void 0}catch(n){return N.call(r)}return e=N.call(r),n?r[b]=t:delete r[b],e}:function(r){return N.call(r)},m=Number,d=m.prototype.toString,w=v();function g(r){return"object"==typeof r&&(r instanceof m||(w?function(r){try{return d.call(r),!0}catch(r){return!1}}(r):"[object Number]"===h(r)))}function A(r){return y(r)||g(r)}function _(r){return y(r)&&r>=0&&r<=1}function U(r){return g(r)&&r.valueOf()>=0&&r.valueOf()<=1}function j(r){return _(r)||U(r)}function O(r){return r!=r}c(A,"isPrimitive",y),c(A,"isObject",g),c(j,"isPrimitive",_),c(j,"isObject",U);var I,S="function"==typeof Uint32Array,T="function"==typeof Uint32Array?Uint32Array:null,E="function"==typeof Uint32Array?Uint32Array:void 0;I=function(){var r,n,t;if("function"!=typeof T)return!1;try{n=new T(n=[1,3.14,-3.14,4294967296,4294967297]),t=n,r=(S&&t instanceof Uint32Array||"[object Uint32Array]"===h(t))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?E:function(){throw new Error("not implemented")};var F,G=I,H="function"==typeof Float64Array,P="function"==typeof Float64Array?Float64Array:null,V="function"==typeof Float64Array?Float64Array:void 0;F=function(){var r,n,t;if("function"!=typeof P)return!1;try{n=new P([1,3.14,-3.14,NaN]),t=n,r=(H&&t instanceof Float64Array||"[object Float64Array]"===h(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?V:function(){throw new Error("not implemented")};var x,M=F,k="function"==typeof Uint8Array,L="function"==typeof Uint8Array?Uint8Array:null,W="function"==typeof Uint8Array?Uint8Array:void 0;x=function(){var r,n,t;if("function"!=typeof L)return!1;try{n=new L(n=[1,3.14,-3.14,256,257]),t=n,r=(k&&t instanceof Uint8Array||"[object Uint8Array]"===h(t))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?W:function(){throw new Error("not implemented")};var q,C=x,Y="function"==typeof Uint16Array,R="function"==typeof Uint16Array?Uint16Array:null,z="function"==typeof Uint16Array?Uint16Array:void 0;q=function(){var r,n,t;if("function"!=typeof R)return!1;try{n=new R(n=[1,3.14,-3.14,65536,65537]),t=n,r=(Y&&t instanceof Uint16Array||"[object Uint16Array]"===h(t))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?z:function(){throw new Error("not implemented")};var B,D={uint16:q,uint8:C};(B=new D.uint16(1))[0]=4660;var J=52===new D.uint8(B.buffer)[0],K=!0===J?1:0,Q=new M(1),X=new G(Q.buffer);function Z(r){return Q[0]=r,X[K]}var $=!0===J?1:0,rr=new M(1),nr=new G(rr.buffer);function tr(r,n){return rr[0]=r,nr[$]=n>>>0,rr[0]}var er=1023,ur=m.NEGATIVE_INFINITY,or=.6931471803691238,ir=1.9082149292705877e-10,fr=1048575;function ar(r){var n,t,e,u,o,i,f,a,c,p,y,l;return 0===r?ur:O(r)||r<0?NaN:(o=0,(t=Z(r))<1048576&&(o-=54,t=Z(r*=0x40000000000000)),t>=2146435072?r+r:(o+=(t>>20)-er|0,o+=(a=614244+(t&=fr)&1048576|0)>>20|0,f=(r=tr(r,t|1072693248^a))-1,(fr&2+t)<3?0===f?0===o?0:o*or+o*ir:(i=f*f*(.5-.3333333333333333*f),0===o?f-i:o*or-(i-o*ir-f)):(a=t-398458|0,c=440401-t|0,u=(y=(l=(p=f/(2+f))*p)*l)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(y),e=l*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(y),i=e+u,(a|=c)>0?(n=.5*f*f,0===o?f-(n-p*(n+i)):o*or-(n-(p*(n+i)+o*ir)-f)):0===o?f-p*(f-i):o*or-(p*(f-i)-o*ir-f))))}var cr,pr,yr=Math.ceil,lr=!0===J?0:1,vr=new M(1),Nr=new G(vr.buffer);function sr(r,n){return vr[0]=r,Nr[lr]=n>>>0,vr[0]}!0===J?(cr=1,pr=0):(cr=0,pr=1);var br={HIGH:cr,LOW:pr},hr=new M(1),mr=new G(hr.buffer),dr=br.HIGH,wr=br.LOW;function gr(r,n){return hr[0]=n,r[0]=mr[dr],r[1]=mr[wr],r}function Ar(r,n){return 1===arguments.length?gr([0,0],r):gr(r,n)}var _r=1048575,Ur=1.4426950407214463,jr=[0,0];function Or(r){var n,t,e,u,o;if(O(r)||r<0)return NaN;if(Ar(jr,r),o=0,(t=jr[0])<1048576){if(0==(2147483647&t|jr[1]))return ur;o-=54,t=Z(r*=0x40000000000000)}return t>=2146435072?r+r:(o+=(t>>20)-er|0,o+=(u=614244+(t&=1048575)&1048576|0)>>20|0,e=function(r){var n,t,e,u,o,i,f,a,c,p,y;return u=Z(r),o=r-1,(_r&2+u)<3?0===o?0:o*o*(.3333333333333333*o-.5):(p=(u&=_r)-398458|0,y=440401-u|0,t=(c=(f=(i=o/(2+o))*i)*f)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(c),e=f*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(c),a=e+t,(p|=y)>0?i*((n=.5*o*o)+a)-n:i*(a-o))}(r=tr(r,t|1072693248^u)),1.6751713164886512e-10*((r-=1)+e)+(r-(n=sr(r,0))+e)*Ur+n*Ur+o)}var Ir=Math.sqrt,Sr=Math.floor;function Tr(r){return Sr(r)===r}function Er(r){return Tr(r/2)}function Fr(r){return Er(r>0?r-1:r+1)}var Gr,Hr,Pr=Number.POSITIVE_INFINITY;function Vr(r){return r===Pr||r===ur}function xr(r){return Math.abs(r)}function Mr(r){return 0|r}!0===J?(Gr=1,Hr=0):(Gr=0,Hr=1);var kr={HIGH:Gr,LOW:Hr},Lr=new M(1),Wr=new G(Lr.buffer),qr=kr.HIGH,Cr=kr.LOW;function Yr(r,n){return Wr[qr]=r,Wr[Cr]=n,Lr[0]}var Rr=[0,0];function zr(r,n){var t,e;return Ar(Rr,r),t=Rr[0],t&=2147483647,e=Z(n),Yr(t|=e&=2147483648,Rr[1])}var Br=1048576,Dr=[1,1.5],Jr=[0,.5849624872207642],Kr=[0,1.350039202129749e-8];function Qr(r,n){return O(n)||Vr(n)?(r[0]=n,r[1]=0,r):0!==n&&xr(n)<22250738585072014e-324?(r[0]=4503599627370496*n,r[1]=-52,r):(r[0]=n,r[1]=0,r)}var Xr=[0,0],Zr=[0,0];function $r(r,n){var t,e;return 0===n||0===r||O(r)||Vr(r)?r:(function(r,n){1===arguments.length?Qr([0,0],r):Qr(r,n)}(Xr,r),n+=Xr[1],n+=function(r){var n=Z(r);return(n=(2146435072&n)>>>20)-er|0}(r=Xr[0]),n<-1074?zr(0,r):n>1023?r<0?ur:Pr:(n<=-1023?(n+=52,e=2220446049250313e-31):e=1,Ar(Zr,r),t=Zr[0],t&=2148532223,e*Yr(t|=n+er<<20,Zr[1])))}var rn=2147483647,nn=1048575,tn=1048576,en=2147483647,un=1083179008,on=1e300,fn=1e-300,an=[0,0],cn=[0,0];function pn(r,n){var t,e,u,o,i,f,a,c,p,y,l,v,N,s;if(O(r)||O(n))return NaN;if(Ar(an,n),i=an[0],0===an[1]){if(0===n)return 1;if(1===n)return r;if(-1===n)return 1/r;if(.5===n)return Ir(r);if(-.5===n)return 1/Ir(r);if(2===n)return r*r;if(3===n)return r*r*r;if(4===n)return(r*=r)*r;if(Vr(n))return function(r,n){return-1===r?(r-r)/(r-r):1===r?1:xr(r)<1==(n===Pr)?0:Pr}(r,n)}if(Ar(an,r),o=an[0],0===an[1]){if(0===o)return function(r,n){return n===ur?Pr:n===Pr?0:n>0?Fr(n)?r:0:Fr(n)?zr(Pr,r):Pr}(r,n);if(1===r)return 1;if(-1===r&&Fr(n))return-1;if(Vr(r))return r===ur?pn(-0,-n):n<0?0:Pr}if(r<0&&!1===Tr(n))return(r-r)/(r-r);if(u=xr(r),t=o&en|0,e=i&en|0,a=i>>>31|0,f=(f=o>>>31|0)&&Fr(n)?-1:1,e>1105199104){if(e>1139802112)return function(r,n){return(2147483647&Z(r))<=1072693247?n<0?1/0:0:n>0?1/0:0}(r,n);if(t<1072693247)return 1===a?f*on*on:f*fn*fn;if(t>1072693248)return 0===a?f*on*on:f*fn*fn;l=function(r,n){var t,e,u,o,i,f;return t=(i=1.9259629911266175e-8*(u=n-1)-u*u*(0===(f=u)?.5:.5+f*(.25*f-.3333333333333333))*1.4426950408889634)-((e=sr(e=(o=1.4426950216293335*u)+i,0))-o),r[0]=e,r[1]=t,r}(cn,u)}else l=function(r,n,t){var e,u,o,i,f,a,c,p,y,l,v,N,s,b,h,m,d,w,g,A,_;return w=0,t<Br&&(w-=53,t=Z(n*=9007199254740992)),w+=(t>>20)-er|0,t=1072693248|(g=1048575&t|0),g<=235662?A=0:g<767610?A=1:(A=0,w+=1,t-=Br),i=sr(u=(m=(n=tr(n,t))-(c=Dr[A]))*(d=1/(n+c)),0),e=524288+(t>>1|536870912),a=tr(0,e+=A<<18),h=(o=u*u)*o*(0===(_=o)?.5999999999999946:.5999999999999946+_*(.4285714285785502+_*(.33333332981837743+_*(.272728123808534+_*(.23066074577556175+.20697501780033842*_))))),a=sr(a=3+(o=i*i)+(h+=(f=d*(m-i*a-i*(n-(a-c))))*(i+u)),0),s=(v=-7.028461650952758e-9*(y=sr(y=(m=i*a)+(d=f*a+(h-(a-3-o))*u),0))+.9617966939259756*(d-(y-m))+Kr[A])-((N=sr(N=(l=.9617967009544373*y)+v+(p=Jr[A])+(b=w),0))-b-p-l),r[0]=N,r[1]=s,r}(cn,u,t);if(y=(n-(c=sr(n,0)))*l[0]+n*l[1],p=c*l[0],Ar(an,v=y+p),N=Mr(an[0]),s=Mr(an[1]),N>=un){if(0!=(N-un|s))return f*on*on;if(y+8008566259537294e-32>v-p)return f*on*on}else if((N&en)>=1083231232){if(0!=(N-3230714880|s))return f*fn*fn;if(y<=v-p)return f*fn*fn}return v=function(r,n,t){var e,u,o,i,f,a,c,p,y,l;return y=((p=r&rn|0)>>20)-er|0,c=0,p>1071644672&&(u=tr(0,((c=r+(tn>>y+1)>>>0)&~(nn>>(y=((c&rn)>>20)-er|0)))>>>0),c=(c&nn|tn)>>20-y>>>0,r<0&&(c=-c),n-=u),r=Mr(r=Z(a=1-((a=(o=.6931471824645996*(u=sr(u=t+n,0)))+(i=.6931471805599453*(t-(u-n))+-1.904654299957768e-9*u))*(e=a-(u=a*a)*(0===(l=u)?.16666666666666602:.16666666666666602+l*(l*(6613756321437934e-20+l*(4.1381367970572385e-8*l-16533902205465252e-22))-.0027777777777015593)))/(e-2)-((f=i-(a-o))+a*f)-a))),(r+=c<<20>>>0)>>20<=0?$r(a,c):tr(a,r)}(N,p,y),f*v}function yn(r,n){return O(r)||O(n)||n<0||n>1?NaN:r<0?0:r===Pr?1:1-pn(1-n,(r=Sr(r))+1)}function ln(r){return function(){return r}}c(yn,"factory",(function(r){return O(r)||r<0||r>1?ln(NaN):function(n){return O(n)?NaN:n<0?0:n===Pr?1:(n=Sr(n),1-pn(1-r,n+1))}}));var vn=.6931471803691238,Nn=1.9082149292705877e-10;function sn(r){var n,t,e,u,o,i,f,a,c,p;if(r<-1||O(r))return NaN;if(-1===r)return ur;if(r===Pr)return r;if(0===r)return r;if(p=1,(e=r<0?-r:r)<.41421356237309503){if(e<1.862645149230957e-9)return e<5551115123125783e-32?r:r-r*r*.5;r>-.2928932188134525&&(p=0,u=r,t=1)}return 0!==p&&(e<9007199254740992?(o=(p=((t=Z(c=1+r))>>20)-er)>0?1-(c-r):r-(c-1),o/=c):(p=((t=Z(c=r))>>20)-er,o=0),(t&=1048575)<434334?c=tr(c,1072693248|t):(p+=1,c=tr(c,1071644672|t),t=1048576-t>>2),u=c-1),n=.5*u*u,0===t?0===u?p*vn+(o+=p*Nn):p*vn-((a=n*(1-.6666666666666666*u))-(p*Nn+o)-u):(a=(f=(i=u/(2+u))*i)*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.3999999999940942+r*(.2857142874366239+r*(.22222198432149784+r*(.1818357216161805+r*(.15313837699209373+.14798198605116586*r)))))}(f),0===p?u-(n-i*(n+a)):p*vn-(n-(i*(n+a)+(p*Nn+o))-u))}function bn(r,n){return O(r)||O(n)||n<0||n>1?NaN:r<0?ur:r===Pr?0:sn(-pn(1-n,(r=Sr(r))+1))}function hn(r){return Sr(r)===r&&r>=0}function mn(r,n){var t;return O(r)||O(n)||n<0||n>1?NaN:hn(r)?(t=1-n,ar(n)+r*ar(t)):ur}function dn(r){return r>=0&&r<=1}function wn(r){return r<0?yr(r):Sr(r)}c(bn,"factory",(function(r){return O(r)||r<0||r>1?ln(NaN):function(n){return O(n)?NaN:n<0?ur:n===Pr?0:(n=Sr(n),sn(-pn(1-r,n+1)))}})),c(mn,"factory",(function(r){return O(r)||r<0||r>1?ln(NaN):function(n){var t;return O(n)?NaN:hn(n)?(t=1-r,ar(r)+n*ar(t)):ur}}));var gn=1.4426950408889634,An=1/(1<<28);function _n(r){var n;return O(r)||r===Pr?r:r===ur?0:r>709.782712893384?Pr:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<An?1+r:function(r,n,t){var e,u,o,i;return $r(1-(n-(e=r-n)*(o=e-(u=e*e)*(0===(i=u)?.16666666666666602:.16666666666666602+i*(i*(6613756321437934e-20+i*(4.1381367970572385e-8*i-16533902205465252e-22))-.0027777777777015593)))/(2-o)-r),t)}(r-.6931471803691238*(n=wn(r<0?gn*r-.5:gn*r+.5)),1.9082149292705877e-10*n,n)}function Un(r,n){var t,e;return O(r)||!dn(n)||r>=-ar(e=1-n)?NaN:n*(t=_n(r))/(1-e*t)}function jn(r,n){return O(r)||O(n)||n<0||n>1?NaN:hn(r)?n*pn(1-n,r):0}function On(r){return 0===r&&1/r===Pr}function In(r,n){var t,e,u,o;if(2===(t=arguments.length))return O(r)||O(n)?NaN:r===Pr||n===Pr?Pr:r===n&&0===r?On(r)?r:n:r>n?r:n;for(e=ur,o=0;o<t;o++){if(O(u=arguments[o])||u===Pr)return u;(u>e||u===e&&0===u&&On(u))&&(e=u)}return e}function Sn(r,n){return O(n)||O(r)||n<0||n>1||r<0||r>1?NaN:1===r?Pr:In(0,yr(ar(1-r)/sn(-n)-(1+1e-12)))}function Tn(){var r,n=arguments,t=n[0],e="https://stdlib.io/e/"+t+"?";for(r=1;r<n.length;r++)e+="&arg[]="+encodeURIComponent(n[r]);return e}function En(){var r;if(!(this instanceof En))return 0===arguments.length?new En:new En(arguments[0]);if(arguments.length){if(!_(r=arguments[0]))throw new TypeError(Tn("0Vb9T","p",r))}else r=.5;return a(this,"p",{configurable:!1,enumerable:!0,get:function(){return r},set:function(n){if(!_(n))throw new TypeError(Tn("invalid assignment. Must be a probability. Value: `%s`.",n));r=n}}),this}return c(Un,"factory",(function(r){return dn(r)?function(n){var t,e;return O(n)||n>=-ar(e=1-r)?NaN:(t=_n(n),r*t/(1-e*t))}:ln(NaN)})),c(jn,"factory",(function(r){return O(r)||r<0||r>1?ln(NaN):function(n){return O(n)?NaN:hn(n)?r*pn(1-r,n):0}})),c(Sn,"factory",(function(r){return O(r)||r<0||r>1?ln(NaN):function(n){return O(n)||n<0||n>1?NaN:1===n?Pr:In(0,yr(ar(1-n)/sn(-r)-(1+1e-12)))}})),p(En.prototype,"entropy",(function(){return O(r=this.p)||r<=0||r>=1?NaN:(n=1-r,(-r*ar(r)-n*ar(n))/r);var r,n})),p(En.prototype,"kurtosis",(function(){return O(r=this.p)||r<=0||r>=1?NaN:6+r*r/(1-r);var r})),p(En.prototype,"mean",(function(){return O(r=this.p)||r<0||r>1?NaN:(1-r)/r;var r})),p(En.prototype,"median",(function(){return O(r=this.p)||r<0||r>1?NaN:yr(-1/Or(1-r))-1;var r})),p(En.prototype,"mode",(function(){return O(r=this.p)||r<0||r>1?NaN:0;var r})),p(En.prototype,"skewness",(function(){return O(r=this.p)||r<=0||r>=1?NaN:(2-r)/Ir(1-r);var r})),p(En.prototype,"stdev",(function(){return O(r=this.p)||r<=0||r>=1?NaN:Ir(1-r)/r;var r})),p(En.prototype,"variance",(function(){return O(r=this.p)||r<=0||r>=1?NaN:(1-r)/(r*r);var r})),c(En.prototype,"cdf",(function(r){return yn(r,this.p)})),c(En.prototype,"logcdf",(function(r){return bn(r,this.p)})),c(En.prototype,"logpmf",(function(r){return mn(r,this.p)})),c(En.prototype,"mgf",(function(r){return Un(r,this.p)})),c(En.prototype,"pmf",(function(r){return jn(r,this.p)})),c(En.prototype,"quantile",(function(r){return Sn(r,this.p)})),En},"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(r="undefined"!=typeof globalThis?globalThis:r||self).Geometric=n();
//# sourceMappingURL=index.js.map
