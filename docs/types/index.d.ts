/*
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
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

// TypeScript Version: 4.1

/* tslint:disable:max-line-length */
/* tslint:disable:max-file-line-count */

import ops = require( '@stdlib/math-iter-ops' );
import sequences = require( '@stdlib/math-iter-sequences' );
import special = require( '@stdlib/math-iter-special' );
import tools = require( '@stdlib/math-iter-tools' );
import utils = require( '@stdlib/math-iter-utils' );

/**
* Interface describing the `iter` namespace.
*/
interface Namespace {
	/**
	* Math operator iterators.
	*/
	ops: typeof ops;

	/**
	* Math iterators for generating sequences.
	*/
	sequences: typeof sequences;

	/**
	* Math iterators for special functions.
	*/
	special: typeof special;

	/**
	* Math iterator tooling.
	*/
	tools: typeof tools;

	/**
	* Math utility iterators.
	*/
	utils: typeof utils;
}

/**
* Math iterators.
*/
declare var ns: Namespace;


// EXPORTS //

export = ns;
