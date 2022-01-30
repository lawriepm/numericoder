export default function useLocalStorage(key) {
  const get = (def = null) => window.localStorage.getItem(key) || def;
  const set = (value) => window.localStorage.setItem(key, value);
  return [get, set];
}
