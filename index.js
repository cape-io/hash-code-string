const hashCode = (str) => [...str].reduce((s, c) => Math.imul(31, s) + c.charCodeAt() | 0, 0)
const num32toBytes = (num) => new Uint8Array([0, 8, 16, 24].map((x) => num >> x))
const codesToString = (bytes) => String.fromCharCode(...bytes)
const encode64 = (str) => btoa(str).replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_')
const hashString = (str) => encode64(codesToString(num32toBytes(hashCode(str))))

const decode64 = (str) => atob(str.replace(/-/g, '+').replace(/_/g, '/').replace(/\s/g, ''))
const stringToCodes = (str) => Array.from(str).map(x => x.charCodeAt())
const bytesToNum32 = (bytes) => bytes.slice(0, 4).reduce((num, byte, i) => (num | (byte << (i * 8))), 0)
