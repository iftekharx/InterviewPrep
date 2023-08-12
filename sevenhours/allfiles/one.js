var myName = "Dave"; // explicitly said its a string
// typescript does not like redeclaring variable with different types.
var meaningOfLife;
var isLoading;
var album; // union type
var sum2 = function (a, b) {
    return a + b;
};
console.log(sum2(100, 200));
var Ferrari = /** @class */ (function () {
    function Ferrari() {
    }
    Ferrari.prototype.startEngine = function () {
        console.log("Engine started");
    };
    return Ferrari;
}());
var car1 = new Ferrari();
car1.startEngine();
