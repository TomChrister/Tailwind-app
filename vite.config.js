import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
    server: {
        port: 3000,
    },
    build: {
        rollupOptions: {
            input: {
                main: resolve (__dirname, 'index.html'),
                feed: resolve (__dirname, 'feed.html'),
                profile: resolve (__dirname, 'profile.html'),
            },
        },
    },
});
