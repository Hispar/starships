import {Injectable} from 'angular2/core';

import { Focus } from './focus'
import { FOCUSES } from './mock-focus';

@Injectable()
export class FocusService {
    getFocus(id:number) {
        return Promise.resolve(FOCUSES).then(
                focuses => focuses.filter(focus => focus.id === id)[0]
        );
    }

    getFocuses() {
        return Promise.resolve(FOCUSES);
    }
}