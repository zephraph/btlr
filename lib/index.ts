import * as prog from 'caporal';
import config, { setup } from './config';

type AppData = {
    name: string,
    version: string,
    commandPath: string,
    servicePath: string
};

export default function({ name, version, commandPath, servicePath }: AppData) {
    return prog(name)
        .version(version)
};