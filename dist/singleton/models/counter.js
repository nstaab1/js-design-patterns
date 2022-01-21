"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Counter = void 0;
class Counter {
    getInstance() {
        if (!Counter.instance) {
            Counter.instance = new Counter();
        }
        return Counter.instance;
    }
    getCount() {
        return Counter.counter;
    }
    increment() {
        return Counter.counter++;
    }
    decrement() {
        return Counter.counter--;
    }
}
exports.Counter = Counter;
Counter.counter = 0;
