"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Counter = void 0;
class Counter {
    constructor() {
        this.counter = 0;
    }
    getInstance() {
        if (!Counter.instance) {
            Counter.instance = new Counter();
        }
        return Counter.instance;
    }
    getCount() {
        return this.counter;
    }
    increment() {
        return this.counter++;
    }
    decrement() {
        return this.counter--;
    }
}
exports.Counter = Counter;
