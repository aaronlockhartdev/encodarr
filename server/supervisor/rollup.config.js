import typescript from '@rollup/plugin-typescript';
import pkg from './package.json' with { type: 'json' };

export default [
    {
        input: 'src/main.ts',
        plugins: [ typescript() ],
        output: { file: pkg.exports["."].default, format: 'es' },
        external: [ 'ws' ]
    }
]
