export const pagination = (arr, page, limit) => {
  const lastIndex = page * limit;
  const firstIndex = lastIndex - limit;

  return arr.slice(firstIndex, lastIndex);
};
