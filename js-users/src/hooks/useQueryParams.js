import { useLocation } from "react-router-dom";

const useQueryParams = () => {
  const params = {};
  const query = useLocation().search;
  const searchparams = new URLSearchParams(query);

  const keys = searchparams.keys();
  let key = keys.next().value;

  while (key) {
    params[key] = searchparams.get(key);
    key = keys.next().value;
  }
  return params;
};

export default useQueryParams;
