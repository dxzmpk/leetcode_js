function outer() {
    let b = 10;
    var c = 100;
    function inner() {

        let a = 20;
        console.log("a= " + a + " b= " + b);
        a++;
    }
    b+=2;
    return inner;
}

var X = outer();  // outer() invoked the first time
var Y = outer();  // outer() invoked the second time
//end of outer() function executions
X(); // X() invoked the first time