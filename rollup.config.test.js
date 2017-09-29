import config, {resolve} from './rollup.config';

config.name = config.name + '-test';
config.input = resolve(`./test/${config.name}.fsproj`);
config.output.file = resolve(`./dist/${config.name}.js`);
config.output.format = 'cjs';
config.external = ['assert'];
config.watch.include.push('test/**/*.fs');

export default config;
