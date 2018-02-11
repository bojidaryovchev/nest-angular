import {join} from 'path';

const cwd: string = process.cwd();

export const FOLDER_DIST: string = join(cwd, 'dist');
export const FOLDER_DIST_BROWSER: string = join(FOLDER_DIST, 'browser');
export const FOLDER_DIST_SERVER: string = join(FOLDER_DIST, 'server');
