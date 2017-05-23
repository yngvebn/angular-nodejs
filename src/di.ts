import { Server } from './server';
import { Main } from './main';
import { ReflectiveInjector } from 'injection-js';
import * as express from 'express';

export const container = ReflectiveInjector.resolveAndCreate([
    Main,
    Server,
    { provide: 'express', useValue: express() }
]);
