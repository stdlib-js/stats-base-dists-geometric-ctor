// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var n,r;n=this,r=function(){"use strict";var n="function"==typeof Object.defineProperty?Object.defineProperty:null,r=Object.defineProperty,t=Object.prototype,e=t.toString,u=t.__defineGetter__,o=t.__defineSetter__,i=t.__lookupGetter__,f=t.__lookupSetter__,a=function(){try{return n({},"x",{}),!0}catch(n){return!1}}()?r:function(n,r,a){var c,p,y,l;if("object"!=typeof n||null===n||"[object Array]"===e.call(n))throw new TypeError("invalid argument. First argument must be an object. Value: `"+n+"`.");if("object"!=typeof a||null===a||"[object Array]"===e.call(a))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+a+"`.");if((p="value"in a)&&(i.call(n,r)||f.call(n,r)?(c=n.__proto__,n.__proto__=t,delete n[r],n[r]=a.value,n.__proto__=c):n[r]=a.value),y="get"in a,l="set"in a,p&&(y||l))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&u&&u.call(n,r,a.get),l&&o&&o.call(n,r,a.set),n};function c(n,r,t){a(n,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function p(n,r,t){a(n,r,{configurable:!1,enumerable:!1,get:t})}function y(n){return"number"==typeof n}var l="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function s(){return l&&"symbol"==typeof Symbol.toStringTag}var v=Object.prototype.toString,N=Object.prototype.hasOwnProperty,b="function"==typeof Symbol?Symbol.toStringTag:"",h=s()?function(n){var r,t,e,u,o;if(null==n)return v.call(n);t=n[b],o=b,r=null!=(u=n)&&N.call(u,o);try{n[b]=void 0}catch(r){return v.call(n)}return e=v.call(n),r?n[b]=t:delete n[b],e}:function(n){return v.call(n)},m=Number,d=m.prototype.toString,w=s();function g(n){return"object"==typeof n&&(n instanceof m||(w?function(n){try{return d.call(n),!0}catch(n){return!1}}(n):"[object Number]"===h(n)))}function A(n){return y(n)||g(n)}function _(n){return y(n)&&n>=0&&n<=1}function U(n){return g(n)&&n.valueOf()>=0&&n.valueOf()<=1}function j(n){return _(n)||U(n)}function O(n){return n!=n}c(A,"isPrimitive",y),c(A,"isObject",g),c(j,"isPrimitive",_),c(j,"isObject",U);var I,S="function"==typeof Uint32Array,T="function"==typeof Uint32Array?Uint32Array:null,E="function"==typeof Uint32Array?Uint32Array:void 0;I=function(){var n,r,t;if("function"!=typeof T)return!1;try{r=new T(r=[1,3.14,-3.14,4294967296,4294967297]),t=r,n=(S&&t instanceof Uint32Array||"[object Uint32Array]"===h(t))&&1===r[0]&&3===r[1]&&4294967293===r[2]&&0===r[3]&&1===r[4]}catch(r){n=!1}return n}()?E:function(){throw new Error("not implemented")};var F,G=I,H="function"==typeof Float64Array,P="function"==typeof Float64Array?Float64Array:null,V="function"==typeof Float64Array?Float64Array:void 0;F=function(){var n,r,t;if("function"!=typeof P)return!1;try{r=new P([1,3.14,-3.14,NaN]),t=r,n=(H&&t instanceof Float64Array||"[object Float64Array]"===h(t))&&1===r[0]&&3.14===r[1]&&-3.14===r[2]&&r[3]!=r[3]}catch(r){n=!1}return n}()?V:function(){throw new Error("not implemented")};var x,M=F,k="function"==typeof Uint8Array,L="function"==typeof Uint8Array?Uint8Array:null,W="function"==typeof Uint8Array?Uint8Array:void 0;x=function(){var n,r,t;if("function"!=typeof L)return!1;try{r=new L(r=[1,3.14,-3.14,256,257]),t=r,n=(k&&t instanceof Uint8Array||"[object Uint8Array]"===h(t))&&1===r[0]&&3===r[1]&&253===r[2]&&0===r[3]&&1===r[4]}catch(r){n=!1}return n}()?W:function(){throw new Error("not implemented")};var q,C=x,Y="function"==typeof Uint16Array,R="function"==typeof Uint16Array?Uint16Array:null,z="function"==typeof Uint16Array?Uint16Array:void 0;q=function(){var n,r,t;if("function"!=typeof R)return!1;try{r=new R(r=[1,3.14,-3.14,65536,65537]),t=r,n=(Y&&t instanceof Uint16Array||"[object Uint16Array]"===h(t))&&1===r[0]&&3===r[1]&&65533===r[2]&&0===r[3]&&1===r[4]}catch(r){n=!1}return n}()?z:function(){throw new Error("not implemented")};var B,D={uint16:q,uint8:C};(B=new D.uint16(1))[0]=4660;var J=52===new D.uint8(B.buffer)[0],K=!0===J?1:0,Q=new M(1),X=new G(Q.buffer);function Z(n){return Q[0]=n,X[K]}var $=!0===J?1:0,nn=new M(1),rn=new G(nn.buffer);function tn(n,r){return nn[0]=n,rn[$]=r>>>0,nn[0]}var en=1023,un=m.NEGATIVE_INFINITY,on=.6931471803691238,fn=1.9082149292705877e-10,an=1048575;function cn(n){var r,t,e,u,o,i,f,a,c,p,y,l;return 0===n?un:O(n)||n<0?NaN:(o=0,(t=Z(n))<1048576&&(o-=54,t=Z(n*=0x40000000000000)),t>=2146435072?n+n:(o+=(t>>20)-en|0,o+=(a=614244+(t&=an)&1048576|0)>>20|0,f=(n=tn(n,t|1072693248^a))-1,(an&2+t)<3?0===f?0===o?0:o*on+o*fn:(i=f*f*(.5-.3333333333333333*f),0===o?f-i:o*on-(i-o*fn-f)):(a=t-398458|0,c=440401-t|0,u=(y=(l=(p=f/(2+f))*p)*l)*function(n){return 0===n?.3999999999940942:.3999999999940942+n*(.22222198432149784+.15313837699209373*n)}(y),e=l*function(n){return 0===n?.6666666666666735:.6666666666666735+n*(.2857142874366239+n*(.1818357216161805+.14798198605116586*n))}(y),i=e+u,(a|=c)>0?(r=.5*f*f,0===o?f-(r-p*(r+i)):o*on-(r-(p*(r+i)+o*fn)-f)):0===o?f-p*(f-i):o*on-(p*(f-i)-o*fn-f))))}var pn,yn,ln=Math.ceil,sn=!0===J?0:1,vn=new M(1),Nn=new G(vn.buffer);function bn(n,r){return vn[0]=n,Nn[sn]=r>>>0,vn[0]}!0===J?(pn=1,yn=0):(pn=0,yn=1);var hn={HIGH:pn,LOW:yn},mn=new M(1),dn=new G(mn.buffer),wn=hn.HIGH,gn=hn.LOW;function An(n,r,t,e){return mn[0]=n,r[e]=dn[wn],r[e+t]=dn[gn],r}function _n(n){return An(n,[0,0],1,0)}c(_n,"assign",An);var Un=2147483647,jn=1048575,On=1048575,In=1.4426950407214463,Sn=[0,0];function Tn(n){var r,t,e,u,o;if(O(n)||n<0)return NaN;if(_n.assign(n,Sn,1,0),o=0,(t=Sn[0])<1048576){if(0==(t&Un|Sn[1]))return un;o-=54,t=Z(n*=0x40000000000000)}return t>=2146435072?n+n:(o+=(t>>20)-en|0,o+=(u=614244+(t&=jn)&1048576|0)>>20|0,e=function(n){var r,t,e,u,o,i,f,a,c,p,y;return u=Z(n),o=n-1,(On&2+u)<3?0===o?0:o*o*(.3333333333333333*o-.5):(p=(u&=On)-398458|0,y=440401-u|0,t=(c=(f=(i=o/(2+o))*i)*f)*function(n){return 0===n?.3999999999940942:.3999999999940942+n*(.22222198432149784+.15313837699209373*n)}(c),e=f*function(n){return 0===n?.6666666666666735:.6666666666666735+n*(.2857142874366239+n*(.1818357216161805+.14798198605116586*n))}(c),a=e+t,(p|=y)>0?i*((r=.5*o*o)+a)-r:i*(a-o))}(n=tn(n,t|1072693248^u)),1.6751713164886512e-10*((n-=1)+e)+(n-(r=bn(n,0))+e)*In+r*In+o)}var En=Math.sqrt,Fn=Math.floor;function Gn(n){return Fn(n)===n}function Hn(n){return Gn(n/2)}function Pn(n){return Hn(n>0?n-1:n+1)}var Vn,xn,Mn=Number.POSITIVE_INFINITY;function kn(n){return n===Mn||n===un}function Ln(n){return Math.abs(n)}function Wn(n){return 0|n}!0===J?(Vn=1,xn=0):(Vn=0,xn=1);var qn={HIGH:Vn,LOW:xn},Cn=new M(1),Yn=new G(Cn.buffer),Rn=qn.HIGH,zn=qn.LOW;function Bn(n,r){return Yn[Rn]=n,Yn[zn]=r,Cn[0]}var Dn=[0,0];function Jn(n,r){var t,e;return _n.assign(n,Dn,1,0),t=Dn[0],t&=Un,e=Z(r),Bn(t|=e&=2147483648,Dn[1])}var Kn=1048576,Qn=[1,1.5],Xn=[0,.5849624872207642],Zn=[0,1.350039202129749e-8];function $n(n,r,t,e){return O(n)||kn(n)?(r[e]=n,r[e+t]=0,r):0!==n&&Ln(n)<22250738585072014e-324?(r[e]=4503599627370496*n,r[e+t]=-52,r):(r[e]=n,r[e+t]=0,r)}c((function(n){return $n(n,[0,0],1,0)}),"assign",$n);var nr=[0,0],rr=[0,0];function tr(n,r){var t,e;return 0===r||0===n||O(n)||kn(n)?n:($n(n,nr,1,0),r+=nr[1],r+=function(n){var r=Z(n);return(r=(2146435072&r)>>>20)-en|0}(n=nr[0]),r<-1074?Jn(0,n):r>1023?n<0?un:Mn:(r<=-1023?(r+=52,e=2220446049250313e-31):e=1,_n.assign(n,rr,1,0),t=rr[0],t&=2148532223,e*Bn(t|=r+en<<20,rr[1])))}var er=1048576,ur=1083179008,or=1e300,ir=1e-300,fr=[0,0],ar=[0,0];function cr(n,r){var t,e,u,o,i,f,a,c,p,y,l,s,v,N;if(O(n)||O(r))return NaN;if(_n.assign(r,fr,1,0),i=fr[0],0===fr[1]){if(0===r)return 1;if(1===r)return n;if(-1===r)return 1/n;if(.5===r)return En(n);if(-.5===r)return 1/En(n);if(2===r)return n*n;if(3===r)return n*n*n;if(4===r)return(n*=n)*n;if(kn(r))return function(n,r){return-1===n?(n-n)/(n-n):1===n?1:Ln(n)<1==(r===Mn)?0:Mn}(n,r)}if(_n.assign(n,fr,1,0),o=fr[0],0===fr[1]){if(0===o)return function(n,r){return r===un?Mn:r===Mn?0:r>0?Pn(r)?n:0:Pn(r)?Jn(Mn,n):Mn}(n,r);if(1===n)return 1;if(-1===n&&Pn(r))return-1;if(kn(n))return n===un?cr(-0,-r):r<0?0:Mn}if(n<0&&!1===Gn(r))return(n-n)/(n-n);if(u=Ln(n),t=o&Un|0,e=i&Un|0,a=i>>>31|0,f=(f=o>>>31|0)&&Pn(r)?-1:1,e>1105199104){if(e>1139802112)return function(n,r){return(Z(n)&Un)<=1072693247?r<0?1/0:0:r>0?1/0:0}(n,r);if(t<1072693247)return 1===a?f*or*or:f*ir*ir;if(t>1072693248)return 0===a?f*or*or:f*ir*ir;l=function(n,r){var t,e,u,o,i,f;return t=(i=1.9259629911266175e-8*(u=r-1)-u*u*(0===(f=u)?.5:.5+f*(.25*f-.3333333333333333))*1.4426950408889634)-((e=bn(e=(o=1.4426950216293335*u)+i,0))-o),n[0]=e,n[1]=t,n}(ar,u)}else l=function(n,r,t){var e,u,o,i,f,a,c,p,y,l,s,v,N,b,h,m,d,w,g,A,_;return w=0,t<Kn&&(w-=53,t=Z(r*=9007199254740992)),w+=(t>>20)-en|0,t=1072693248|(g=1048575&t|0),g<=235662?A=0:g<767610?A=1:(A=0,w+=1,t-=Kn),i=bn(u=(m=(r=tn(r,t))-(c=Qn[A]))*(d=1/(r+c)),0),e=524288+(t>>1|536870912),a=tn(0,e+=A<<18),h=(o=u*u)*o*(0===(_=o)?.5999999999999946:.5999999999999946+_*(.4285714285785502+_*(.33333332981837743+_*(.272728123808534+_*(.23066074577556175+.20697501780033842*_))))),a=bn(a=3+(o=i*i)+(h+=(f=d*(m-i*a-i*(r-(a-c))))*(i+u)),0),N=(s=-7.028461650952758e-9*(y=bn(y=(m=i*a)+(d=f*a+(h-(a-3-o))*u),0))+.9617966939259756*(d-(y-m))+Zn[A])-((v=bn(v=(l=.9617967009544373*y)+s+(p=Xn[A])+(b=w),0))-b-p-l),n[0]=v,n[1]=N,n}(ar,u,t);if(s=(y=(r-(c=bn(r,0)))*l[0]+r*l[1])+(p=c*l[0]),_n.assign(s,fr,1,0),v=Wn(fr[0]),N=Wn(fr[1]),v>=ur){if(0!=(v-ur|N))return f*or*or;if(y+8008566259537294e-32>s-p)return f*or*or}else if((v&Un)>=1083231232){if(0!=(v-3230714880|N))return f*ir*ir;if(y<=s-p)return f*ir*ir}return s=function(n,r,t){var e,u,o,i,f,a,c,p,y,l;return y=((p=n&Un|0)>>20)-en|0,c=0,p>1071644672&&(u=tn(0,((c=n+(er>>y+1)>>>0)&~(jn>>(y=((c&Un)>>20)-en|0)))>>>0),c=(c&jn|er)>>20-y>>>0,n<0&&(c=-c),r-=u),n=Wn(n=Z(a=1-((a=(o=.6931471824645996*(u=bn(u=t+r,0)))+(i=.6931471805599453*(t-(u-r))+-1.904654299957768e-9*u))*(e=a-(u=a*a)*(0===(l=u)?.16666666666666602:.16666666666666602+l*(l*(6613756321437934e-20+l*(4.1381367970572385e-8*l-16533902205465252e-22))-.0027777777777015593)))/(e-2)-((f=i-(a-o))+a*f)-a))),(n+=c<<20>>>0)>>20<=0?tr(a,c):tn(a,n)}(v,p,y),f*s}function pr(n,r){return O(n)||O(r)||r<0||r>1?NaN:n<0?0:n===Mn?1:1-cr(1-r,(n=Fn(n))+1)}function yr(n){return function(){return n}}c(pr,"factory",(function(n){return O(n)||n<0||n>1?yr(NaN):function(r){return O(r)?NaN:r<0?0:r===Mn?1:(r=Fn(r),1-cr(1-n,r+1))}}));var lr=.6931471803691238,sr=1.9082149292705877e-10;function vr(n){var r,t,e,u,o,i,f,a,c,p;if(n<-1||O(n))return NaN;if(-1===n)return un;if(n===Mn)return n;if(0===n)return n;if(p=1,(e=n<0?-n:n)<.41421356237309503){if(e<1.862645149230957e-9)return e<5551115123125783e-32?n:n-n*n*.5;n>-.2928932188134525&&(p=0,u=n,t=1)}return 0!==p&&(e<9007199254740992?(o=(p=((t=Z(c=1+n))>>20)-en)>0?1-(c-n):n-(c-1),o/=c):(p=((t=Z(c=n))>>20)-en,o=0),(t&=1048575)<434334?c=tn(c,1072693248|t):(p+=1,c=tn(c,1071644672|t),t=1048576-t>>2),u=c-1),r=.5*u*u,0===t?0===u?p*lr+(o+=p*sr):p*lr-((a=r*(1-.6666666666666666*u))-(p*sr+o)-u):(a=(f=(i=u/(2+u))*i)*function(n){return 0===n?.6666666666666735:.6666666666666735+n*(.3999999999940942+n*(.2857142874366239+n*(.22222198432149784+n*(.1818357216161805+n*(.15313837699209373+.14798198605116586*n)))))}(f),0===p?u-(r-i*(r+a)):p*lr-(r-(i*(r+a)+(p*sr+o))-u))}function Nr(n,r){return O(n)||O(r)||r<0||r>1?NaN:n<0?un:n===Mn?0:vr(-cr(1-r,(n=Fn(n))+1))}function br(n){return Fn(n)===n&&n>=0}function hr(n,r){var t;return O(n)||O(r)||r<0||r>1?NaN:br(n)?(t=1-r,cn(r)+n*cn(t)):un}function mr(n){return n>=0&&n<=1}function dr(n){return n<0?ln(n):Fn(n)}c(Nr,"factory",(function(n){return O(n)||n<0||n>1?yr(NaN):function(r){return O(r)?NaN:r<0?un:r===Mn?0:(r=Fn(r),vr(-cr(1-n,r+1)))}})),c(hr,"factory",(function(n){return O(n)||n<0||n>1?yr(NaN):function(r){var t;return O(r)?NaN:br(r)?(t=1-n,cn(n)+r*cn(t)):un}}));var wr=1.4426950408889634,gr=1/(1<<28);function Ar(n){var r;return O(n)||n===Mn?n:n===un?0:n>709.782712893384?Mn:n<-745.1332191019411?0:n>-3.725290298461914e-9&&n<gr?1+n:function(n,r,t){var e,u,o,i;return tr(1-(r-(e=n-r)*(o=e-(u=e*e)*(0===(i=u)?.16666666666666602:.16666666666666602+i*(i*(6613756321437934e-20+i*(4.1381367970572385e-8*i-16533902205465252e-22))-.0027777777777015593)))/(2-o)-n),t)}(n-.6931471803691238*(r=dr(n<0?wr*n-.5:wr*n+.5)),1.9082149292705877e-10*r,r)}function _r(n,r){var t,e;return O(n)||!mr(r)||n>=-cn(e=1-r)?NaN:r*(t=Ar(n))/(1-e*t)}function Ur(n,r){return O(n)||O(r)||r<0||r>1?NaN:br(n)?r*cr(1-r,n):0}function jr(n){return 0===n&&1/n===Mn}function Or(n,r){var t,e,u,o;if(2===(t=arguments.length))return O(n)||O(r)?NaN:n===Mn||r===Mn?Mn:n===r&&0===n?jr(n)?n:r:n>r?n:r;for(e=un,o=0;o<t;o++){if(O(u=arguments[o])||u===Mn)return u;(u>e||u===e&&0===u&&jr(u))&&(e=u)}return e}function Ir(n,r){return O(r)||O(n)||r<0||r>1||n<0||n>1?NaN:1===n?Mn:Or(0,ln(cn(1-n)/vr(-r)-(1+1e-12)))}function Sr(){var n,r=arguments,t=r[0],e="https://stdlib.io/e/"+t+"?";for(n=1;n<r.length;n++)e+="&arg[]="+encodeURIComponent(r[n]);return e}function Tr(){var n;if(!(this instanceof Tr))return 0===arguments.length?new Tr:new Tr(arguments[0]);if(arguments.length){if(!_(n=arguments[0]))throw new TypeError(Sr("0Vb9T","p",n))}else n=.5;return a(this,"p",{configurable:!1,enumerable:!0,get:function(){return n},set:function(r){if(!_(r))throw new TypeError(Sr("invalid assignment. Must be a probability. Value: `%s`.",r));n=r}}),this}return c(_r,"factory",(function(n){return mr(n)?function(r){var t,e;return O(r)||r>=-cn(e=1-n)?NaN:(t=Ar(r),n*t/(1-e*t))}:yr(NaN)})),c(Ur,"factory",(function(n){return O(n)||n<0||n>1?yr(NaN):function(r){return O(r)?NaN:br(r)?n*cr(1-n,r):0}})),c(Ir,"factory",(function(n){return O(n)||n<0||n>1?yr(NaN):function(r){return O(r)||r<0||r>1?NaN:1===r?Mn:Or(0,ln(cn(1-r)/vr(-n)-(1+1e-12)))}})),p(Tr.prototype,"entropy",(function(){return O(n=this.p)||n<=0||n>=1?NaN:(r=1-n,(-n*cn(n)-r*cn(r))/n);var n,r})),p(Tr.prototype,"kurtosis",(function(){return O(n=this.p)||n<=0||n>=1?NaN:6+n*n/(1-n);var n})),p(Tr.prototype,"mean",(function(){return O(n=this.p)||n<0||n>1?NaN:(1-n)/n;var n})),p(Tr.prototype,"median",(function(){return O(n=this.p)||n<0||n>1?NaN:ln(-1/Tn(1-n))-1;var n})),p(Tr.prototype,"mode",(function(){return O(n=this.p)||n<0||n>1?NaN:0;var n})),p(Tr.prototype,"skewness",(function(){return O(n=this.p)||n<=0||n>=1?NaN:(2-n)/En(1-n);var n})),p(Tr.prototype,"stdev",(function(){return O(n=this.p)||n<=0||n>=1?NaN:En(1-n)/n;var n})),p(Tr.prototype,"variance",(function(){return O(n=this.p)||n<=0||n>=1?NaN:(1-n)/(n*n);var n})),c(Tr.prototype,"cdf",(function(n){return pr(n,this.p)})),c(Tr.prototype,"logcdf",(function(n){return Nr(n,this.p)})),c(Tr.prototype,"logpmf",(function(n){return hr(n,this.p)})),c(Tr.prototype,"mgf",(function(n){return _r(n,this.p)})),c(Tr.prototype,"pmf",(function(n){return Ur(n,this.p)})),c(Tr.prototype,"quantile",(function(n){return Ir(n,this.p)})),Tr},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(n="undefined"!=typeof globalThis?globalThis:n||self).Geometric=r();
//# sourceMappingURL=index.js.map
