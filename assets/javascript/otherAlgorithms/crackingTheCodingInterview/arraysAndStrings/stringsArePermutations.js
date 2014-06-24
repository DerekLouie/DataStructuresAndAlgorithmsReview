// Given two strings, determine if they are permutations of eachother 

StringsArePermutationsTestingArray = [['aaa','aaa'],['abc','bac'],['aaa','axa'],['cii','aaa']];

function StringsArePermutations() {}

StringsArePermutations.prototype  = {
    solution: function StringsArePermutationsSolution(strings) {
        if (strings[0].split('').sort().join('') === strings[1].split('').sort().join('')){
            return true;
        } else {
            return false;
        }

    },
    // runtime: o(2n), space: o(n);
    StringsArePermutations: function StringsArePermutations(strings) {
        var str1 = strings[0],
        str2 = strings[1],
        str1len = str1.length,
        str2len = str2.length,
        letter,
        lettersEntry;

        if (str1len !== str2len) {
            return false;
        }
        var letters = {};
        // iterate through the first string and record every occurance
        // of each letter 
        while(str1len--) {
            letter = str1[str1len];
            if (!letters[letter]) { 
                letters[letter] = 1; 
            } else {
                letters[letter] += 1;
            }
        }

        str1len = str2len;
        
        // we remove letters from the dictionary,
        // if we don't remove the letters in the correct number
        // we know we don't have a permutation
          
        while(str2len--) {
            letter = str2[str2len];
            lettersEntry = letters[letter];
            if (lettersEntry) {
                if (lettersEntry > 0) {
                    letters[letter] -= 1;
                    str1len--;
                } else {
                    return false;
                }
            } else {
                return false;
            }
        }
        return !str1len;
    }
};


var stringsArePermutations = new StringsArePermutations();

tester.test('Cracking the Coding Interview: Arrays and Strings - Determine of two strings are permutations of eachother', stringsArePermutations, StringsArePermutationsTestingArray);

