import type { Server } from 'http';
import { WebSocketServer } from 'ws';

export namespace WorkerSupervisor {
    const wss = new WebSocketServer({ noServer: true });
    
    export function attach(server: Server): void {
        server.on("upgrade", (req, sock, head) => {
            if (!req.url) return;

            const url = new URL(req.url);

            switch (url.pathname) {
                case "/api/workers/ws": {
                    wss.handleUpgrade(req, sock, head, (ws) => {
                        wss.emit("connection", ws, req);
                    });
                    break;
                }
            }
        });
    }
}
