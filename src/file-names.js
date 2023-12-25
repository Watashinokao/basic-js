const { NotImplementedError } = require("../extensions/index.js");

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const obj = {};
  for (let i = 0; i < names.length; i += 1) {
    obj.hasOwnProperty(names[i]) ? (obj[names[i]] += 1) : (obj[names[i]] = 1);
  }
  return names
    .reverse()
    .map((item) => {
      obj[item] -= 1;
      if (item.includes("(1)")) return (item += "(1)");
      else return (item += obj[item] ? `(${obj[item]})` : "");
    })
    .reverse();
}

module.exports = {
  renameFiles,
};
