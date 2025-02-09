import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
    server: {
        port: 3000,
    },
    build: {
        rollupOptions: {
            input: {
                main: resolve (__dirname, 'login.html'),
                feed: resolve (__dirname, 'index.html'),
                profile: resolve (__dirname, 'profile.html'),
                create: resolve (__dirname, 'create.html'),
            },
        },
    },
});
