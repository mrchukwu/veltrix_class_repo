// Type conversion


//Implicity Conversion

const a = "5";
const b = 10;
const c = 20;
const d = 10;



const result = b + c + Number(a); // "510" (string) BODMAS BIDMAS
// console.log(result);

const addNumber = function (num1, num2){
    console.log(Number(num1) + Number(num2));
}


const func = function (num1, num2){

    const add = addNumber(num1, num2);

    console.log(add);
}

func(5, 10);
func(4, 10);

// 01