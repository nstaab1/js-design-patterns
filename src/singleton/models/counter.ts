export class Counter {
    static counter = 0;
    private static instance: Counter;

    public getInstance(): Counter {
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
