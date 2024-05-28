# hash-code-string

## Overview

hash-code-string is a small utility package to convert long strings into shorter, hash-like strings. It provides functions to create hashes, encode them in a URL-safe base64 format, and decode them back into bytes, or a 32 bit number if desired. Limited to 32 bits of uniqueness. No dependencies. Assumes environment has `Uint8Array`, `Math.imul`, and `btoa`.

## Installation

```sh
npm install hash-code-string
```

```sh
pnpm install hash-code-string
```

## Usage

```javascript
import { hashString, hashToNum32 } from 'hash-code-string';

// Example usage
const longString = "This is a long string that needs to be hashed";
const hash = hashString(longString);
console.log(`Hash: ${hash}`); // Hash: g3g2qw

const decodedHash = hashToNum32(hash);
console.log(`Decoded Hash: ${decodedHash}`); // Decoded Hash: -1422493565
```

## API

### `hashCode(str: string): number`
Creates a hash code number from a string similar to Java's String.hashCode method.

**Parameters:**

* str: The input string to hash.

**Returns:**

A 32-bit integer hash code.

### `num32toBytes(num: number): Uint8Array`
Splits a 32-bit number into an array of 4 bytes.

**Parameters:**

* num: The 32-bit integer to split.

**Returns:**

A Uint8Array containing 4 bytes.

### `codesToString(bytes: Uint8Array): string`
Converts an array of byte values to a string.

**Parameters:**

bytes: An array of bytes.
**Returns:**

A string representing the byte values.

### `encode64(str: string): string`
Encodes a string into a URL-safe base64 format.

**Parameters:**

str: The input string to encode.

**Returns:**

A URL-safe base64 encoded string.

### `hashString(str: string): string`
Creates a hash of the input string and encodes it in URL-safe base64 format.

**Parameters:**

str: The input string to hash and encode.

**Returns:**

A URL-safe base64 encoded hash string.

### `decode64(str: string): string`
Decodes a URL-safe base64 string.

**Parameters:**
* str: The URL-safe base64 string to decode.

**Returns:**
The decoded string.

### `stringToCodes(str: string): number[]`
Converts a string to an array of character codes.

**Parameters:**
* str: The input string.

**Returns:**
An array of character codes.

### `bytesToNum32(bytes: Uint8Array): number`
Converts the first 4 elements of a byte array back to a 32-bit number.

**Parameters:**
* bytes: An array of bytes.

**Returns:**
A 32-bit integer.

## Example

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
