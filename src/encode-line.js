const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const counter = {};
  let end = "";
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === str[i + 1] || str[i] === str[i - 1]) {
      counter.hasOwnProperty(str[i])
        ? (counter[str[i]] += 1)
        : (counter[str[i]] = 1);
    } else if (i === str.length - 1) end = str[i];
    else counter[str[i]] = 1;
  }
  let res = "";
  for (let i in counter) {
    res += counter[i] + i;
  }
  return res.replaceAll("1", "") + end;
}

module.exports = {
  encodeLine,
};
