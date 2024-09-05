function fizzBuzz(numero: number ): string {
    if ( numero % 3 == 0 && numero % 5 == 0){
        return "FizzBuzz";
    } else if (numero % 5 == 0){
        return "Buzz";
    } else if ( numero % 3 == 0 ){
        return "Fizz"
    } else {
        return numero.toString();
    }
    
    
}
module.exports = fizzBuzz;