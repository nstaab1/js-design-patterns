export class Counter {
    counter: number;

    constructor() {
        this.counter = 0;
    }

    public getInstance(): Counter {
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
