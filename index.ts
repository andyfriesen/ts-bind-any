
class A {
  sayHi() {
    console.log('Hello!');
  }
}

const a = new A();

const t1: NodeJS.Timer = setTimeout(() => a.sayHi(), 500);
const t2: NodeJS.Timer = setTimeout(a.sayHi.bind(a), 500);
