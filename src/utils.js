export const getAgeDeclination = (age) => {
  const cases = [2, 0, 1, 1, 1, 2];
  const declension = [`год`, `года`, `лет`];
  return declension[(age % 100 > 4 && age % 100 < 20) ? 2 : cases[(age % 10 < 5) ? age % 10 : 5]];
};
