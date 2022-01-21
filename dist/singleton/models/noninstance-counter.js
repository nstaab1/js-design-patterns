"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Counter = void 0;
class Counter {
    constructor() {
        this.counter = 0;
    }
    getInstance() {
        return this;
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
