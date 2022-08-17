// program to solve quadratic equation
let ex1, ex2;

// take input from the user
let a = prompt("Enter the first number: ");
let b = prompt("Enter the second number: ");
let c = prompt("Enter the third number: ");

// calculate discriminant
let discriminant = b * b - 4 * a * c;

// condition for real and different roots
if (discriminant > 0) {
    ex1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    ex2 = (-b - Math.sqrt(discriminant)) / (2 * a);

    // result
    console.log(`The roots of quadratic equation are ${ex1} and ${ex2}`);
}

// condition for real and equal roots
else if (discriminant == 0) {
    ex1 = ex2 = -b / (2 * a);

    // result
    console.log(`The roots of quadratic equation are ${ex1} and ${ex2}`);
}

// if roots are not real
else {
    let realPart = (-b / (2 * a)).toFixed(2);
    let imagPart = (Math.sqrt(-discriminant) / (2 * a)).toFixed(2);

    // result
    console.log(
    `The roots of quadratic equation are ${realPart} + ${imagPart}i and ${realPart} - ${imagPart}i`
  );
}