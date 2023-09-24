// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var n=Object.defineProperty;function t(r){return"number"==typeof r}function e(r){var n,t="";for(n=0;n<r;n++)t+="0";return t}function i(r,n,t){var i=!1,u=n-r.length;return u<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=t?r+e(u):e(u)+r,i&&(r="-"+r)),r}var u=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function o(r){var n,e,o;switch(r.specifier){case"b":n=2;break;case"o":n=8;break;case"x":case"X":n=16;break;default:n=10}if(e=r.arg,o=parseInt(e,10),!isFinite(o)){if(!t(e))throw new Error("invalid integer. Value: "+e);o=0}return o<0&&("u"===r.specifier||10!==n)&&(o=4294967295+o+1),o<0?(e=(-o).toString(n),r.precision&&(e=i(e,r.precision,r.padRight)),e="-"+e):(e=o.toString(n),o||r.precision?r.precision&&(e=i(e,r.precision,r.padRight)):e="",r.sign&&(e=r.sign+e)),16===n&&(r.alternate&&(e="0x"+e),e=r.specifier===a.call(r.specifier)?a.call(e):u.call(e)),8===n&&r.alternate&&"0"!==e.charAt(0)&&(e="0"+e),e}function f(r){return"string"==typeof r}var c=Math.abs,s=String.prototype.toLowerCase,p=String.prototype.toUpperCase,l=String.prototype.replace,v=/e\+(\d)$/,g=/e-(\d)$/,y=/^(\d+)$/,h=/^(\d+)e/,w=/\.0$/,d=/\.0*e/,b=/(\..*[^0])0*e/;function N(r){var n,e,i=parseFloat(r.arg);if(!isFinite(i)){if(!t(r.arg))throw new Error("invalid floating-point number. Value: "+e);i=r.arg}switch(r.specifier){case"e":case"E":e=i.toExponential(r.precision);break;case"f":case"F":e=i.toFixed(r.precision);break;case"g":case"G":c(i)<1e-4?((n=r.precision)>0&&(n-=1),e=i.toExponential(n)):e=i.toPrecision(r.precision),r.alternate||(e=l.call(e,b,"$1e"),e=l.call(e,d,"e"),e=l.call(e,w,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return e=l.call(e,v,"e+0$1"),e=l.call(e,g,"e-0$1"),r.alternate&&(e=l.call(e,y,"$1."),e=l.call(e,h,"$1.e")),i>=0&&r.sign&&(e=r.sign+e),e=r.specifier===p.call(r.specifier)?p.call(e):s.call(e)}function m(r){var n,t="";for(n=0;n<r;n++)t+=" ";return t}function A(r,n,t){var e=n-r.length;return e<0?r:r=t?r+m(e):m(e)+r}var _=String.fromCharCode,I=isNaN,E=Array.isArray;function U(r){var n={};return n.specifier=r.specifier,n.precision=void 0===r.precision?1:r.precision,n.width=r.width,n.flags=r.flags||"",n.mapping=r.mapping,n}function O(r){var n,t,e,u,a,c,s,p,l;if(!E(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(c="",s=1,p=0;p<r.length;p++)if(f(e=r[p]))c+=e;else{if(n=void 0!==e.precision,!(e=U(e)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+p+"`. Value: `"+e+"`.");for(e.mapping&&(s=e.mapping),t=e.flags,l=0;l<t.length;l++)switch(u=t.charAt(l)){case" ":e.sign=" ";break;case"+":e.sign="+";break;case"-":e.padRight=!0,e.padZeros=!1;break;case"0":e.padZeros=t.indexOf("-")<0;break;case"#":e.alternate=!0;break;default:throw new Error("invalid flag: "+u)}if("*"===e.width){if(e.width=parseInt(arguments[s],10),s+=1,I(e.width))throw new TypeError("the argument for * width at position "+s+" is not a number. Value: `"+e.width+"`.");e.width<0&&(e.padRight=!0,e.width=-e.width)}if(n&&"*"===e.precision){if(e.precision=parseInt(arguments[s],10),s+=1,I(e.precision))throw new TypeError("the argument for * precision at position "+s+" is not a number. Value: `"+e.precision+"`.");e.precision<0&&(e.precision=1,n=!1)}switch(e.arg=arguments[s],e.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":n&&(e.padZeros=!1),e.arg=o(e);break;case"s":e.maxWidth=n?e.precision:-1;break;case"c":if(!I(e.arg)){if((a=parseInt(e.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+e.arg);e.arg=I(a)?String(e.arg):_(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":n||(e.precision=6),e.arg=N(e);break;default:throw new Error("invalid specifier: "+e.specifier)}e.maxWidth>=0&&e.arg.length>e.maxWidth&&(e.arg=e.arg.substring(0,e.maxWidth)),e.padZeros?e.arg=i(e.arg,e.width||e.precision,e.padRight):e.width&&(e.arg=A(e.arg,e.width,e.padRight)),c+=e.arg||"",s+=1}return c}var H=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function S(r){var n={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(n.precision="1"),n}function j(r){var n,t,e,i;for(t=[],i=0,e=H.exec(r);e;)(n=r.slice(i,H.lastIndex-e[0].length)).length&&t.push(n),t.push(S(e)),i=H.lastIndex,e=H.exec(r);return(n=r.slice(i)).length&&t.push(n),t}function k(r){return"string"==typeof r}function x(r){var n,t,e;if(!k(r))throw new TypeError(x("invalid argument. First argument must be a string. Value: `%s`.",r));for(n=j(r),(t=new Array(arguments.length))[0]=n,e=1;e<t.length;e++)t[e]=arguments[e];return O.apply(null,t)}var F=Object.prototype,M=F.toString,T=F.__defineGetter__,G=F.__defineSetter__,V=F.__lookupGetter__,W=F.__lookupSetter__;var L=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?n:function(r,n,t){var e,i,u,a;if("object"!=typeof r||null===r||"[object Array]"===M.call(r))throw new TypeError(x("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===M.call(t))throw new TypeError(x("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(V.call(r,n)||W.call(r,n)?(e=r.__proto__,r.__proto__=F,delete r[n],r[n]=t.value,r.__proto__=e):r[n]=t.value),u="get"in t,a="set"in t,i&&(u||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return u&&T&&T.call(r,n,t.get),a&&G&&G.call(r,n,t.set),r};function P(r,n,t){L(r,n,{configurable:!1,enumerable:!1,writable:!1,value:t})}function $(r,n,t){L(r,n,{configurable:!1,enumerable:!1,get:t})}function C(r){return"number"==typeof r}var R="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function q(){return R&&"symbol"==typeof Symbol.toStringTag}var Z=Object.prototype.toString;var X=Object.prototype.hasOwnProperty;var Y="function"==typeof Symbol?Symbol:void 0,z="function"==typeof Y?Y.toStringTag:"";var B=q()?function(r){var n,t,e,i,u;if(null==r)return Z.call(r);t=r[z],u=z,n=null!=(i=r)&&X.call(i,u);try{r[z]=void 0}catch(n){return Z.call(r)}return e=Z.call(r),n?r[z]=t:delete r[z],e}:function(r){return Z.call(r)},D=Number,J=D.prototype.toString;var K=q();function Q(r){return"object"==typeof r&&(r instanceof D||(K?function(r){try{return J.call(r),!0}catch(r){return!1}}(r):"[object Number]"===B(r)))}function rr(r){return C(r)||Q(r)}function nr(r){return C(r)&&r>=0&&r<=1}function tr(r){return Q(r)&&r.valueOf()>=0&&r.valueOf()<=1}function er(r){return nr(r)||tr(r)}function ir(r){return r!=r}P(rr,"isPrimitive",C),P(rr,"isObject",Q),P(er,"isPrimitive",nr),P(er,"isObject",tr);var ur="function"==typeof Uint32Array;var ar="function"==typeof Uint32Array?Uint32Array:null;var or,fr="function"==typeof Uint32Array?Uint32Array:void 0;or=function(){var r,n,t;if("function"!=typeof ar)return!1;try{n=new ar(n=[1,3.14,-3.14,4294967296,4294967297]),t=n,r=(ur&&t instanceof Uint32Array||"[object Uint32Array]"===B(t))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?fr:function(){throw new Error("not implemented")};var cr=or,sr="function"==typeof Float64Array;var pr="function"==typeof Float64Array?Float64Array:null;var lr,vr="function"==typeof Float64Array?Float64Array:void 0;lr=function(){var r,n,t;if("function"!=typeof pr)return!1;try{n=new pr([1,3.14,-3.14,NaN]),t=n,r=(sr&&t instanceof Float64Array||"[object Float64Array]"===B(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?vr:function(){throw new Error("not implemented")};var gr=lr,yr="function"==typeof Uint8Array;var hr="function"==typeof Uint8Array?Uint8Array:null;var wr,dr="function"==typeof Uint8Array?Uint8Array:void 0;wr=function(){var r,n,t;if("function"!=typeof hr)return!1;try{n=new hr(n=[1,3.14,-3.14,256,257]),t=n,r=(yr&&t instanceof Uint8Array||"[object Uint8Array]"===B(t))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?dr:function(){throw new Error("not implemented")};var br=wr,Nr="function"==typeof Uint16Array;var mr="function"==typeof Uint16Array?Uint16Array:null;var Ar,_r="function"==typeof Uint16Array?Uint16Array:void 0;Ar=function(){var r,n,t;if("function"!=typeof mr)return!1;try{n=new mr(n=[1,3.14,-3.14,65536,65537]),t=n,r=(Nr&&t instanceof Uint16Array||"[object Uint16Array]"===B(t))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?_r:function(){throw new Error("not implemented")};var Ir,Er={uint16:Ar,uint8:br};(Ir=new Er.uint16(1))[0]=4660;var Ur=52===new Er.uint8(Ir.buffer)[0],Or=!0===Ur?1:0,Hr=new gr(1),Sr=new cr(Hr.buffer);function jr(r){return Hr[0]=r,Sr[Or]}var kr=!0===Ur?1:0,xr=new gr(1),Fr=new cr(xr.buffer);function Mr(r,n){return xr[0]=r,Fr[kr]=n>>>0,xr[0]}var Tr=D.NEGATIVE_INFINITY;var Gr=.6931471803691238,Vr=1.9082149292705877e-10;function Wr(r){var n,t,e,i,u,a,o,f,c,s,p,l;return 0===r?Tr:ir(r)||r<0?NaN:(u=0,(t=jr(r))<1048576&&(u-=54,t=jr(r*=0x40000000000000)),t>=2146435072?r+r:(u+=(t>>20)-1023|0,u+=(f=(t&=1048575)+614244&1048576|0)>>20|0,o=(r=Mr(r,t|1072693248^f))-1,(1048575&2+t)<3?0===o?0===u?0:u*Gr+u*Vr:(a=o*o*(.5-.3333333333333333*o),0===u?o-a:u*Gr-(a-u*Vr-o)):(f=t-398458|0,c=440401-t|0,i=(p=(l=(s=o/(2+o))*s)*l)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(p),e=l*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(p),a=e+i,(f|=c)>0?(n=.5*o*o,0===u?o-(n-s*(n+a)):u*Gr-(n-(s*(n+a)+u*Vr)-o)):0===u?o-s*(o-a):u*Gr-(s*(o-a)-u*Vr-o))))}var Lr,Pr,$r=Math.ceil,Cr=!0===Ur?0:1,Rr=new gr(1),qr=new cr(Rr.buffer);!0===Ur?(Lr=1,Pr=0):(Lr=0,Pr=1);var Zr={HIGH:Lr,LOW:Pr},Xr=new gr(1),Yr=new cr(Xr.buffer),zr=Zr.HIGH,Br=Zr.LOW;function Dr(r,n,t,e){return Xr[0]=r,n[e]=Yr[zr],n[e+t]=Yr[Br],n}function Jr(r){return Dr(r,[0,0],1,0)}P(Jr,"assign",Dr);var Kr=[0,0];function Qr(r){var n,t,e,i,u;if(ir(r)||r<0)return NaN;if(Jr.assign(r,Kr,1,0),u=0,(t=Kr[0])<1048576){if(0==(2147483647&t|Kr[1]))return Tr;u-=54,t=jr(r*=0x40000000000000)}return t>=2146435072?r+r:(u+=(t>>20)-1023|0,u+=(i=(t&=1048575)+614244&1048576|0)>>20|0,e=function(r){var n,t,e,i,u,a,o,f,c,s,p;return u=r-1,(1048575&2+(i=jr(r)))<3?0===u?0:u*u*(.3333333333333333*u-.5):(s=(i&=1048575)-398458|0,p=440401-i|0,t=(c=(o=(a=u/(2+u))*a)*o)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(c),e=o*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(c),f=e+t,(s|=p)>0?a*((n=.5*u*u)+f)-n:a*(f-u))}(r=Mr(r,t|1072693248^i)),n=function(r,n){return Rr[0]=r,qr[Cr]=n>>>0,Rr[0]}(r-=1,0),1.6751713164886512e-10*(r+e)+1.4426950407214463*(r-n+e)+1.4426950407214463*n+u)}var rn=Math.sqrt;var nn=Math.sqrt;var tn=Math.floor;function en(r){return tn(r)===r}function un(r){return en(r/2)}function an(r){return un(r>0?r-1:r+1)}var on=Number.POSITIVE_INFINITY;function fn(r){return r===on||r===Tr}var cn=Math.sqrt;function sn(r){return Math.abs(r)}var pn=!0===Ur?0:1,ln=new gr(1),vn=new cr(ln.buffer);function gn(r,n){return ln[0]=r,vn[pn]=n>>>0,ln[0]}function yn(r){return 0|r}var hn,wn;!0===Ur?(hn=1,wn=0):(hn=0,wn=1);var dn={HIGH:hn,LOW:wn},bn=new gr(1),Nn=new cr(bn.buffer),mn=dn.HIGH,An=dn.LOW;function _n(r,n){return Nn[mn]=r,Nn[An]=n,bn[0]}var In=[0,0];function En(r,n){var t,e;return Jr.assign(r,In,1,0),t=In[0],t&=2147483647,e=jr(n),_n(t|=e&=2147483648,In[1])}var Un=[1,1.5],On=[0,.5849624872207642],Hn=[0,1.350039202129749e-8];function Sn(r,n,t,e){return ir(r)||fn(r)?(n[e]=r,n[e+t]=0,n):0!==r&&sn(r)<22250738585072014e-324?(n[e]=4503599627370496*r,n[e+t]=-52,n):(n[e]=r,n[e+t]=0,n)}P((function(r){return Sn(r,[0,0],1,0)}),"assign",Sn);var jn=[0,0],kn=[0,0];function xn(r,n){var t,e;return 0===n||0===r||ir(r)||fn(r)?r:(Sn(r,jn,1,0),n+=jn[1],n+=function(r){var n=jr(r);return(n=(2146435072&n)>>>20)-1023|0}(r=jn[0]),n<-1074?En(0,r):n>1023?r<0?Tr:on:(n<=-1023?(n+=52,e=2220446049250313e-31):e=1,Jr.assign(r,kn,1,0),t=kn[0],t&=2148532223,e*_n(t|=n+1023<<20,kn[1])))}var Fn=1e300,Mn=[0,0],Tn=[0,0];function Gn(r,n){var t,e,i,u,a,o,f,c,s,p,l,v,g,y;if(ir(r)||ir(n))return NaN;if(Jr.assign(n,Mn,1,0),a=Mn[0],0===Mn[1]){if(0===n)return 1;if(1===n)return r;if(-1===n)return 1/r;if(.5===n)return cn(r);if(-.5===n)return 1/cn(r);if(2===n)return r*r;if(3===n)return r*r*r;if(4===n)return(r*=r)*r;if(fn(n))return function(r,n){return-1===r?(r-r)/(r-r):1===r?1:sn(r)<1==(n===on)?0:on}(r,n)}if(Jr.assign(r,Mn,1,0),u=Mn[0],0===Mn[1]){if(0===u)return function(r,n){return n===Tr?on:n===on?0:n>0?an(n)?r:0:an(n)?En(on,r):on}(r,n);if(1===r)return 1;if(-1===r&&an(n))return-1;if(fn(r))return r===Tr?Gn(-0,-n):n<0?0:on}if(r<0&&!1===en(n))return(r-r)/(r-r);if(i=sn(r),t=2147483647&u|0,e=2147483647&a|0,f=a>>>31|0,o=(o=u>>>31|0)&&an(n)?-1:1,e>1105199104){if(e>1139802112)return function(r,n){return(2147483647&jr(r))<=1072693247?n<0?1/0:0:n>0?1/0:0}(r,n);if(t<1072693247)return 1===f?o*Fn*Fn:1e-300*o*1e-300;if(t>1072693248)return 0===f?o*Fn*Fn:1e-300*o*1e-300;l=function(r,n){var t,e,i,u,a,o;return t=(a=1.9259629911266175e-8*(i=n-1)-i*i*(0===(o=i)?.5:.5+o*(.25*o-.3333333333333333))*1.4426950408889634)-((e=gn(e=(u=1.4426950216293335*i)+a,0))-u),r[0]=e,r[1]=t,r}(Tn,i)}else l=function(r,n,t){var e,i,u,a,o,f,c,s,p,l,v,g,y,h,w,d,b,N,m,A,_;return N=0,t<1048576&&(N-=53,t=jr(n*=9007199254740992)),N+=(t>>20)-1023|0,t=1072693248|(m=1048575&t|0),m<=235662?A=0:m<767610?A=1:(A=0,N+=1,t-=1048576),a=gn(i=(d=(n=Mr(n,t))-(c=Un[A]))*(b=1/(n+c)),0),e=524288+(t>>1|536870912),f=Mr(0,e+=A<<18),w=(u=i*i)*u*(0===(_=u)?.5999999999999946:.5999999999999946+_*(.4285714285785502+_*(.33333332981837743+_*(.272728123808534+_*(.23066074577556175+.20697501780033842*_))))),f=gn(f=3+(u=a*a)+(w+=(o=b*(d-a*f-a*(n-(f-c))))*(a+i)),0),y=(v=-7.028461650952758e-9*(p=gn(p=(d=a*f)+(b=o*f+(w-(f-3-u))*i),0))+.9617966939259756*(b-(p-d))+Hn[A])-((g=gn(g=(l=.9617967009544373*p)+v+(s=On[A])+(h=N),0))-h-s-l),r[0]=g,r[1]=y,r}(Tn,i,t);if(v=(p=(n-(c=gn(n,0)))*l[0]+n*l[1])+(s=c*l[0]),Jr.assign(v,Mn,1,0),g=yn(Mn[0]),y=yn(Mn[1]),g>=1083179008){if(0!=(g-1083179008|y))return o*Fn*Fn;if(p+8008566259537294e-32>v-s)return o*Fn*Fn}else if((2147483647&g)>=1083231232){if(0!=(g-3230714880|y))return 1e-300*o*1e-300;if(p<=v-s)return 1e-300*o*1e-300}return v=function(r,n,t){var e,i,u,a,o,f,c,s,p,l,v;return l=((p=2147483647&r|0)>>20)-1023|0,s=0,p>1071644672&&(e=((s=r+(1048576>>l+1)>>>0)&~(1048575>>(l=((2147483647&s)>>20)-1023|0)))>>>0,s=(1048575&s|1048576)>>20-l>>>0,r<0&&(s=-s),n-=u=Mr(0,e)),r=yn(r=jr(c=1-((c=(a=.6931471824645996*(u=gn(u=t+n,0)))+(o=.6931471805599453*(t-(u-n))+-1.904654299957768e-9*u))*(i=c-(u=c*c)*(0===(v=u)?.16666666666666602:.16666666666666602+v*(v*(6613756321437934e-20+v*(4.1381367970572385e-8*v-16533902205465252e-22))-.0027777777777015593)))/(i-2)-((f=o-(c-a))+c*f)-c))),(r+=s<<20>>>0)>>20<=0?xn(c,s):Mr(c,r)}(g,s,p),o*v}function Vn(r,n){return ir(r)||ir(n)||n<0||n>1?NaN:r<0?0:r===on?1:1-Gn(1-n,(r=tn(r))+1)}P(Vn,"factory",(function(r){return ir(r)||r<0||r>1?(n=NaN,function(){return n}):function(n){if(ir(n))return NaN;if(n<0)return 0;if(n===on)return 1;return n=tn(n),1-Gn(1-r,n+1)};var n}));var Wn=Math.floor;var Ln=.6931471803691238,Pn=1.9082149292705877e-10;function $n(r){var n,t,e,i,u,a,o,f,c,s;if(r<-1||ir(r))return NaN;if(-1===r)return Tr;if(r===on)return r;if(0===r)return r;if(s=1,(e=r<0?-r:r)<.41421356237309503){if(e<1.862645149230957e-9)return e<5551115123125783e-32?r:r-r*r*.5;r>-.2928932188134525&&(s=0,i=r,t=1)}return 0!==s&&(e<9007199254740992?(u=(s=((t=jr(c=1+r))>>20)-1023)>0?1-(c-r):r-(c-1),u/=c):(s=((t=jr(c=r))>>20)-1023,u=0),(t&=1048575)<434334?c=Mr(c,1072693248|t):(s+=1,c=Mr(c,1071644672|t),t=1048576-t>>2),i=c-1),n=.5*i*i,0===t?0===i?s*Ln+(u+=s*Pn):s*Ln-((f=n*(1-.6666666666666666*i))-(s*Pn+u)-i):(f=(o=(a=i/(2+i))*a)*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.3999999999940942+r*(.2857142874366239+r*(.22222198432149784+r*(.1818357216161805+r*(.15313837699209373+.14798198605116586*r)))))}(o),0===s?i-(n-a*(n+f)):s*Ln-(n-(a*(n+f)+(s*Pn+u))-i))}function Cn(r){return Wn(r)===r}function Rn(r){return Cn(r/2)}function qn(r){return Rn(r>0?r-1:r+1)}function Zn(r){return r===on||r===Tr}var Xn=Math.sqrt;function Yn(r){return Math.abs(r)}var zn=!0===Ur?0:1,Bn=new gr(1),Dn=new cr(Bn.buffer);function Jn(r,n){return Bn[0]=r,Dn[zn]=n>>>0,Bn[0]}function Kn(r){return 0|r}var Qn,rt;!0===Ur?(Qn=1,rt=0):(Qn=0,rt=1);var nt={HIGH:Qn,LOW:rt},tt=new gr(1),et=new cr(tt.buffer),it=nt.HIGH,ut=nt.LOW;function at(r,n){return et[it]=r,et[ut]=n,tt[0]}var ot=[0,0];function ft(r,n){var t,e;return Jr.assign(r,ot,1,0),t=ot[0],t&=2147483647,e=jr(n),at(t|=e&=2147483648,ot[1])}var ct=[1,1.5],st=[0,.5849624872207642],pt=[0,1.350039202129749e-8];function lt(r,n,t,e){return ir(r)||Zn(r)?(n[e]=r,n[e+t]=0,n):0!==r&&Yn(r)<22250738585072014e-324?(n[e]=4503599627370496*r,n[e+t]=-52,n):(n[e]=r,n[e+t]=0,n)}P((function(r){return lt(r,[0,0],1,0)}),"assign",lt);var vt=[0,0],gt=[0,0];function yt(r,n){var t,e;return 0===n||0===r||ir(r)||Zn(r)?r:(lt(r,vt,1,0),n+=vt[1],n+=function(r){var n=jr(r);return(n=(2146435072&n)>>>20)-1023|0}(r=vt[0]),n<-1074?ft(0,r):n>1023?r<0?Tr:on:(n<=-1023?(n+=52,e=2220446049250313e-31):e=1,Jr.assign(r,gt,1,0),t=gt[0],t&=2148532223,e*at(t|=n+1023<<20,gt[1])))}var ht=1e300,wt=[0,0],dt=[0,0];function bt(r,n){var t,e,i,u,a,o,f,c,s,p,l,v,g,y;if(ir(r)||ir(n))return NaN;if(Jr.assign(n,wt,1,0),a=wt[0],0===wt[1]){if(0===n)return 1;if(1===n)return r;if(-1===n)return 1/r;if(.5===n)return Xn(r);if(-.5===n)return 1/Xn(r);if(2===n)return r*r;if(3===n)return r*r*r;if(4===n)return(r*=r)*r;if(Zn(n))return function(r,n){return-1===r?(r-r)/(r-r):1===r?1:Yn(r)<1==(n===on)?0:on}(r,n)}if(Jr.assign(r,wt,1,0),u=wt[0],0===wt[1]){if(0===u)return function(r,n){return n===Tr?on:n===on?0:n>0?qn(n)?r:0:qn(n)?ft(on,r):on}(r,n);if(1===r)return 1;if(-1===r&&qn(n))return-1;if(Zn(r))return r===Tr?bt(-0,-n):n<0?0:on}if(r<0&&!1===Cn(n))return(r-r)/(r-r);if(i=Yn(r),t=2147483647&u|0,e=2147483647&a|0,f=a>>>31|0,o=(o=u>>>31|0)&&qn(n)?-1:1,e>1105199104){if(e>1139802112)return function(r,n){return(2147483647&jr(r))<=1072693247?n<0?1/0:0:n>0?1/0:0}(r,n);if(t<1072693247)return 1===f?o*ht*ht:1e-300*o*1e-300;if(t>1072693248)return 0===f?o*ht*ht:1e-300*o*1e-300;l=function(r,n){var t,e,i,u,a,o;return t=(a=1.9259629911266175e-8*(i=n-1)-i*i*(0===(o=i)?.5:.5+o*(.25*o-.3333333333333333))*1.4426950408889634)-((e=Jn(e=(u=1.4426950216293335*i)+a,0))-u),r[0]=e,r[1]=t,r}(dt,i)}else l=function(r,n,t){var e,i,u,a,o,f,c,s,p,l,v,g,y,h,w,d,b,N,m,A,_;return N=0,t<1048576&&(N-=53,t=jr(n*=9007199254740992)),N+=(t>>20)-1023|0,t=1072693248|(m=1048575&t|0),m<=235662?A=0:m<767610?A=1:(A=0,N+=1,t-=1048576),a=Jn(i=(d=(n=Mr(n,t))-(c=ct[A]))*(b=1/(n+c)),0),e=524288+(t>>1|536870912),f=Mr(0,e+=A<<18),w=(u=i*i)*u*(0===(_=u)?.5999999999999946:.5999999999999946+_*(.4285714285785502+_*(.33333332981837743+_*(.272728123808534+_*(.23066074577556175+.20697501780033842*_))))),f=Jn(f=3+(u=a*a)+(w+=(o=b*(d-a*f-a*(n-(f-c))))*(a+i)),0),y=(v=-7.028461650952758e-9*(p=Jn(p=(d=a*f)+(b=o*f+(w-(f-3-u))*i),0))+.9617966939259756*(b-(p-d))+pt[A])-((g=Jn(g=(l=.9617967009544373*p)+v+(s=st[A])+(h=N),0))-h-s-l),r[0]=g,r[1]=y,r}(dt,i,t);if(v=(p=(n-(c=Jn(n,0)))*l[0]+n*l[1])+(s=c*l[0]),Jr.assign(v,wt,1,0),g=Kn(wt[0]),y=Kn(wt[1]),g>=1083179008){if(0!=(g-1083179008|y))return o*ht*ht;if(p+8008566259537294e-32>v-s)return o*ht*ht}else if((2147483647&g)>=1083231232){if(0!=(g-3230714880|y))return 1e-300*o*1e-300;if(p<=v-s)return 1e-300*o*1e-300}return v=function(r,n,t){var e,i,u,a,o,f,c,s,p,l,v;return l=((p=2147483647&r|0)>>20)-1023|0,s=0,p>1071644672&&(e=((s=r+(1048576>>l+1)>>>0)&~(1048575>>(l=((2147483647&s)>>20)-1023|0)))>>>0,s=(1048575&s|1048576)>>20-l>>>0,r<0&&(s=-s),n-=u=Mr(0,e)),r=Kn(r=jr(c=1-((c=(a=.6931471824645996*(u=Jn(u=t+n,0)))+(o=.6931471805599453*(t-(u-n))+-1.904654299957768e-9*u))*(i=c-(u=c*c)*(0===(v=u)?.16666666666666602:.16666666666666602+v*(v*(6613756321437934e-20+v*(4.1381367970572385e-8*v-16533902205465252e-22))-.0027777777777015593)))/(i-2)-((f=o-(c-a))+c*f)-c))),(r+=s<<20>>>0)>>20<=0?yt(c,s):Mr(c,r)}(g,s,p),o*v}function Nt(r,n){return ir(r)||ir(n)||n<0||n>1?NaN:r<0?Tr:r===on?0:$n(-bt(1-n,(r=Wn(r))+1))}P(Nt,"factory",(function(r){return ir(r)||r<0||r>1?(n=NaN,function(){return n}):function(n){if(ir(n))return NaN;if(n<0)return Tr;if(n===on)return 0;return n=Wn(n),$n(-bt(1-r,n+1))};var n}));var mt=Math.floor;function At(r){return mt(r)===r&&r>=0}function _t(r,n){var t;return ir(r)||ir(n)||n<0||n>1?NaN:At(r)?(t=1-n,Wr(n)+r*Wr(t)):Tr}function It(r){return r>=0&&r<=1}P(_t,"factory",(function(r){return ir(r)||r<0||r>1?(n=NaN,function(){return n}):function(n){var t;if(ir(n))return NaN;if(At(n))return t=1-r,Wr(r)+n*Wr(t);return Tr};var n}));var Et=Math.floor,Ut=Math.ceil;function Ot(r){return r<0?Ut(r):Et(r)}function Ht(r){return r===on||r===Tr}var St,jt;!0===Ur?(St=1,jt=0):(St=0,jt=1);var kt={HIGH:St,LOW:jt},xt=new gr(1),Ft=new cr(xt.buffer),Mt=kt.HIGH,Tt=kt.LOW;function Gt(r,n){return Ft[Mt]=r,Ft[Tt]=n,xt[0]}var Vt=[0,0];function Wt(r,n,t,e){return ir(r)||Ht(r)?(n[e]=r,n[e+t]=0,n):0!==r&&function(r){return Math.abs(r)}(r)<22250738585072014e-324?(n[e]=4503599627370496*r,n[e+t]=-52,n):(n[e]=r,n[e+t]=0,n)}P((function(r){return Wt(r,[0,0],1,0)}),"assign",Wt);var Lt=[0,0],Pt=[0,0];function $t(r,n){var t,e,i,u,a,o;return 0===n||0===r||ir(r)||Ht(r)?r:(Wt(r,Lt,1,0),n+=Lt[1],n+=function(r){var n=jr(r);return(n=(2146435072&n)>>>20)-1023|0}(r=Lt[0]),n<-1074?(i=0,u=r,Jr.assign(i,Vt,1,0),a=Vt[0],a&=2147483647,o=jr(u),Gt(a|=o&=2147483648,Vt[1])):n>1023?r<0?Tr:on:(n<=-1023?(n+=52,e=2220446049250313e-31):e=1,Jr.assign(r,Pt,1,0),t=Pt[0],t&=2148532223,e*Gt(t|=n+1023<<20,Pt[1])))}function Ct(r){var n;return ir(r)||r===on?r:r===Tr?0:r>709.782712893384?on:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<3.725290298461914e-9?1+r:function(r,n,t){var e,i,u,a;return $t(1-(n-(e=r-n)*(u=e-(i=e*e)*(0===(a=i)?.16666666666666602:.16666666666666602+a*(a*(6613756321437934e-20+a*(4.1381367970572385e-8*a-16533902205465252e-22))-.0027777777777015593)))/(2-u)-r),t)}(r-.6931471803691238*(n=Ot(r<0?1.4426950408889634*r-.5:1.4426950408889634*r+.5)),1.9082149292705877e-10*n,n)}function Rt(r,n){var t,e;return ir(r)||!It(n)||r>=-Wr(e=1-n)?NaN:n*(t=Ct(r))/(1-e*t)}P(Rt,"factory",(function(r){return It(r)?function(n){var t,e;if(ir(n))return NaN;if(n>=-Wr(e=1-r))return NaN;return t=Ct(n),r*t/(1-e*t)}:(n=NaN,function(){return n});var n}));var qt=Math.floor;function Zt(r){return qt(r)===r&&r>=0}function Xt(r){return qt(r)===r}function Yt(r){return Xt(r/2)}function zt(r){return Yt(r>0?r-1:r+1)}function Bt(r){return r===on||r===Tr}var Dt=Math.sqrt;function Jt(r){return Math.abs(r)}var Kt=!0===Ur?0:1,Qt=new gr(1),re=new cr(Qt.buffer);function ne(r,n){return Qt[0]=r,re[Kt]=n>>>0,Qt[0]}function te(r){return 0|r}var ee,ie;!0===Ur?(ee=1,ie=0):(ee=0,ie=1);var ue={HIGH:ee,LOW:ie},ae=new gr(1),oe=new cr(ae.buffer),fe=ue.HIGH,ce=ue.LOW;function se(r,n){return oe[fe]=r,oe[ce]=n,ae[0]}var pe=[0,0];function le(r,n){var t,e;return Jr.assign(r,pe,1,0),t=pe[0],t&=2147483647,e=jr(n),se(t|=e&=2147483648,pe[1])}var ve=[1,1.5],ge=[0,.5849624872207642],ye=[0,1.350039202129749e-8];function he(r,n,t,e){return ir(r)||Bt(r)?(n[e]=r,n[e+t]=0,n):0!==r&&Jt(r)<22250738585072014e-324?(n[e]=4503599627370496*r,n[e+t]=-52,n):(n[e]=r,n[e+t]=0,n)}P((function(r){return he(r,[0,0],1,0)}),"assign",he);var we=[0,0],de=[0,0];function be(r,n){var t,e;return 0===n||0===r||ir(r)||Bt(r)?r:(he(r,we,1,0),n+=we[1],n+=function(r){var n=jr(r);return(n=(2146435072&n)>>>20)-1023|0}(r=we[0]),n<-1074?le(0,r):n>1023?r<0?Tr:on:(n<=-1023?(n+=52,e=2220446049250313e-31):e=1,Jr.assign(r,de,1,0),t=de[0],t&=2148532223,e*se(t|=n+1023<<20,de[1])))}var Ne=1e300,me=1e-300,Ae=[0,0],_e=[0,0];function Ie(r,n){var t,e,i,u,a,o,f,c,s,p,l,v,g,y;if(ir(r)||ir(n))return NaN;if(Jr.assign(n,Ae,1,0),a=Ae[0],0===Ae[1]){if(0===n)return 1;if(1===n)return r;if(-1===n)return 1/r;if(.5===n)return Dt(r);if(-.5===n)return 1/Dt(r);if(2===n)return r*r;if(3===n)return r*r*r;if(4===n)return(r*=r)*r;if(Bt(n))return function(r,n){return-1===r?(r-r)/(r-r):1===r?1:Jt(r)<1==(n===on)?0:on}(r,n)}if(Jr.assign(r,Ae,1,0),u=Ae[0],0===Ae[1]){if(0===u)return function(r,n){return n===Tr?on:n===on?0:n>0?zt(n)?r:0:zt(n)?le(on,r):on}(r,n);if(1===r)return 1;if(-1===r&&zt(n))return-1;if(Bt(r))return r===Tr?Ie(-0,-n):n<0?0:on}if(r<0&&!1===Xt(n))return(r-r)/(r-r);if(i=Jt(r),t=2147483647&u|0,e=2147483647&a|0,f=a>>>31|0,o=(o=u>>>31|0)&&zt(n)?-1:1,e>1105199104){if(e>1139802112)return function(r,n){return(2147483647&jr(r))<=1072693247?n<0?1/0:0:n>0?1/0:0}(r,n);if(t<1072693247)return 1===f?o*Ne*Ne:o*me*me;if(t>1072693248)return 0===f?o*Ne*Ne:o*me*me;l=function(r,n){var t,e,i,u,a,o;return t=(a=1.9259629911266175e-8*(i=n-1)-i*i*(0===(o=i)?.5:.5+o*(.25*o-.3333333333333333))*1.4426950408889634)-((e=ne(e=(u=1.4426950216293335*i)+a,0))-u),r[0]=e,r[1]=t,r}(_e,i)}else l=function(r,n,t){var e,i,u,a,o,f,c,s,p,l,v,g,y,h,w,d,b,N,m,A,_;return N=0,t<1048576&&(N-=53,t=jr(n*=9007199254740992)),N+=(t>>20)-1023|0,t=1072693248|(m=1048575&t|0),m<=235662?A=0:m<767610?A=1:(A=0,N+=1,t-=1048576),a=ne(i=(d=(n=Mr(n,t))-(c=ve[A]))*(b=1/(n+c)),0),e=524288+(t>>1|536870912),f=Mr(0,e+=A<<18),w=(u=i*i)*u*(0===(_=u)?.5999999999999946:.5999999999999946+_*(.4285714285785502+_*(.33333332981837743+_*(.272728123808534+_*(.23066074577556175+.20697501780033842*_))))),f=ne(f=3+(u=a*a)+(w+=(o=b*(d-a*f-a*(n-(f-c))))*(a+i)),0),y=(v=-7.028461650952758e-9*(p=ne(p=(d=a*f)+(b=o*f+(w-(f-3-u))*i),0))+.9617966939259756*(b-(p-d))+ye[A])-((g=ne(g=(l=.9617967009544373*p)+v+(s=ge[A])+(h=N),0))-h-s-l),r[0]=g,r[1]=y,r}(_e,i,t);if(v=(p=(n-(c=ne(n,0)))*l[0]+n*l[1])+(s=c*l[0]),Jr.assign(v,Ae,1,0),g=te(Ae[0]),y=te(Ae[1]),g>=1083179008){if(0!=(g-1083179008|y))return o*Ne*Ne;if(p+8008566259537294e-32>v-s)return o*Ne*Ne}else if((2147483647&g)>=1083231232){if(0!=(g-3230714880|y))return o*me*me;if(p<=v-s)return o*me*me}return v=function(r,n,t){var e,i,u,a,o,f,c,s,p,l,v;return l=((p=2147483647&r|0)>>20)-1023|0,s=0,p>1071644672&&(e=((s=r+(1048576>>l+1)>>>0)&~(1048575>>(l=((2147483647&s)>>20)-1023|0)))>>>0,s=(1048575&s|1048576)>>20-l>>>0,r<0&&(s=-s),n-=u=Mr(0,e)),r=te(r=jr(c=1-((c=(a=.6931471824645996*(u=ne(u=t+n,0)))+(o=.6931471805599453*(t-(u-n))+-1.904654299957768e-9*u))*(i=c-(u=c*c)*(0===(v=u)?.16666666666666602:.16666666666666602+v*(v*(6613756321437934e-20+v*(4.1381367970572385e-8*v-16533902205465252e-22))-.0027777777777015593)))/(i-2)-((f=o-(c-a))+c*f)-c))),(r+=s<<20>>>0)>>20<=0?be(c,s):Mr(c,r)}(g,s,p),o*v}function Ee(r,n){return ir(r)||ir(n)||n<0||n>1?NaN:Zt(r)?n*Ie(1-n,r):0}P(Ee,"factory",(function(r){return ir(r)||r<0||r>1?(n=NaN,function(){return n}):function(n){if(ir(n))return NaN;if(Zt(n))return r*Ie(1-r,n);return 0};var n}));var Ue=Math.ceil;function Oe(r,n){return ir(r)||ir(n)?NaN:r===on||n===on?on:r===n&&0===r?function(r){return 0===r&&1/r===on}(r)?r:n:r>n?r:n}function He(r,n){return ir(n)||ir(r)||n<0||n>1||r<0||r>1?NaN:1===r?on:Oe(0,Ue(Wr(1-r)/$n(-n)-(1+1e-12)))}function Se(){var r,n=arguments,t=n[0],e="https://stdlib.io/e/"+t+"?";for(r=1;r<n.length;r++)e+="&arg[]="+encodeURIComponent(n[r]);return e}function je(){var r;if(!(this instanceof je))return 0===arguments.length?new je:new je(arguments[0]);if(arguments.length){if(!nr(r=arguments[0]))throw new TypeError(Se("11P92,HU","p",r))}else r=.5;return L(this,"p",{configurable:!1,enumerable:!0,get:function(){return r},set:function(n){if(!nr(n))throw new TypeError(Se("11P8h,HV",n));r=n}}),this}P(He,"factory",(function(r){return ir(r)||r<0||r>1?(n=NaN,function(){return n}):function(n){if(ir(n)||n<0||n>1)return NaN;if(1===n)return on;return Oe(0,Ue(Wr(1-n)/$n(-r)-(1+1e-12)))};var n})),$(je.prototype,"entropy",(function(){return ir(r=this.p)||r<=0||r>=1?NaN:(n=1-r,(-r*Wr(r)-n*Wr(n))/r);var r,n})),$(je.prototype,"kurtosis",(function(){return ir(r=this.p)||r<=0||r>=1?NaN:6+r*r/(1-r);var r})),$(je.prototype,"mean",(function(){return ir(r=this.p)||r<0||r>1?NaN:(1-r)/r;var r})),$(je.prototype,"median",(function(){return ir(r=this.p)||r<0||r>1?NaN:$r(-1/Qr(1-r))-1;var r})),$(je.prototype,"mode",(function(){return ir(r=this.p)||r<0||r>1?NaN:0;var r})),$(je.prototype,"skewness",(function(){return ir(r=this.p)||r<=0||r>=1?NaN:(2-r)/rn(1-r);var r})),$(je.prototype,"stdev",(function(){return ir(r=this.p)||r<=0||r>=1?NaN:nn(1-r)/r;var r})),$(je.prototype,"variance",(function(){return ir(r=this.p)||r<=0||r>=1?NaN:(1-r)/(r*r);var r})),P(je.prototype,"cdf",(function(r){return Vn(r,this.p)})),P(je.prototype,"logcdf",(function(r){return Nt(r,this.p)})),P(je.prototype,"logpmf",(function(r){return _t(r,this.p)})),P(je.prototype,"mgf",(function(r){return Rt(r,this.p)})),P(je.prototype,"pmf",(function(r){return Ee(r,this.p)})),P(je.prototype,"quantile",(function(r){return He(r,this.p)}));export{je as default};
//# sourceMappingURL=mod.js.map
