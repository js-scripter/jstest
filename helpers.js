module.exports.isPalindrome = function (str){
  
}

module.exports.removeDuplicates = function(array){

}

module.exports.sumToTarget = function(array , x) {

    for (i = 0; i < (array.length - 1); i++) {
        for (j = (i + 1); j < array.length; j++) {
    
            if (array[i] + array[j] == x) {
                // console.log("Pair with a given sum " + x + " is (" + array[i] + ", " + array[j] + ")");
                let output = []
                output.push(array[i])
                output.push(array[j])
                return output
            }
        }
    }

    return [];
}


