const fs = require(`fs`);
const path = require(`path`);
const File = {
  ACTION: path.resolve(__dirname, `./logs/actions.txt`),
  ERROR: path.resolve(__dirname, `./logs/errors.txt`)
};

const getTimeStamp = () => {
  const date = new Date();
  return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`;
};

const getFileExtension = (file) => {
  const fileName = file.originalname.toLowerCase();
  return fileName.slice(fileName.indexOf(`.`) + 1);
};

const log = (message, logFile) => {
  fs.appendFile(logFile, `${getTimeStamp()}: ${message}\n`, (error) => {
    if (error) {
      throw error;
    }
  });
};

const logAction = (message) => log(message, File.ACTION);

const logError = (error) => {
  const message = `Caught exception\nErr msg: ${error.message}\nErr name: ${error.name}\nErr stack: ${error.stack}`;
  log(message, File.ERROR);
};

module.exports = {getTimeStamp, getFileExtension, logAction, logError};