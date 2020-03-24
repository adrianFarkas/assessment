import { FROM_0_TO_19, TENS, SCALE } from "./BasicNums";

export const numToWord = num => {
  let word = convertNumber(num);
  if (num < 0) word = `minus ${word}`;
  return word;
};

const convertToTwoDigits = num => {
  num = Math.abs(num);
  if (num < 20) return FROM_0_TO_19[num];

  const tens_index = getRoundedDistributedNum(num, 10) - 1;

  if (num % 10 === 0) return TENS[tens_index];
  return `${TENS[tens_index]}-${FROM_0_TO_19[num % 10]}`;
};

const convertToThreeDigits = num => {
  if (num === 0) return "";
  if (num.toString().length === 1) return FROM_0_TO_19[num];
  if (num.toString().length === 2) return convertToTwoDigits(num);
  if (num % 100 === 0) return `${FROM_0_TO_19[num / 100]} hundred`;
  return `${
    FROM_0_TO_19[getRoundedDistributedNum(num, 100)]
  } hundred and ${convertToTwoDigits(num % 100)}`;
};

const getRoundedDistributedNum = (toDivide, divideWith) => {
  return Math.floor(toDivide / divideWith);
};

const splitTo3Digits = num => {
  let result = [];
  while (num) {
    result.push(num % 1000);
    num = getRoundedDistributedNum(num, 1000);
  }
  return result;
};

const convertNumber = num => {
  num = Math.abs(num);
  const arr = splitTo3Digits(num);
  return arr
    .map((n, i) => {
      let res = convertToThreeDigits(n);
      if (i > 0) res += ` ${SCALE[i - 1]}`;
      return res;
    })
    .reverse()
    .join(" ");
};
