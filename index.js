function createCircle(radius) {
    return {
        radius,
        draw: function() {
            console.log("Draw");
        }
    }
}

//Constructor function
function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log("Draw");
    }
}

const another = new Circle(1);
