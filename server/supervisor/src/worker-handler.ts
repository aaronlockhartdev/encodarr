import type { Server } from 'http';

import { WebSocketServer } from 'ws';

export namespace WorkerHandler {
    const wss = new WebSocketServer({ noServer: true });
    
    export function register(server: Server): void {
        console.log("wazzaaa")
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
                default: {
                    sock.destroy();
                }
            }
        });
    }
}
