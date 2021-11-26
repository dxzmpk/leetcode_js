export default function outer () {
    let b = 10;
    function inner() {

        let a = 20;
        console.log("a= " + a + " b= " + b);
        a++;
    }
    b+=2;
    return inner;
}
