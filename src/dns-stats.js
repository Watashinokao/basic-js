const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const obj = {};
  const arr = domains.map((item) => item.split(".").reverse());
  arr.forEach((words) => {
    let key = "." + words[0];
    for (let i = 0; i < words.length; i += 1) {
      obj.hasOwnProperty(key) ? (obj[key] += 1) : (obj[key] = 1);
      key += "." + words[i + 1];
    }
  });
  return obj;
}

module.exports = {
  getDNSStats,
};
