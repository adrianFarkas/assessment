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
  test("Three digits", () => {
    expect(numToWord(153)).toEqual("one hundred and fifty-three");
    expect(numToWord(440)).toEqual("four hundred and forty");
    expect(numToWord(627)).toEqual("six hundred and twenty-seven");
    expect(numToWord(710)).toEqual("seven hundred and ten");
  });
  test("Three digits divisible by 100", () => {
    expect(numToWord(100)).toEqual("one hundred");
    expect(numToWord(500)).toEqual("five hundred");
    expect(numToWord(700)).toEqual("seven hundred");
    expect(numToWord(900)).toEqual("nine hundred");
  });
  test("Four digits which first half divisible by 10", () => {
    expect(numToWord(2000)).toEqual("two thousand");
    expect(numToWord(5007)).toEqual("five thousand and seven");
    expect(numToWord(6052)).toEqual("six thousand and fifty-two");
    expect(numToWord(9033)).toEqual("nine thousand and thirty-three");
  });
  test("Four digits which first half not divisible by 10", () => {
    expect(numToWord(1200)).toEqual("twelve hundred");
    expect(numToWord(2350)).toEqual("twenty-three hundred and fifty");
    expect(numToWord(4444)).toEqual("forty-four hundred and forty-four");
    expect(numToWord(8401)).toEqual("eighty-four hundred and one");
  });
  test("Larger numbers", () => {
    expect(numToWord(220120)).toEqual(
      "two hundred and twenty thousand one hundred and twenty"
    );
    expect(numToWord(1000000)).toEqual("one million");
    expect(numToWord(20004000)).toEqual("twenty-million and four thousand");
    expect(numToWord(99454521)).toEqual(
      "ninety-nine million four hundred and fifty-four thousand five hundred and twenty-one"
    );
    expect(numToWord(3000050000)).toEqual("three billion and fifty thousand");
    expect(numToWord(654321074321)).toEqual(
      "six hundred and fifty-four billion three hundred and twenty-one million seventy-four thousand three hundred and twenty-one"
    );
    expect(numToWord(999999999999999)).toEqual(
      "nine hundred and ninety-nine trillion nine hundred and ninety-nine billion nine hundred and ninety-nine million nine hundred and ninety-nine thousand nine hundred and ninety-nine"
    );
  });
  test("Negatives", () => {
    expect(numToWord(-20)).toEqual("minus twenty");
    expect(numToWord(-53)).toEqual("minus fifty-three");
    expect(numToWord(-433)).toEqual("minus four hundred and thirty-three");
    expect(numToWord(-55505)).toEqual(
      "minus fifty-five thousand five hundred and five"
    );
  });
});
