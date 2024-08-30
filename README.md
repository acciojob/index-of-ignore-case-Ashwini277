# indexOfIgnoreCase

## Instructions

Write a function `indexOfIgnoreCase(str: string, subStr: string)`: number that takes two strings `str` and `subStr` and returns the `index` of `first occurrence` of `subStr` in `str`, case-insensitively. If `subStr` is not found in `str`, return `-1`.

## Examples

```javascript
indexOfIgnoreCase("Hello World", "world"); // returns 6
indexOfIgnoreCase("apple", "Ple"); // returns 1
indexOfIgnoreCase("test", "aaa"); // returns -1
```

## Constraints

- The input strings can contain any printable `ASCII` character.
- The length of input strings `str` and subStr will not exceed `10^5`.
- The function should be case-insensitive, i.e. it should treat lowercase and uppercase characters as same.
- The function should return `-1` if subStr is not found in `str`.

Acceptance Criteria

- The function should return the correct `index` of `first occurrence` of `subStr` in `str`, case-insensitively.
- The function should return `-1` if `subStr` is not found in `str`.
- The function should be case-insensitive, i.e. it should treat lowercase and uppercase characters as same.
- The function should handle edge cases like empty strings, empty `subStr`, etc.
