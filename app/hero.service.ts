/**
 * Created by artur on 16.04.16.
 */

import {HEROES} from './mock-heroes';
import {Injectable} from 'angular2/core';
// import {Hero} from './hero'

@Injectable()
export class HeroService {
    getHeroes() {
        return Promise.resolve(HEROES);
    }

    // getHeroesSlowly() {
    //     return new Promise<Hero[]>(resolve =>
    //         setTimeout(()=>resolve(HEROES), 2000) // 2 seconds
    //     );
    // }
}