import path from 'path';
import { UserConfig } from 'vite';

const config: UserConfig = {
    alias: {
        '/@src/': path.resolve(__dirname, 'src'),
        '/@docs/': path.resolve(__dirname, 'docs'),
    },

};

export default config;
