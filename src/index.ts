import express from 'express';
import { AppDataSource } from './data-source';
import routes from './routes';

AppDataSource.initialize()
  .then(() => {
    const app = express();
    app.use(express.json());
    app.use(routes);
    const port = process.env.PORT as number | undefined;
    app.listen(port, () =>
      console.log(`Server running at http://localhost:${port}`)
    );
  })
  .catch((e) => {
    console.log(`Error: ${e.message}`);
  });
