// classes
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var Coder = /** @class */ (function () {
    function Coder(name, music, age, lang) {
        if (lang === void 0) { lang = "Typescript"; }
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
    }
    Coder.prototype.getAge = function () {
        return "Hello, I am ".concat(this.age);
    };
    return Coder;
}());
var Dave = new Coder("Dave", "Rock", 42, "Typescript");
console.log(Dave.name);
console.log(Dave.getAge());
var WebDev = /** @class */ (function (_super) {
    __extends(WebDev, _super);
    function WebDev(computer, name, music, age) {
        var _this = _super.call(this, name, music, age) || this;
        _this.computer = computer;
        _this.computer = computer;
        return _this;
    }
    WebDev.prototype.getLang = function () {
        return "I write ".concat(this.lang);
    };
    return WebDev;
}(Coder));
var Sara = new WebDev("Mac", "Sara", "Lofi", 25);
console.log(Sara.getLang());
var Flutist = /** @class */ (function () {
    function Flutist(name, instrument) {
        this.name = name;
        this.instrument = instrument;
    }
    Flutist.prototype.play = function (action) {
        return "".concat(this.name, " ").concat(action, " this ").concat(this.instrument);
    };
    return Flutist;
}());
var Page = new Flutist("Jimmy", "flute");
console.log(Page.play("turkish flute tune"));
// static
var Peeps = /** @class */ (function () {
    function Peeps(name) {
        this.name = name;
        this.name = name;
        this.id = ++Peeps.count; // increments first before assigning
    }
    Peeps.getCount = function () {
        return Peeps.count;
    };
    Peeps.count = 0;
    return Peeps;
}());
var John = new Peeps("John");
var Emy = new Peeps("Emy");
var Tur = new Peeps("Tur");
console.log(Peeps.count);
var Bands = /** @class */ (function () {
    function Bands() {
        this.dataState = [];
    }
    Object.defineProperty(Bands.prototype, "data", {
        // special key code to get data
        get: function () {
            return this.dataState;
        },
        // setters cannot return value
        set: function (value) {
            if (Array.isArray(value) && value.every(function (el) { return typeof el === "string"; })) {
                this.dataState = value;
                return;
            }
            else
                throw new Error("Pram is not an array of strings");
        },
        enumerable: false,
        configurable: true
    });
    return Bands;
}());
var MyBands = new Bands();
MyBands.data = ["1asd", "adsdas"];
console.log(MyBands.data);
MyBands.data = __spreadArray(__spreadArray([], MyBands.data, true), ["lastitem"], false);
console.log(MyBands.data);
