export default (str: string) => {
  let count = 0;
  for (const s of str) {
    count += s.charCodeAt(0) <= 128 ? 1 : 2;
  }
  return count;
};
