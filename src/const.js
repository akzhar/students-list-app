export const SEARCH_BY_FIELD = `name`;
export const QUESTION_NAMES = [`name`, `email`, `spec`, `group`, `rating`, `sex`, `age`, `favoriteColor`];
export const VALID_IMG_TYPES = [`image/png`, `image/jpg`, `image/jpeg`];
export const SEX_TYPES = [`Мужской`, `Женский`];
export const AVAILABLE_COLORS = [`blue`, `red`, `green`, `yellow`, `black`, `orange`, `rainbow`];
export const SORT_TYPES = [`Имя`, `Рейтинг`, `Возраст`, `Любимый цвет`];
export const SortTypeToCompareFunc = {
  "Имя": (a, b) => {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  },
  "Рейтинг": (a, b) => a.rating - b.rating,
  "Возраст": (a, b) => a.age - b.age,
  "Любимый цвет": (a, b) => {
    if (a.favoriteColor < b.favoriteColor) {
      return -1;
    }
    if (a.favoriteColor > b.favoriteColor) {
      return 1;
    }
    return 0;
  }
};
export const Class = {
  QUESTION_WARNING: `student-form__question--warning`,
  AVATAR_DROPZONE_DRAGGED_OVER: `student-form__avatar-dropzone--dragged-over`
};
export const Message = {
  OK: {
    DATA_WAS_LOADED: `Данные студентов были успешно загружены`,
    CARD_WAS_CREATED: `Карточка студента была успешно создана`,
    CARD_WAS_REMOVED: `Карточка студента была успешно удалена`
  },
  ERROR: {
    DATA_WAS_NOT_LOADED: `Ошибка при загрузке данных c сервера`,
    CARD_WAS_NOT_CREATED: `Ошибка при попытке создать карточку студента`,
    CARD_WAS_NOT_REMOVED: `Ошибка при удалении карточки студента`,
    NOT_VALID_FIELDS: `Ошибка: заполните корректно все поля формы`,
    NOT_VALID_AVATAR_TYPE: `Ошибка: загрузите один из следующих форматов: ${VALID_IMG_TYPES.join(`, `)}`
  }
};
export const AppRoute = {
  MAIN: `/`,
  NEW: `/new`
};

