import { pagination, sortByDate } from "utils/util";

describe("Test pagination", () => {
  let arr;

  beforeEach(() => {
    arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  });

  test("Gives back the correct quantity", () => {
    expect(pagination(arr, 1, 5).length).toEqual(5);
    expect(pagination(arr, 1, 2).length).toEqual(2);
    expect(pagination(arr, 1, 10).length).toEqual(10);
    expect(pagination(arr, 1, 11).length).toEqual(11);
    expect(pagination(arr, 1, 20).length).toEqual(15);
  });
  test("Gives back the correct quantity on new page", () => {
    expect(pagination(arr, 2, 5).length).toEqual(5);
    expect(pagination(arr, 4, 2).length).toEqual(2);
    expect(pagination(arr, 2, 10).length).toEqual(5);
    expect(pagination(arr, 5, 3).length).toEqual(3);
    expect(pagination(arr, 6, 3).length).toEqual(0);
    expect(pagination(arr, 0, 3).length).toEqual(0);
    expect(pagination(arr, 0, 0).length).toEqual(0);
  });
  test("Gives back the correct content", () => {
    expect(pagination(arr, 2, 5)).toEqual([6, 7, 8, 9, 10]);
    expect(pagination(arr, 4, 2)).toEqual([7, 8]);
    expect(pagination(arr, 3, 7)).toEqual([15]);
    expect(pagination(arr, 2, 10)).toEqual([11, 12, 13, 14, 15]);
    expect(pagination(arr, 6, 3)).toEqual([]);
    expect(pagination(arr, 0, 3)).toEqual([]);
    expect(pagination(arr, 0, 0)).toEqual([]);
  });
});

describe("Test sorting", () => {
  const resultAsc = [
    { id: 32, created_at: "2014-01-02" },
    { id: 66, created_at: "2014-05-12" },
    { id: 1, created_at: "2014-10-20" },
    { id: 42, created_at: "2016-04-02" },
    { id: 25, created_at: "2020-10-30" }
  ];
  const resultDesc = [
    { id: 25, created_at: "2020-10-30" },
    { id: 42, created_at: "2016-04-02" },
    { id: 1, created_at: "2014-10-20" },
    { id: 66, created_at: "2014-05-12" },
    { id: 32, created_at: "2014-01-02" }
  ];
  let toSort;

  beforeEach(() => {
    toSort = [
      { id: 1, created_at: "2014-10-20" },
      { id: 25, created_at: "2020-10-30" },
      { id: 66, created_at: "2014-05-12" },
      { id: 42, created_at: "2016-04-02" },
      { id: 32, created_at: "2014-01-02" }
    ];
  });

  test("Gives back the correct sequence without sequence param", () => {
    expect(sortByDate(toSort)).toEqual(resultDesc);
    expect(sortByDate(toSort)[0].id).toEqual(25);
    expect(sortByDate(toSort)[4].id).toEqual(32);
  });
  test("Gives back the correct sequence with sequence param", () => {
    expect(sortByDate(toSort, "asc")).toEqual(resultAsc);
    expect(sortByDate(toSort, "asc")[0].id).toEqual(32);
    expect(sortByDate(toSort, "asc")[4].id).toEqual(25);
    expect(sortByDate(toSort, "desc")).toEqual(resultDesc);
    expect(sortByDate(toSort, "desc")[0].id).toEqual(25);
    expect(sortByDate(toSort, "desc")[4].id).toEqual(32);
  });
});
