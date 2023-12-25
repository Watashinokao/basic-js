const { NotImplementedError } = require("../extensions/index.js");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 *
 * @param {String} sampleActivity string representation of current activity
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 *
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  if (
    typeof sampleActivity !== "string" ||
    !sampleActivity ||
    typeof Number(sampleActivity) !== "number" ||
    Number(sampleActivity) > MODERN_ACTIVITY ||
    sampleActivity < 0 ||
    Number(sampleActivity) === 0 ||
    Number.isNaN(Number(sampleActivity))
  )
    return false;
  let n = MODERN_ACTIVITY / sampleActivity;
  let k = 0.693 / HALF_LIFE_PERIOD;
  return Math.ceil(Math.log(n) / k);
}

module.exports = {
  dateSample,
};
