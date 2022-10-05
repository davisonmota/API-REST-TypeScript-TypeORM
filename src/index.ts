import express from 'express';
import { AppDataSource } from './data-source';

AppDataSource.initialize()
  .then(() => {
    const app = express();
    app.use(express.json());

    const port = process.env.PORT as number | undefined;
    app.listen(port, () =>
      console.log(`Server running at http://localhost:${port}`)
    );
  })
  .catch((e) => {
    console.log(`Error: ${e.message}`);
  });
