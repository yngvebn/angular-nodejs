import { container } from './di';
import { Server } from './server';
import { Main } from './main';
import 'reflect-metadata';

let main =  container.get(Main);

console.log(main.getStatus());

export default main;