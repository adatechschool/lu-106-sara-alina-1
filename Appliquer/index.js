function fizzbuzz(number){
        if(!(typeof number === "number")){
            return undefined
        }     
        else if (!(number >= 0 && number < 101) || !(Number.isInteger(number))){
                return "error"
        }
        else if (number %3 == 0 && number %5 == 0){
            return "fizzbuzz"
        }             
       else if (number %3 == 0){
           return "fizz"
       }
       else if (number %5 == 0){
           return "buzz"
        }
        else {
            return number.toString()
        }
   
}

     
module.exports = fizzbuzz;