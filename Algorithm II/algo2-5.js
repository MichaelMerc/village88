function op(a, b) {
    c = a + b;
    console.log("c is", c);
    return c;
}
x = op(2, 3) + op(3, 5);
console.log("x is", x);

//Answer is: c is 5, c is 8, x is 13
