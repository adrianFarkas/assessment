import { FROM_0_TO_19, TENS } from "./BasicNums";

export const numToWord = num => {
  let word = "";
  if (num < 100 && num > -100) word = convertToTwoDigits(num);
  if (num < 0) word = `minus ${word}`;
  return word;
};

const convertToTwoDigits = num => {
  num = Math.abs(num);
  if (num < 20) return FROM_0_TO_19[num];

  const tens_index = Math.floor(num / 10 - 1);

  if (num % 10 === 0) return TENS[tens_index];
  return `${TENS[tens_index]}-${FROM_0_TO_19[num % 10]}`;
};
