import { Get } from './utils/get';
import { container } from './di';
import 'reflect-metadata';
import { Inject, Injectable, ReflectiveInjector } from 'injection-js';
import { Application } from 'express';
import * as http from 'http';

export class Test{
    public name: string;
    constructor(name: string) {
        this.name = name;
    }
}

@Injectable()
export class Server {
    public app: Application;
    private server: any;

    constructor( @Inject('express') express: Application) {
        console.log('server instansiated');
        this.app = express;        
        this.app.set("port", 8081);

        this.app.get('/', (req, res) => {
            res.send('I work!');
        });
        Get('/test2/:param', this.handleTest, (req, res, next) => { console.log('attempting get test2/:param'); next(); })
        Get('/test', args => 'Wow...');

        this.app.get('/user/:userId', (req, res) => {
            res.send('You asked for user with id: '+ req.params.userId);
        });
        this.server = http.createServer(this.app);
        this.server.listen(this.normalizePort(8081));
    }
    public getStatus() {
        return `I'm started`;
    }
    public start() {
        console.log('starting server');
    }

    private handleTest = (args: { params: { param: string }}) => {
        return new Test(args.params.param);
    }

    private normalizePort(val) {
        var port = parseInt(val, 10);

        if (isNaN(port)) {
            // named pipe
            return val;
        }

        if (port >= 0) {
            // port number
            return port;
        }

        return false;
    }
}

ReflectiveInjector.resolveAndCreate([Server], container);