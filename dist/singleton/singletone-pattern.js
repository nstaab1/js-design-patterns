"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SingletonPattern = void 0;
const counter_1 = require("./models/counter");
const simple_object_singleton_counter_1 = require("./models/simple-object-singleton-counter");
class SingletonPattern {
    constructor() {
        console.log('Initializing singleton');
        console.log(`Are instances the same: ${this.testInstanceEquality()}`);
        // this.testCountervaluesSingleton();
        this.testSimpleCounter();
    }
    testInstanceEquality() {
        const counter1 = new counter_1.Counter();
        const counter2 = new counter_1.Counter();
        return counter1.getInstance() === counter2.getInstance();
    }
    testCountervaluesSingleton() {
        const counter1 = new counter_1.Counter();
        const counter2 = new counter_1.Counter();
        counter1.increment();
        counter2.increment();
        // console.log('Counter 1: ' + counter1.getCount());
        // console.log('Counter 2: ' + counter2.getCount());
    }
    testSimpleCounter() {
        const counter1 = simple_object_singleton_counter_1.SIMPLE_COUNTER;
        const counter2 = simple_object_singleton_counter_1.SIMPLE_COUNTER;
        console.log(counter1.increment());
        console.log(counter2.increment());
    }
}
exports.SingletonPattern = SingletonPattern;
