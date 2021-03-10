function fizzbuzz(number){
   while (number >= 0 && number < 101){
       if (number %3 == 0 && number %5 != 0){
           return "fizz"
       }
       if (number %5 == 0 && number %3 != 0){
        return "buzz"
        }
       if (number %3 == 0 && number %5 == 0){
        return "fizzbuzz"
        }
        else {
            return number.toString()
        }
   }
}

     
module.exports = fizzbuzz;