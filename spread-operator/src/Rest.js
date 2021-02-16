


export default function Rest() {
    //es5
    // ab jitnai is ma parameter han utne he value dayni paray ge utna he add krwna paray ga
    // function sum(a, b) {
    //     console.log(a + b);
    // }
    // sum(1, 2, 3, 4, 5, 6); // abhe ya srif 1 , 2 ko he  plus kr raha han ab is ko tkcal karnai kae liya

    // ab is ka solution rest parmeter 
    // es6

    function sum(...inputs) {
        let total = 0;
        inputs.map((e) => (
            total += e
        ))
        console.log(total)
    }

    sum(10, 20, 30, 40, 50, 60, 70, 80, 90, 100) // ab apki marzi aap jitnai marzi chahay argment ma value dayn
    // is nai ek array bana deya iska


    function fun(a, b, ...c) {
        console.log(`A => ${a} : B => ${b} `);
        console.log(c);
        console.log(c[0]);
        console.log(c.length);
        console.log(c.indexOf('Eden'));
    }

    fun("Abdullah", "Sameer", "Younus", "Khan", "Shazaib", "Ali", "Eden");
    return (
        <>
        </>
    )
}