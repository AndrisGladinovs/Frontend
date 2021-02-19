class Rectangle {
    // snachala dolzhen bitj realizovan konstruktor - instrukcija
    constructor(height, width) {
        this.height = height;
        this.width = width; // polozhili znachenie v konstruktor, kotorie poluchili outside. Eto nizhnij sloj
    }

    calcArea() {
        return this.height * this.width;
    }
    print() {
        console.log(`w: ${this.width}, h: ${this.height}`);
    }
}

const square = new Rectangle(10, 10); // peredajom znachenija dlja calcArea()
console.log(square.calcArea());

const rect = new Rectangle(20, 40);
console.log(rect.calcArea());
console.dir(square);

// add a color to rectangle

class ColorRectangleWithText extends Rectangle {
    constructor(height, width, text, bgColor) {
        super(height, width); // eto konstruktor roditelja
        this.text = text;
        this.bgColor = bgColor;
    }
    showMyProps() {
        console.log(`Text is ${this.text}, color is ${this.bgColor}`);
    }
    print() {
        super.print();
        console.log(`color is: ${this.bgColor}`);
    }
}

const colorRect = new ColorRectangleWithText(100, 20, "Hello world!", "red");
console.log(colorRect.calcArea());
colorRect.showMyProps();
console.dir(colorRect);

square.print();
colorRect.print();

colorRect.print();