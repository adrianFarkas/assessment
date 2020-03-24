import { FROM_0_TO_19, TENS, SCALE } from "./BasicNums";

export const numToWord = number => {
  const num = Math.abs(number);
  if (num === 0) return FROM_0_TO_19[0];
  const word = convertNumber(num, 0);
  return number < 0 ? `minus ${word}` : word;
};

const convertNumber = (num, index) => {
  if (num === 0) return "";

  let word = convertToThreeDigits(num % 1000);
  let remainder = getRoundedDistributedNum(num, 1000);

  if (index > 0) word += ` ${SCALE[index - 1]}`;

  return `${convertNumber(remainder, index + 1)} ${word}`.trim();
};

const convertToTwoDigits = num => {
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
