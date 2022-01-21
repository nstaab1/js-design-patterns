export class ProxyTest {
    person = {
        name: 'John Doe',
        age: 42,
        nationality: 'American',
    };

    handler: ProxyHandler<Person> = {
        get: (obj: Person, prop: keyof Person) => {
            console.log(`The value of ${String(prop)} is ${obj[prop]}`);
        },
    };

    constructor() {
        const personProxy = new Proxy<Person>(this.person, this.handler);
        personProxy.name;
    }
}

export class Person {
    constructor(
        public name: string,
        public age: number,
        public nationality: string
    ) {}
}
