function a(n) {
    console.log("n is", n);
    y = n * 2;
    return y;
}
x = a(3) + a(5);
console.log("x is", x);

//Answer is: n is 3, n is 5, x is 16
