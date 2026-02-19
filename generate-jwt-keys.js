const fs = require('fs');
const crypto = require('crypto');

// Generate 2048-bit RSA key pair
const { publicKey, privateKey } = crypto.generateKeyPairSync('rsa', {
  modulusLength: 2048,
  publicKeyEncoding: { type: 'spki', format: 'pem' },
  privateKeyEncoding: { type: 'pkcs8', format: 'pem' }
});

// Save private key
fs.writeFileSync('server.key', privateKey);
console.log('✅ server.key (private key) generated');

// Save public key
fs.writeFileSync('server.crt', publicKey);
console.log('✅ server.crt (public key) generated');
