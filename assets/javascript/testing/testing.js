// for running tests with node
var document = document || 0;

var sorted, nameOfAlgo, failed = [], passed;

function SortingTester() {}

SortingTester.prototype = {
    test: function test(algos) {
        for (nameOfAlgo in algos) {
            testingArray.forEach(
                    function(element,index){
                        sorted = algos[nameOfAlgo](element.slice(0));
                        passed = true;
                        // console.log("Test "+ index +": ("+nameOfAlgo +"): \n","Original: ", element, "\n   Answer: ", sorted);
                        if(sorted.toString() !== answer.toString()) {
                            console.log("TEST FAILED"); 
                            failed.push("Test "+ index +": ("+ nameOfAlgo +")");
                            passed = false;
                        }
                    });
            if (passed) {
                console.log("TEST "+nameOfAlgo+": PASSED"); 
                if(document) {
                    document.write("TEST "+nameOfAlgo+": <span class='passed'>PASSED</span><br/>")
                }
            }
        } 
        if(failed.length){
            console.log("\n\n\nFAILED TESTS: \n");
            failed.forEach(function(element) {
                console.log(element);
                if(document) {
                    document.write("<span class='failed'>" + element + "</span><br/>");
                }
            });
        }
    }
}

var tester = new SortingTester();
