// ****** Function constructor and prototype

function Shape() {
    // construction function
    this.x = 0;
    this.y = 0;
}

Shape.prototype.move = function(x, y) {
    // delaem funkcionaljnostj na urovenj nizhe
    this.x += x;
    this.y += y;
    console.log("The shape is moved");
};

const shape = new Shape();
shape.height = 100; // dobavitsja v objekt shape, verhnij sloj (closest one to us)
Shape.prototype.height = 100; // upadjot v prototype, nizhnij sloj
// prjachu funkcionaljnostj, no u visoti budut takzhe vse komandi objekta
console.dir(shape);

function Rectangle() {
    Shape.call(this); // vizivaetsja konstruktor shape
    this.width = 100;
    this.height = 100; // peredajom kvadratu novie znachenija
}

Rectangle.prototype = Object.create(new Shape()); // ili new Shape zabiraet ot Shape vse svojstva s prototype i zapisivaet k sebe
Rectangle.prototype.constructor = Rectangle; // ssilku imeet na Rectangle. On kvadrat, no ispoljzuet svojstva shape - zaimstvuet

let rect = new Rectangle(); // na baze Shape construktor will create the let rect

console.log(`is rect instance of Rectangle` + (rect instanceof Rectangle)); // instanceof pokazivaet na kakkoj osnove sozdan. On sozdan na kvadrate

rect.move(1, 1); // pojavitsja nadpisj, sto figura dvigaetsja

/**************** */
function Something() {} // konstruktor

Object.setPrototypeOf(rect, new Something()); // privjazivaju k konkretnomu objektu
console.dor(rect);

Array.prototype.getEven = function() {
    return this.filter((item) => item % 2 === 0);
};

const arr = [1, 2, 3, 4, 5];
const evenArr = arr.getEven();
console.log(evenArr);

console.dir(Array); // rashshirili funkcional biblioteki massivov cherez protatipi