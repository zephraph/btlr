import * as Config from 'nodejs-config';
import { isAbsolute, join } from 'path';
import { homedir } from 'os';

let config;

export const setup = (name: string, env?: string): any => {
    config = Config(
        join(homedir(), name),
        env
    );
    return config;
}

export default function(name?: string) {
    return config || setup(name || 'btlr');
};

