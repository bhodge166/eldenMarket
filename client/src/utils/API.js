export const searchEldenRing = (query) => {
  return fetch(`https://eldenring.fanapis.com/api/${query}?limit=10`);
};
