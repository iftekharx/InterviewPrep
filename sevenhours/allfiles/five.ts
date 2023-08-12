// classes

class Coder {
  constructor(
    public name: string,
    public readonly music: string,
    private age: number,
    protected lang: string = "Typescript"
  ) {
    this.name = name;
    this.music = music;
    this.age = age;
    this.lang = lang;
  }

  public getAge() {
    return `Hello, I am ${this.age}`;
  }
}

const Dave = new Coder("Dave", "Rock", 42, "Typescript");

console.log(Dave.name);
console.log(Dave.getAge());

class WebDev extends Coder {
  constructor(
    public computer: string,
    name: string,
    music: string,
    age: number
  ) {
    super(name, music, age);
    this.computer = computer;
  }

  public getLang() {
    return `I write ${this.lang}`;
  }
}

const Sara = new WebDev("Mac", "Sara", "Lofi", 25);

console.log(Sara.getLang());

interface Musician {
  name: string;
  instrument: string;
  play(action: string): string;
}

class Flutist implements Musician {
  name: string;
  instrument: string;

  constructor(name: string, instrument: string) {
    this.name = name;
    this.instrument = instrument;
  }

  play(action: string) {
    return `${this.name} ${action} this ${this.instrument}`;
  }
}

const f = new Flutist("nadsoindas", "asdijoidas");
f.play("playing");

const Page = new Flutist("Jimmy", "flute");
console.log(Page.play("turkish flute tune"));

// static
class Peeps {
  static count: number = 0;
  static getCount(): number {
    return Peeps.count;
  }

  public id: number;
  constructor(public name: string) {
    this.name = name;
    this.id = ++Peeps.count; // increments first before assigning
  }
}

const John = new Peeps("John");
const Emy = new Peeps("Emy");
const Tur = new Peeps("Tur");

console.log(Peeps.count);

class Bands {
  private dataState: string[];

  constructor() {
    this.dataState = [];
  }

  // special key code to get data
  public get data(): string[] {
    return this.dataState;
  }

  // setters cannot return value
  public set data(value: string[]) {
    if (Array.isArray(value) && value.every((el) => typeof el === "string")) {
      this.dataState = value;
      return;
    } else throw new Error("Pram is not an array of strings");
  }
}

const MyBands = new Bands();
MyBands.data = ["1asd", "adsdas"]; // setter
console.log(MyBands.data); // getter

MyBands.data = [...MyBands.data, "lastitem"];
console.log(MyBands.data);
