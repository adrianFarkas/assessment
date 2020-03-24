import { numToWord } from "./converter";

describe("Number to word", () => {
  test("One digit", () => {
    expect(numToWord(0)).toEqual("zero");
    expect(numToWord(2)).toEqual("two");
    expect(numToWord(6)).toEqual("six");
  });
  test("Two digits to 19", () => {
    expect(numToWord(11)).toEqual("eleven");
    expect(numToWord(12)).toEqual("twelve");
    expect(numToWord(14)).toEqual("fourteen");
    expect(numToWord(19)).toEqual("nineteen");
  });
  test("Two digits above 19", () => {
    expect(numToWord(25)).toEqual("twenty-five");
    expect(numToWord(42)).toEqual("forty-two");
    expect(numToWord(77)).toEqual("seventy-seven");
    expect(numToWord(81)).toEqual("eighty-one");
  });
  test("Two digits divisible by 10", () => {
    expect(numToWord(10)).toEqual("ten");
    expect(numToWord(40)).toEqual("forty");
    expect(numToWord(60)).toEqual("sixty");
    expect(numToWord(90)).toEqual("ninety");
  });
  test("Negatives", () => {
    expect(numToWord(-20)).toEqual("minus twenty");
    expect(numToWord(-53)).toEqual("minus fifty-three");
  });
});
