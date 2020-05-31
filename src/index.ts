require('dotenv').config();
import express from 'express';
import glob from 'glob';
import path from 'path';

const app = express();

const port = process.env.PORT || 3000;

setupRoutes();

app.listen(port, () => {
    console.log('server has started.');
});

function setupRoutes() {
    const routers = glob
        .sync(path.join(__dirname, `./route/**/*-router.ts`))
        .map(routerPath => require(routerPath))
        .map(router => router.default);
    for (const registerRouter of routers) {
        registerRouter('/', app);
    }
}