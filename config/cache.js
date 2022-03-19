const { createClient } = require('redis');

(async () => {
  const client = createClient();

  client.on('error', (err) => console.log('Redis Client Error', err));

  await client.connect();
})();

const setCache = async (key, value) => {
  await client.set(key, value);
}

module.exports.setCache = setCache;

const getCache = async (key) => {
  return await client.get(key);
}

module.exports.getCache = getCache;
