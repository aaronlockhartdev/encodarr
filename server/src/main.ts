import { createServer } from 'http';
import polka from 'polka';

import { handler } from '@encodarr/svelte/handler';
import { WorkerHandler } from '@encodarr/supervisor';

const server = createServer();

WorkerHandler.register(server);

const port = process.env.PORT ?? 3000;

const app = polka({ server: server });
app.use(handler);
app.listen(port, () => {
    console.log(`> Running on localhost:${port}`);
});
