import { container } from './../di';
import { Inject, Injectable} from 'injection-js';

export function Get(route, callback, ...preFlight: any[]) {
    let expressApp = container.get('express');

    expressApp.get(route, [...preFlight, (req, res) => {
        let result = callback(req);
        if(typeof result === "string") {
            res.send(result);
        }
        if(typeof result === "object"){
            res.send(result);
        }
    }]);    
}
