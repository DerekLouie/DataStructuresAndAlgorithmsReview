// Write a function that determines if a string has all unique characters

stringIsUniqueTestingArray = ['aaaa','abcd','a',''];

function StringIsUnique() {}

StringIsUnique.prototype  = {
    solution: function StringIsUniqueSolution(str) {
        str = str.split('').sort();
        var len = str.length;
        while((len--)-1 >= 0){
            if (str[len] === str[len-1]) {
                return false;
            }
        }
        return true;
    },
    stringIsUnique: function stringIsUnique(str) {
        var seen = {},
        len = str.length,
        letter;

        while(len--) {
           letter = str.charAt(len);
           if (seen[letter]) {
               return false;
           } else {
               seen[letter] = 1;
           }
        }
        return true;
    },
    // the trick to a better runtime is not to compare a character after
    // its already been touched.
    stringIsUniqueNoAdditionalDs: function stringIsUniqueNoAdditionalDs(str) {
        var len = str.length,
        outerEnd = len,
        innerStart = 1,
        outerStart = 0,
        letter;
        for(; outerStart < len; outerStart++, innerStart = (outerStart + 1)) {
           letter = str.charAt(outerStart);
           for(; innerStart < len-1; innerStart++) {
                if (letter === str.charAt(innerStart)) {
                    return false;
                }
           }
        }
        return true;
    }
};


var stringIsUnique = new StringIsUnique();

tester.test('Cracking the Coding Interview: Arrays and Strings - Determine if a string is composed of all unique characters', stringIsUnique, stringIsUniqueTestingArray);

