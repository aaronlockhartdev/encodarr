import { createServer } from 'http';
import polka from 'polka';

import { handler } from './build/handler.js';
import { WorkerHandler } from 'supervisor';

const server = createServer();

WorkerHandler.register(server);

const port = process.env.PORT ?? 3000;

const app = polka({ server: server });
app.use(handler);
app.listen(port, () => {
    console.log(`> Running on localhost:${port}`);
});
