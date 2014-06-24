var Q = require('q'); 
var U= require('underscore');
var nums = [100,10,9,8,7,6,5,4,3,2,1,99,99,40,92];
var sortedNums = [];

// http://rosettacode.org/wiki/Sorting_algorithms/Sleep_sort#JavaScript

function sleepSort(arr,helper,solutionArray) {
    var len = arr.length,
        num,
        funcs = {},
        deferred = Q.defer(),
        result = deferred.promise,
        maxNum = -Infinity;

    while (len--) {
        num = arr[len];
        if (num > maxNum) {
            maxNum = num; 
        }
        funcs[num] = helper.bind(null, num, solutionArray);
    }

    U.each(funcs, function (element, index) {
        if (index == maxNum) {
            element(deferred);
        } else {
            element();
        }
    });
    return deferred.promise;
}

function sleepSortHelper(num,solutionArray, defer) {
    setTimeout(function() {
        solutionArray.push(num); 
        if (defer) {
            defer.resolve(); 
        }
    },num);
}

var answer = sleepSort(nums,sleepSortHelper,sortedNums).thenResolve(sortedNums);

return answer.then( function() { console.log(answer.inspect()) });

