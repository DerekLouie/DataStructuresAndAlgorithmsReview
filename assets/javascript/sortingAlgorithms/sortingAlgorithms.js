testingArray = [[1, 2, 3, 4, 5], [1, 2, 3, 5, 4], [1, 2, 4, 3, 5], [1, 2, 4, 5, 3], [1, 2, 5, 3, 4], [1, 2, 5, 4, 3], [1, 3, 2, 4, 5], [1, 3, 2, 5, 4], [1, 3, 4, 2, 5], [1, 3, 4, 5, 2], [1, 3, 5, 2, 4], [1, 3, 5, 4, 2], [1, 4, 2, 3, 5], [1, 4, 2, 5, 3], [1, 4, 3, 2, 5], [1, 4, 3, 5, 2], [1, 4, 5, 2, 3], [1, 4, 5, 3, 2], [1, 5, 2, 3, 4], [1, 5, 2, 4, 3], [1, 5, 3, 2, 4], [1, 5, 3, 4, 2], [1, 5, 4, 2, 3], [1, 5, 4, 3, 2], [2, 1, 3, 4, 5], [2, 1, 3, 5, 4], [2, 1, 4, 3, 5], [2, 1, 4, 5, 3], [2, 1, 5, 3, 4], [2, 1, 5, 4, 3], [2, 3, 1, 4, 5], [2, 3, 1, 5, 4], [2, 3, 4, 1, 5], [2, 3, 4, 5, 1], [2, 3, 5, 1, 4], [2, 3, 5, 4, 1], [2, 4, 1, 3, 5], [2, 4, 1, 5, 3], [2, 4, 3, 1, 5], [2, 4, 3, 5, 1], [2, 4, 5, 1, 3], [2, 4, 5, 3, 1], [2, 5, 1, 3, 4], [2, 5, 1, 4, 3], [2, 5, 3, 1, 4], [2, 5, 3, 4, 1], [2, 5, 4, 1, 3], [2, 5, 4, 3, 1], [3, 1, 2, 4, 5], [3, 1, 2, 5, 4], [3, 1, 4, 2, 5], [3, 1, 4, 5, 2], [3, 1, 5, 2, 4], [3, 1, 5, 4, 2], [3, 2, 1, 4, 5], [3, 2, 1, 5, 4], [3, 2, 4, 1, 5], [3, 2, 4, 5, 1], [3, 2, 5, 1, 4], [3, 2, 5, 4, 1], [3, 4, 1, 2, 5], [3, 4, 1, 5, 2], [3, 4, 2, 1, 5], [3, 4, 2, 5, 1], [3, 4, 5, 1, 2], [3, 4, 5, 2, 1], [3, 5, 1, 2, 4], [3, 5, 1, 4, 2], [3, 5, 2, 1, 4], [3, 5, 2, 4, 1], [3, 5, 4, 1, 2], [3, 5, 4, 2, 1], [4, 1, 2, 3, 5], [4, 1, 2, 5, 3], [4, 1, 3, 2, 5], [4, 1, 3, 5, 2], [4, 1, 5, 2, 3], [4, 1, 5, 3, 2], [4, 2, 1, 3, 5], [4, 2, 1, 5, 3], [4, 2, 3, 1, 5], [4, 2, 3, 5, 1], [4, 2, 5, 1, 3], [4, 2, 5, 3, 1], [4, 3, 1, 2, 5], [4, 3, 1, 5, 2], [4, 3, 2, 1, 5], [4, 3, 2, 5, 1], [4, 3, 5, 1, 2], [4, 3, 5, 2, 1], [4, 5, 1, 2, 3], [4, 5, 1, 3, 2], [4, 5, 2, 1, 3], [4, 5, 2, 3, 1], [4, 5, 3, 1, 2], [4, 5, 3, 2, 1], [5, 1, 2, 3, 4], [5, 1, 2, 4, 3], [5, 1, 3, 2, 4], [5, 1, 3, 4, 2], [5, 1, 4, 2, 3], [5, 1, 4, 3, 2], [5, 2, 1, 3, 4], [5, 2, 1, 4, 3], [5, 2, 3, 1, 4], [5, 2, 3, 4, 1], [5, 2, 4, 1, 3], [5, 2, 4, 3, 1], [5, 3, 1, 2, 4], [5, 3, 1, 4, 2], [5, 3, 2, 1, 4], [5, 3, 2, 4, 1], [5, 3, 4, 1, 2], [5, 3, 4, 2, 1], [5, 4, 1, 2, 3], [5, 4, 1, 3, 2], [5, 4, 2, 1, 3], [5, 4, 2, 3, 1], [5, 4, 3, 1, 2], [5, 4, 3, 2, 1]];
answer = [1,2,3,4,5];

function SortingAlgorithms() {
    return this;
}

// Convenience function
function swap(arr, index1, index2) {
    dummy = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = dummy;
}
// http://en.wikipedia.org/wiki/Sorting_algorithm
SortingAlgorithms.prototype = {
    // Insertion sort: http://www.princeton.edu/~achaney/tmve/wiki100k/docs/Insertion_sort.html
    // http://en.wikibooks.org/wiki/A-level_Computing/AQA/Problem_Solving,_Programming,_Operating_Systems,_Databases_and_Networking/Programming_Concepts/Insertion_sort
    insertionSort: function insertionSort(lst) { 
        var len = lst.length,
        index,
        currIndex = 0,
        dummy;
        for (index = 0; index < len; index++) {
            dummy = lst[index];
            while (currIndex < index) {
                if (lst[currIndex] > dummy){
                    lst.splice(index,1);
                    lst.splice(currIndex,0,dummy);
                    break;
                }
                currIndex++;
            }
            currIndex = 0;
        }
        return lst;
    },
    //http://en.wikipedia.org/wiki/Selection_sort
    //http://www.sorting-algorithms.com/selection-sort
    //http://stackoverflow.com/questions/15799034/insertion-sort-vs-selection-sort
    //http://www.nczonline.net/blog/2009/09/08/computer-science-in-javascript-selection-sort/
    selectionSort: function selectionSort(lst) { 
        var index = 0,
        len = lst.length,
        currIndex,
        min,
        minIndex = 0;
        while(index < len) {
            minIndex = index;
            for(currIndex = index; currIndex < len; currIndex++) {
                if(lst[currIndex] < lst[minIndex]) {
                    minIndex = currIndex;
                }
            }
            swap(lst, index, minIndex);
            index++;
        }
        return lst;
    },
    // bingoSort: function bingoSort(lst) { },
    // cocktailSort: function cocktailSort(lst) { },
    // mergeSort: function mergeSort(lst) { },
    // heapSort: function heapSort(lst) { },
    // quickSort: function quickSort(lst) { },
    // bubbleSort: function bubbleSort(lst) { },
    // shellSort: function shellSort(lst) { },
    // combSort: function combSort(lst) { },
    // countingSort: function countingSort(lst) { },
    // bucketSort: function bucketSort(lst) { },
    // radixSort: function radixSort(lst) { },
}

var sorter = new SortingAlgorithms();

console.log("Running Sorting Algorithms");

tester.test(sorter);
