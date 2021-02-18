import express from 'express';
import path from 'path';
import fs from 'fs';
import { createLogger, format, transports } from 'winston';

const log = createLogger({
  format: format.combine(
    format.colorize(),
    format.timestamp(),
    format.prettyPrint(),
    format.simple()
  ),
  transports: [new transports.Console()],
});

const appDirectory = fs.realpathSync(process.cwd());
const resolveAppPath = (relativePath) =>
  path.resolve(appDirectory, relativePath);

const { PORT = 3000 } = process.env;

const app = express();

app.use(express.static('dist'));

app.get('/health', (req, res) => {
  res.status(200).send('App is running!');
});

app.get('/*', (req, res) => {
  res.sendFile(resolveAppPath('dist/index.html'), (err) => {
    if (err) {
      res.status(500).send(err);
    }
  });
});

app.listen(PORT, () => {
  log.info(`Your app is now running on port ${PORT} 🚀`);
});
