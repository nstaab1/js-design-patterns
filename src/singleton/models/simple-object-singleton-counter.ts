let count = 0;

const SIMPLE_COUNTER = {
    increment() {
        return ++count;
    },
    decrement() {
        return --count;
    },
};

Object.freeze(SIMPLE_COUNTER);
export { SIMPLE_COUNTER };
