# hash-code-string

Turn a long string into a short one.

* `hashCode()` - Create hashCode like Java.
* `num32toBytes()` - Takes a 32 bit number and splits it into an array of 4 bytes.
* `codesToString()` - Turns array into a string ready for `btoa()` by converting each byte to a char code.
* `encode64()` - Url safe wrapper around `btoa`.
* `hashString()` - Flows through `hashCode` -> `num32toBytes` -> `codesToString` -> `encode64`

Convenience/sanity functions:

* `decode64` - Url safe wrapper around `atob`
* `stringToCodes()` - Inverse of `codesToString`. Takes a string and turns into an array of char codes.
* `bytesToNum32()` - Takes first 4 elements of an array of byte numbers and coverts them to a 32 bit number.

Small package consisting of the following code:

```javascript
export const hashCode = (str) => [...str].reduce((s, c) => Math.imul(31, s) + c.charCodeAt() | 0, 0)
export const num32toBytes = (num) => new Uint8Array([0, 8, 16, 24].map((x) => num >> x))
export const codesToString = (bytes) => String.fromCharCode(...bytes)
export const encode64 = (str) => btoa(str).replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_')
export const hashString = (str) => encode64(codesToString(num32toBytes(hashCode(str))))

export const decode64 = (str) => atob(str.replace(/-/g, '+').replace(/_/g, '/').replace(/\s/g, ''))
export const stringToCodes = (str) => Array.from(str).map(x => x.charCodeAt())
export const bytesToNum32 = (bytes) => bytes.slice(0, 4).reduce((num, byte, i) => (num | (byte << (i * 8))), 0)
```

No tests, no benchmarks, no dependencies. Assumes environment has `Uint8Array`, `Math.imul`, and `btoa`.
