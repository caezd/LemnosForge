import { uglify } from 'rollup-plugin-uglify';

export default {
    input: 'src/main.js',
    output: {
        file: 'dist/switcheroo.js',
        format: 'iife',
        globals: {
            jquery: '$'
          }
    },
    external: ['jquery'],
    /* plugins: [uglify()] */
};
