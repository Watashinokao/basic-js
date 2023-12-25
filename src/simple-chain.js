const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  arr: [],
  getLength() {
    return this.arr.length;
  },
  addLink(value) {
    this.arr.push(`( ${String(value) || ""} )`);
    return this;
  },
  removeLink(position) {
    if (
      typeof position !== "number" ||
      position > this.arr.length - 1 ||
      position - 1 < 0
    ) {
      this.arr = [];
      throw new Error("You can't remove incorrect link!");
    }

    this.arr.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.arr.reverse();
    return this;
  },
  finishChain() {
    const myArr = this.arr;
    this.arr = [];
    return myArr.join("~~");
  },
};

module.exports = {
  chainMaker,
};
