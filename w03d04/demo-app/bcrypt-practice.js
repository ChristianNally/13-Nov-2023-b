const bcrypt = require('bcryptjs');

const plaintextPassword = 'monkeyFuzz';

const salt = bcrypt.genSaltSync(10);

// console.log('salt:', salt);

const hash = bcrypt.hashSync(plaintextPassword, salt);

// console.log('hash:', hash);

const storedHash = "$2a$10$QcThbdxoOJmKK9AcBWOo8uvPZiUyD.K6E1t7FbboiXTF9LgZIsB6i";

const result = bcrypt.compareSync('monkeyFuzz', storedHash);

console.log('result:', result);
