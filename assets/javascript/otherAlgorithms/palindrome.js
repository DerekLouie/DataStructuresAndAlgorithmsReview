palindromeTestingArray = ['kkxkk','asfdasfda','','a'];

function Palindrome() {
    return {
        solution: function isPalindromeSolution(str) {
            return str == str.split('').reverse().join('');
        },
        isPalindrome: function isPalindrome(str) {

            var beginning = 0,
            end = str.length-1;

            while (beginning < end) {
                if (str.charAt(beginning++) != str.charAt(end--)) {
                    return false;
                }
            }

            return true;
        }
    };
}
var palindrome = new Palindrome();

tester.test('Palindromes', palindrome, palindromeTestingArray);

/* 
 * http://stackoverflow.com/questions/14813369/palindrome-check-in-javascript
 * http://jsperf.com/is-palindrome/3
 */
