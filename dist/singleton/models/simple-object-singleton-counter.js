"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SIMPLE_COUNTER = void 0;
let count = 0;
const SIMPLE_COUNTER = {
    increment() {
        return ++count;
    },
    decrement() {
        return --count;
    },
};
exports.SIMPLE_COUNTER = SIMPLE_COUNTER;
Object.freeze(SIMPLE_COUNTER);
