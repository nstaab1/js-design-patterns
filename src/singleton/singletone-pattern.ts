import { Counter } from './models/counter';

export class SingletonPattern {
    constructor() {
        console.log('Initializing singleton');
        console.log(this.testInstanceEquality());
    }

    testInstanceEquality(): boolean {
        const counter1 = new Counter();
        const counter2 = new Counter();
        return counter1.getInstance() === counter2.getInstance();
    }
}
