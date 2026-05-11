import crypto from 'crypto';

const generateApiKey = (env = 'live') => {
  const random = crypto.randomBytes(32).toString('hex');
  return `bawq_${env}_${random}`;
};

console.log(generateApiKey('neo'));