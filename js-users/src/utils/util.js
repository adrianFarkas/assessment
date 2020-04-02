export const pagination = (arr, page, limit) => {
  const lastIndex = page * limit;
  const firstIndex = lastIndex - limit;

  return arr.slice(firstIndex, lastIndex);
};

export const sortByDate = (arr, seq = "desc") => {
  const sorted = arr.sort(
    (a, b) => new Date(a.created_at) - new Date(b.created_at)
  );
  return seq === "asc" ? sorted : sorted.reverse();
};
