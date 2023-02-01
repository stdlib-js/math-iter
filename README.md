<!--

@license Apache-2.0

Copyright (c) 2020 The Stdlib Authors.

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

# Math Iterators

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Math iterators.



<section class="usage">

## Usage

To use in Observable,

```javascript
ns = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/math-iter@umd/browser.js' )
```

To vendor stdlib functionality and avoid installing dependency trees for Node.js, you can use the UMD server build:

```javascript
var ns = require( 'path/to/vendor/umd/math-iter/index.js' )
```

To include the bundle in a webpage,

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/math-iter@umd/browser.js"></script>
```

If no recognized module system is present, access bundle contents via the global scope:

```html
<script type="text/javascript">
(function () {
    window.ns;
})();
</script>
```

#### ns

Namespace containing math iterators.

```javascript
var iterators = ns;
// returns {...}
```

The namespace contains the following sub-namespaces:

<!-- <toc pattern="*"> -->

<div class="namespace-toc">

-   <span class="signature">[`ops`][@stdlib/math/iter/ops]</span><span class="delimiter">: </span><span class="description">math operator iterators.</span>
-   <span class="signature">[`sequences`][@stdlib/math/iter/sequences]</span><span class="delimiter">: </span><span class="description">math iterators for generating sequences.</span>
-   <span class="signature">[`special`][@stdlib/math/iter/special]</span><span class="delimiter">: </span><span class="description">math iterators for special functions.</span>
-   <span class="signature">[`tools`][@stdlib/math/iter/tools]</span><span class="delimiter">: </span><span class="description">math iterator tools.</span>
-   <span class="signature">[`utils`][@stdlib/math/iter/utils]</span><span class="delimiter">: </span><span class="description">math utility iterators.</span>

</div>

<!-- </toc> -->

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- TODO: better examples -->

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/utils-keys@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/math-iter@umd/browser.js"></script>
<script type="text/javascript">
(function () {

console.log( objectKeys( ns ) );

})();
</script>
</body>
</html>
```

</section>

<!-- /.examples -->

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

Copyright &copy; 2016-2023. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/math-iter.svg
[npm-url]: https://npmjs.org/package/@stdlib/math-iter

[test-image]: https://github.com/stdlib-js/math-iter/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/math-iter/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/math-iter/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/math-iter?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/math-iter.svg
[dependencies-url]: https://david-dm.org/stdlib-js/math-iter/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/math-iter/tree/deno
[umd-url]: https://github.com/stdlib-js/math-iter/tree/umd
[esm-url]: https://github.com/stdlib-js/math-iter/tree/esm
[branches-url]: https://github.com/stdlib-js/math-iter/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/math-iter/main/LICENSE

<!-- <toc-links> -->

[@stdlib/math/iter/ops]: https://github.com/stdlib-js/math-iter-ops/tree/umd

[@stdlib/math/iter/sequences]: https://github.com/stdlib-js/math-iter-sequences/tree/umd

[@stdlib/math/iter/special]: https://github.com/stdlib-js/math-iter-special/tree/umd

[@stdlib/math/iter/tools]: https://github.com/stdlib-js/math-iter-tools/tree/umd

[@stdlib/math/iter/utils]: https://github.com/stdlib-js/math-iter-utils/tree/umd

<!-- </toc-links> -->

</section>

<!-- /.links -->
