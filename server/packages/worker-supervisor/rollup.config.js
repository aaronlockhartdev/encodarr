import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import terser from '@rollup/plugin-terser';

import pkg from './package.json' with { type: 'json' };

export default [
    {
        input: './src/main.ts',
        external: [
            /node_modules/
        ],
        preserveSymlinks: true, 
        plugins: [
            resolve(),
            typescript(),
            terser()
        ],
        output: [
            { file: pkg.exports.default, format: 'es' }
        ]
    }
]
