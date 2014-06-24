// for running tests with node
var document = document || {
    write: function(str) { 
        console.log(str);
    }
};

/* This is my test runner class.
 *
 * There is one public method and that is test.
 *
 * Test takes in an algorithms object, and runs
 * through every method on that object.
 *
 * That object also needs to have an "solution" 
 * function that is neccessary for testing the 
 * algorithms correctness, it should return a 
 * correct solution for the test input.
 *
 * You also need to pass in a testingArray of
 * test cases (in the form of arrays) that the 
 * methods in the algorithms object will be called
 * on and the solution function as well.
 *
 */
function Tester() {}

Tester.prototype = {
    _testFailure: function testFailure(answer, index, nameOfAlgo, solution) {
        if(answer.toString() !== solution.toString()) {
            if(document) {
                document.write("<span class='failed'> Test " + index +": ("+ nameOfAlgo +"): " + answer + "</span><br/>");
            }
            return false;
        }
        return true;
    },
    test: function test(name, algos, testingArray) {
        var answer, 
        testPassed = true,
        passed = true, 
        solution,
        failed = [],
        that = this,
        testInput,
        answerInput;

        if (!name) {
            name = '';
        }

        document.write("<div><b>Running "+ name +" Tests<b></div> <br/>");
        for (var nameOfAlgo in algos) {
            testingArray.forEach(
                    function(element,index){
                           testInput = answerInput = element;
                        if (Object.prototype.toString.call(element) === '[object Array]') {
                           testInput = element.slice();
                           answerInput  = element.slice();
                        }
                        answer = algos[nameOfAlgo](testInput);
                        solution = algos.solution(answerInput);
                        testPassed = that._testFailure(answer, index, nameOfAlgo, solution);
                        if (!testPassed) {
                            passed = false;
                        }
                        console.log("Test "+ index +": ("+nameOfAlgo +"): \n","Original: ", element, "\n   Answer: ", answer);
                    });
            if (passed) {
                // console.log("TEST "+nameOfAlgo+": PASSED"); 
                if(document) {
                    document.write("TEST "+nameOfAlgo+": <span class='passed'>PASSED</span><br/>");
                }
            }
        } 
    document.write("<br/><br/>");
    }
};

var tester = new Tester();
