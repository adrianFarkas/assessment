import { FROM_0_TO_19, TENS } from "./BasicNums";

export const numToWord = num => {
  let word = "";
  if (num < 100 && num > -100) word = convertToTwoDigits(num);
  else word = convertToThreeDigits(num);
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
  num = Math.abs(num);
  if (num % 100 === 0) return `${FROM_0_TO_19[num / 100]} hundred`;
  return `${
    FROM_0_TO_19[getRoundedDistributedNum(num, 100)]
  } hundred and ${convertToTwoDigits(num % 100)}`;
};

const getRoundedDistributedNum = (toDivide, divideWith) => {
  return Math.floor(toDivide / divideWith);
};
