# input-diff [![Build Status][ci-img]][ci-url] [![Coverage Status][cover-img]][cover-url]

When text input changes, the following premises are usually true:

- If the new text is longer than the old, it means something was inserted
- If the new text is shorter than the old, it means something was removed

`input-diff` finds the LCS when those premises are met, and a valid diff when they're not, with few iterations.

## Sample usage

```javascript
var diff = require('input-diff'),
    data;

data = diff.get('Hello','Hello world');
console.log( diff.apply('Hello',data) ); // Hello world
```

[ci-img]: https://circleci.com/gh/manvalls/input-diff.svg?style=shield
[ci-url]: https://circleci.com/gh/manvalls/input-diff
[cover-img]: https://coveralls.io/repos/manvalls/input-diff/badge.svg?branch=master&service=github
[cover-url]: https://coveralls.io/github/manvalls/input-diff?branch=master
