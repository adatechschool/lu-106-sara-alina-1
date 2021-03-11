function fizzbuzz(number){
<<<<<<< HEAD
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
=======
   while (number >= 0 && number < 101){
       if (number %3 == 0 && number %5 != 0){
           return "fizz"
       }
       if (number %5 == 0 && number %3 != 0){
        return "buzz"
        }
       if (number %3 == 0 && number %5 == 0){
        return "fizzbuzz"
>>>>>>> b37c624cd4ca5cb914289ad35db7c340f6713118
        }
        else {
            return number.toString()
        }
<<<<<<< HEAD
   
=======
   }
>>>>>>> b37c624cd4ca5cb914289ad35db7c340f6713118
}

     
module.exports = fizzbuzz;