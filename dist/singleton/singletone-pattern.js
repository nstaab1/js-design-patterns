"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SingletonPattern = void 0;
const counter_1 = require("./models/counter");
class SingletonPattern {
    constructor() {
        console.log('Initializing singleton');
        console.log(`Are instances the same: ${this.testInstanceEquality()}`);
    }
    testInstanceEquality() {
        const counter1 = new counter_1.Counter();
        const counter2 = new counter_1.Counter();
        return counter1.getInstance() === counter2.getInstance();
    }
}
exports.SingletonPattern = SingletonPattern;
