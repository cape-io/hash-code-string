# hash-code-string

## Overview

hash-code-string is a small utility package to convert long strings into shorter, hash-like strings. It provides functions to create hashes, encode them in a URL-safe base64 format, and decode them back into bytes, or a 32 bit number if desired. Limited to 32 bits of uniqueness.

## Installation

```sh
npm install hash-code-string
```

```sh
pnpm install hash-code-string
```

## Usage

```javascript
import { hashString } from 'hash-code-string';

// Example usage
const longString = "This is a long string that needs to be hashed";
const hash = hashString(longString);
console.log(`Hash: ${hash}`); // Hash: ExampleOutput

const decodedHash = decode64(hash);
console.log(`Decoded Hash: ${decodedHash}`); // Decoded Hash: ExampleOutput
```

## API

### `hashCode(str: string): number`
Creates a hash code number from a string similar to Java's String.hashCode method.

**Parameters:**

str: The input string to hash.
Returns:

A 32-bit integer hash code.
num32toBytes(num: number): Uint8Array
Splits a 32-bit number into an array of 4 bytes.

**Parameters:**

num: The 32-bit integer to split.
Returns:

A Uint8Array containing 4 bytes.
codesToString(bytes: Uint8Array): string
Converts an array of byte values to a string.

**Parameters:**

bytes: An array of bytes.
Returns:

A string representing the byte values.
encode64(str: string): string
Encodes a string into a URL-safe base64 format.

**Parameters:**

str: The input string to encode.
Returns:

A URL-safe base64 encoded string.
hashString(str: string): string
Creates a hash of the input string and encodes it in URL-safe base64 format.

**Parameters:**

str: The input string to hash and encode.
Returns:

A URL-safe base64 encoded hash string.
decode64(str: string): string
Decodes a URL-safe base64 string.

**Parameters:**

str: The URL-safe base64 string to decode.
Returns:

The decoded string.
stringToCodes(str: string): number[]
Converts a string to an array of character codes.

**Parameters:**

str: The input string.
Returns:

An array of character codes.
bytesToNum32(bytes: Uint8Array): number
Converts the first 4 elements of a byte array back to a 32-bit number.

**Parameters:**

bytes: An array of bytes.
Returns:

A 32-bit integer.
Example

```javascript
const str = "example";
const hash = hashString(str);
console.log(hash); // Output: URL-safe base64 encoded hash

const decoded = decode64(hash);
console.log(decoded); // Output: decoded hash string

const charCodes = stringToCodes(decoded);
console.log(charCodes); // Output: Array of character codes

const num = bytesToNum32(charCodes);
console.log(num); // Output: 32-bit number
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request on GitHub.

## License

This project is licensed under the ISC License. See the LICENSE file for details.


Turn a long string into a short one.

* `hashCode()` - Create number like Java String hashCode() Method.
* `num32toBytes()` - Takes a 32 bit number and splits it into an array of 4 bytes.
* `codesToString()` - Turns array into a string ready for `btoa()` by converting each byte to a char code.
* `encode64()` - Url safe wrapper around `btoa`.
* `hashString()` - Put it all together, by flowing through `hashCode` -> `num32toBytes` -> `codesToString` -> `encode64`

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
