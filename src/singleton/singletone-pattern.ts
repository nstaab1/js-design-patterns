import { Counter } from './models/counter';
import { SIMPLE_COUNTER } from './models/simple-object-singleton-counter';

export class SingletonPattern {
    constructor() {
        console.log('Initializing singleton');
        console.log(`Are instances the same: ${this.testInstanceEquality()}`);
        // this.testCountervaluesSingleton();
        this.testSimpleCounter();
    }

    testInstanceEquality(): boolean {
        const counter1 = new Counter();
        const counter2 = new Counter();
        return counter1.getInstance() === counter2.getInstance();
    }

    testCountervaluesSingleton(): void {
        const counter1 = new Counter();
        const counter2 = new Counter();
        counter1.increment();
        counter2.increment();
        // console.log('Counter 1: ' + counter1.getCount());
        // console.log('Counter 2: ' + counter2.getCount());
    }

    testSimpleCounter() {
        const counter1 = SIMPLE_COUNTER;
        const counter2 = SIMPLE_COUNTER;
        console.log(counter1.increment());
        console.log(counter2.increment());
    }
}
