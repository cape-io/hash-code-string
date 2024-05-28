export const hashCode = (str) => [...str].reduce((s, c) => Math.imul(31, s) + c.charCodeAt() | 0, 0)
export const num32toBytes = (num) => new Uint8Array([0, 8, 16, 24].map((x) => num >> x))
export const codesToString = (bytes) => String.fromCharCode(...bytes)
export const encode64 = (str) => btoa(str).replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_')
export const hashString = (str) => encode64(codesToString(num32toBytes(hashCode(str))))

export const decode64 = (str) => atob(str.replace(/-/g, '+').replace(/_/g, '/').replace(/\s/g, ''))
export const stringToCodes = (str) => Array.from(str).map(x => x.charCodeAt())
export const bytesToNum32 = (bytes) => bytes.slice(0, 4).reduce((num, byte, i) => (num | (byte << (i * 8))), 0)
