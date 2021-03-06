import * as crypto from 'crypto';

const encryptionpassword = process.env.ENCRYPTION_PASSWORD;

export const encrypt = (changes) => {
  if (!changes.skills) {
    return changes;
  }

  const cipher = crypto.createCipher('aes192', encryptionpassword);
  let encryptedSkills = cipher.update(JSON.stringify(changes.skills), 'utf8', 'hex');
  encryptedSkills += cipher.final('hex');

  return Object.assign({}, changes, { encryptedSkills, skills: null });
};

export const decrypt = (fromDb) => {
  const decipher = crypto.createDecipher('aes192', encryptionpassword);
  let decrypted = decipher.update(fromDb.encryptedSkills, 'hex', 'utf8');
  decrypted += decipher.final('utf8');

  return Object.assign({}, fromDb, { skills: JSON.parse(decrypted), encryptedSkills: null });
};
