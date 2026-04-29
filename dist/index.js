"use strict";var u=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var i=u(function(d,a){
var o=require('@stdlib/array-base-assert-is-complex128array/dist'),p=require('@stdlib/array-base-assert-is-complex64array/dist'),v=require('@stdlib/ndarray-base-reinterpret-complex128/dist'),n=require('@stdlib/ndarray-base-reinterpret-complex64/dist'),l=require('@stdlib/ndarray-base-dtype-resolve-str/dist'),s=require('@stdlib/ndarray-base-dtype/dist'),m=require('@stdlib/ndarray-base-data-buffer/dist'),q=require('@stdlib/error-tools-fmtprodmsg/dist');function c(e){var r,t;if(r=l(s(e)),t=m(e),r==="complex128"&&o(t))return v(e);if(r==="complex64"&&p(t))return n(e);throw new TypeError(q("invalid argument. Must provide a complex-valued floating-point ndarray. Value: `%s`.",e))}a.exports=c
});var f=i();module.exports=f;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
