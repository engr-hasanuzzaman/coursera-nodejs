const rect = require('./example-module/rectangle');
const math = require('./example-module/math');

function solveRect(l,b) {
    console.log("Solving for rectangle with l = " + l + " and b = " + b);

    if (l <= 0 || b <= 0) {
        console.log("Rectangle dimensions should be greater than zero:  l = "
               + l + ",  and b = " + b);
    }
    else {
	    console.log("The area of the rectangle is " + rect.area(l,b));
	    console.log("The perimeter of the rectangle is " + rect.perimeter(l,b));
    }
}

solveRect(2,4);
solveRect(3,5);
solveRect(0,5);
solveRect(-3,5);

console.log(`addition of 2, 4 is ${math.sum(2,4)}`);
console.log(`substruct of 2, 4 is ${math.sub(2,4)}`);
console.log(`division of 2, 4 is ${math.div(2,4)}`);
console.log(`multiplication of 2, 4 is ${math.mul(2,4)}`);
