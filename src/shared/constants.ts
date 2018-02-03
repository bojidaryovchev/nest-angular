import {join} from 'path';

const cwd: string = process.cwd();

export const CLIENT_DIST: string = join(cwd, 'dist');
export const indexPage: string = join(cwd, 'dist/index.html');
export const serverBundle: string = join(cwd, 'bin/server.bundle.js');
