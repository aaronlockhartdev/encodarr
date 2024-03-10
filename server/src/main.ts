import { createServer } from 'http';
import polka from 'polka';

import { handler } from '@encodarr/user-interface';
import { WorkerSupervisor } from '@encodarr/worker-supervisor';

const server = createServer();

WorkerSupervisor.attach(server);

const port = process.env.PORT ?? 3000;

const app = polka({ server: server });
app.use(handler);
app.listen(port, () => {
    console.log(`> Running on localhost:${port}`);
});
