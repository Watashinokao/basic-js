const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const myArr = [];
  arr.forEach((item, index) => {
    if (item === -1) myArr.push(index);
  });
  const arrNoOne = arr.filter((item) => item !== -1).sort((a, b) => a - b);
  myArr.forEach((itemIndex) => {
    console.log(itemIndex);
    arrNoOne.splice(Number(itemIndex), 0, -1);
  });
  return arrNoOne;
}

module.exports = {
  sortByHeight,
};
