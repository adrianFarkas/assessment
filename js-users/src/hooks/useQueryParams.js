import { useLocation, useHistory } from "react-router-dom";

const useQueryParams = () => {
  const location = useLocation();
  const history = useHistory();
  const query = location.search;
  const searchparams = new URLSearchParams(query);

  const set = (key, value) => {
    searchparams.set(key, value);
    history.push(`${location.pathname}?${searchparams.toString()}`);
  };

  const remove = key => {
    searchparams.delete(key);
    history.push(`${location.pathname}?${searchparams.toString()}`);
  };

  const params = {};
  const keys = searchparams.keys();
  let key = keys.next().value;

  while (key) {
    params[key] = searchparams.get(key);
    key = keys.next().value;
  }
  return { ...params, set, remove };
};

export default useQueryParams;
