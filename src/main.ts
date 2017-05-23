import { Server } from './server';
import 'reflect-metadata';
import { Injectable } from 'injection-js';

@Injectable()
export class Main {
        constructor(private server: Server) {
                server.start();
        }

        public getStatus() {
                return this.server.getStatus();
        }
}
