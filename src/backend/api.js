const path = require(`path`);
require(`dotenv`).config({path: path.resolve(__dirname, `.env`)});

const cors = require(`cors`);
const express = require(`express`);
const pgp = require(`pg-promise`)();
const multer = require(`multer`);
const {getFileExtension, logAction, logError} = require(path.resolve(__dirname, `utils.js`));

const HOST = process.env.API_HOST || `localhost`;
const PORT = process.env.API_PORT || 3000;
const TABLE = process.env.DB_TABLE_NAME;
const {VALID_AVATAR_EXTENSIONS} = require(path.resolve(__dirname, `const.js`));

const api = express();
const db = pgp(process.env.DB_URL);

const storage = multer.diskStorage({
  destination: (_req, _file, cb) => {
    cb(null, path.resolve(__dirname, `./avatars`));
  },
  filename: (_req, file, cb) => {
    cb(null, `student-${file.fieldname}-${Date.now()}.${getFileExtension(file)}`);
  }
});

const fileFilter = (_req, file, cb) => {
  const fileExtension = getFileExtension(file);
  const isValid = VALID_AVATAR_EXTENSIONS.includes(fileExtension);
  cb(null, isValid);
};

const upload = multer({storage, fileFilter});

const apiRun = () => {
  api.use(express.static(path.resolve(__dirname, `./avatars`)));
  api.use(express.json());
  api.use(cors());
  // возвращает массив объектов студентов
  api.get(`/students`, (_req, res) => {
    db.query(`SELECT * FROM ${TABLE};`)
    .then((students) => {
      res.json(students);
      logAction(`GET students`);
    })
    .catch((error) => {
      throw error;
    });
  });
  // возвращает объект нового студента, добавленного в БД (без валидации переданных данных)
  api.post(`/student`, upload.single(`avatar`), (req, res) => {
    const avatar = req.file;
    const student = req.body;
    const urlToAvatar = `${req.protocol}://${req.get(`host`)}/${avatar.filename}`;
    db.query(`INSERT INTO ${TABLE}
      (name, email, rating, age, avatar, spec, "group", sex, favcolor)
      VALUES ('${student.name}',
      '${student.email}',
      ${student.rating},
      ${student.age},
      '${urlToAvatar}',
      '${student.spec}',
      '${student.group}',
      '${student.sex}',
      '${student.favcolor}'
      ) RETURNING *;`, student)
    .then((students) => {
      res.json(students[0]);
      logAction(`POST student (id ${students[0].id})`);
    })
    .catch((error) => {
      throw error;
    });
  });
  // возвращает id удаленного студента (или ошибку 404, если студента с таким id в БД нет)
  api.delete(`/student/:id`, (req, res) => {
    const id = req.params.id;
    db.query(`DELETE FROM ${TABLE} WHERE id = ${id} RETURNING id;`, id)
    .then((students) => {
      const student = students[0];
      if (student) {
        res.send(student.id.toString());
        logAction(`DELETE student (id ${student.id})`);
      } else {
        res.status(404).send(`Пользователь с таким id не найден`);
      }
    })
    .catch((error) => logError(error));
  });
  api.listen(PORT);
  logAction(`API running at http://${HOST}:${PORT}`);
};

process.on(`uncaughtException`, (error) => {
  logError(error);
  throw new Error();
});

apiRun();
