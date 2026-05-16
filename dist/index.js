/** @license Apache-2.0 */

'use strict';

/**
* Reinterpret a complex-valued floating-point ndarray as a real-valued floating-point ndarray having the same precision.
*
* @module @stdlib/ndarray-base-reinterpret-complex
*
* @example
* var zeroTo = require( '@stdlib/blas-ext-zero-to' );
* var reinterpretComplex = require( '@stdlib/ndarray-base-reinterpret-complex' );
*
* var x = zeroTo( [ 2, 2 ], {
*     'dtype': 'complex128'
* });
* // returns <ndarray>[ [ <Complex128>[ 0.0, 0.0 ], <Complex128>[ 1.0, 0.0 ] ], [ <Complex128>[ 0.0, 0.0 ], <Complex128>[ 1.0, 0.0 ] ] ]
*
* var out = reinterpretComplex( x );
* // returns <ndarray>[ [ [ 0.0, 0.0 ], [ 1.0, 0.0 ] ], [ [ 0.0, 0.0 ], [ 1.0, 0.0 ] ] ]
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
