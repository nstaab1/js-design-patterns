"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SingletonPattern = void 0;
const counter_1 = require("./models/counter");
class SingletonPattern {
    constructor() {
        console.log('Initializing singleton');
        console.log(`Are instances the same: ${this.testInstanceEquality()}`);
        this.testCountervaluesSingleton();
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
        console.log('Counter 1: ' + counter1.getCount());
        console.log('Counter 2: ' + counter2.getCount());
    }
}
exports.SingletonPattern = SingletonPattern;
