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


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# Math Iterators

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Math iterators.



<section class="usage">

## Usage

```javascript
import ns from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-iter@deno/mod.js';
```

You can also import the following named exports from the package:

```javascript
import { ops, sequences, special, tools, utils } from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-iter@deno/mod.js';
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

```javascript
import objectKeys from 'https://cdn.jsdelivr.net/gh/stdlib-js/utils-keys@deno/mod.js';
import ns from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-iter@deno/mod.js';

console.log( objectKeys( ns ) );
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

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2024. The Stdlib [Authors][stdlib-authors].

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
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/math-iter/tree/deno
[deno-readme]: https://github.com/stdlib-js/math-iter/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/math-iter/tree/umd
[umd-readme]: https://github.com/stdlib-js/math-iter/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/math-iter/tree/esm
[esm-readme]: https://github.com/stdlib-js/math-iter/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/math-iter/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/math-iter/main/LICENSE

<!-- <toc-links> -->

[@stdlib/math/iter/ops]: https://github.com/stdlib-js/math-iter-ops/tree/deno

[@stdlib/math/iter/sequences]: https://github.com/stdlib-js/math-iter-sequences/tree/deno

[@stdlib/math/iter/special]: https://github.com/stdlib-js/math-iter-special/tree/deno

[@stdlib/math/iter/tools]: https://github.com/stdlib-js/math-iter-tools/tree/deno

[@stdlib/math/iter/utils]: https://github.com/stdlib-js/math-iter-utils/tree/deno

<!-- </toc-links> -->

</section>

<!-- /.links -->
