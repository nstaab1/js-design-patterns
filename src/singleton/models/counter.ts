export class Counter {
    counter = 0;
    private static instance: Counter;

    public getInstance(): Counter {
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
