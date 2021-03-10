export const SORT_OPTIONS = [`Имя`, `Рейтинг`, `Возраст`, `Любимый цвет`];
export const ActiveSortToCompareFunc = {
  "Имя": (a, b) => a.name - b.name,
  "Рейтинг": (a, b) => b.rating - a.rating,
  "Возраст": (a, b) => b.age - a.age,
  "Любимый цвет": (a, b) => b.favoriteColor - a.favoriteColor
};
export const AppRoute = {
  MAIN: `/`,
  NEW: `/new`
};

