export const SORT_OPTIONS = [`Имя`, `Рейтинг`, `Возраст`, `Любимый цвет`];
export const ActiveSortToCompareFunc = {
  "Имя": (a, b) => {
    if (a.name > b.name) {
      return -1;
    }
    if (a.name < b.name) {
      return 1;
    }
    return 0;
  },
  "Рейтинг": (a, b) => a.rating - b.rating,
  "Возраст": (a, b) => a.age - b.age,
  "Любимый цвет": (a, b) => {
    if (a.favoriteColor > b.favoriteColor) {
      return -1;
    }
    if (a.favoriteColor < b.favoriteColor) {
      return 1;
    }
    return 0;
  }
};
export const AppRoute = {
  MAIN: `/`,
  NEW: `/new`
};

