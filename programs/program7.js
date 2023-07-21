// Shape class
class Shape {
    // Constructor to set width and height
    constructor(width, height) {
      this.width = width;
      this.height = height;
    }
  
    // Method to calculate the area
    area() {
      return 0; // The area of a generic shape is undefined
    }
}
  
// Triangle class, subclass of Shape
class Triangle extends Shape {
    
    // Constructor to set width and height (base and height of the triangle)
    constructor(base, height) {
        super(base, height); // Call the constructor of the parent class (Shape)
    }

    // Method to calculate the area of the triangle
    area() {
        return 0.5 * this.width * this.height; // Area of a triangle = 1/2 * base * height
    }
}

// Rectangle class, subclass of Shape
class Rectangle extends Shape {
    // Constructor to set width and height (length and width of the rectangle)
    constructor(length, width) {
        super(length, width); // Call the constructor of the parent class (Shape)
    }

    // Method to calculate the area of the rectangle
    area() {
            return this.width * this.height; // Area of a rectangle = length * width
    }
}

// Create instances of Triangle and Rectangle
const triangle = new Triangle(5, 8); // Triangle with base 5 and height 8
const rectangle = new Rectangle(4, 6); // Rectangle with length 4 and width 6

// Call the area() method for each shape and display the results
console.log('Area of the Triangle:', triangle.area());
console.log('Area of the Rectangle:', rectangle.area());
  