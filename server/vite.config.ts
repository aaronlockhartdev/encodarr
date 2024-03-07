import { sveltekit } from "@sveltejs/kit/vite";
import { type ViteDevServer, defineConfig } from "vite";
import type { Server } from 'http';

import { WorkerHandler } from "supervisor";

const workerHandler = {
    name: 'workerHandler',
    async configureServer(server: ViteDevServer) {
        if (!server.httpServer) return;

        WorkerHandler.register(server.httpServer as Server);
    }
}

export default defineConfig({
  plugins: [sveltekit(), workerHandler],
});
