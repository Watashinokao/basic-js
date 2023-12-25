const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const arr = [];
  const str = String(n);
  for (let i = 0; i < str.length; i += 1) {
    arr.push(str.replace(str[i], ""));
  }
  return Number(arr.sort((a, b) => a - b)[arr.length - 1]);
}

module.exports = {
  deleteDigit,
};
