/*jshint debug: true */
/*jslint evil: true */

sortingTestingArray = [[1, 2, 3, 4, 5], [1, 2, 3, 5, 4], [1, 2, 4, 3, 5], [1, 2, 4, 5, 3], [1, 2, 5, 3, 4], [1, 2, 5, 4, 3], [1, 3, 2, 4, 5], [1, 3, 2, 5, 4], [1, 3, 4, 2, 5], [1, 3, 4, 5, 2], [1, 3, 5, 2, 4], [1, 3, 5, 4, 2], [1, 4, 2, 3, 5], [1, 4, 2, 5, 3], [1, 4, 3, 2, 5], [1, 4, 3, 5, 2], [1, 4, 5, 2, 3], [1, 4, 5, 3, 2], [1, 5, 2, 3, 4], [1, 5, 2, 4, 3], [1, 5, 3, 2, 4], [1, 5, 3, 4, 2], [1, 5, 4, 2, 3], [1, 5, 4, 3, 2], [2, 1, 3, 4, 5], [2, 1, 3, 5, 4], [2, 1, 4, 3, 5], [2, 1, 4, 5, 3], [2, 1, 5, 3, 4], [2, 1, 5, 4, 3], [2, 3, 1, 4, 5], [2, 3, 1, 5, 4], [2, 3, 4, 1, 5], [2, 3, 4, 5, 1], [2, 3, 5, 1, 4], [2, 3, 5, 4, 1], [2, 4, 1, 3, 5], [2, 4, 1, 5, 3], [2, 4, 3, 1, 5], [2, 4, 3, 5, 1], [2, 4, 5, 1, 3], [2, 4, 5, 3, 1], [2, 5, 1, 3, 4], [2, 5, 1, 4, 3], [2, 5, 3, 1, 4], [2, 5, 3, 4, 1], [2, 5, 4, 1, 3], [2, 5, 4, 3, 1], [3, 1, 2, 4, 5], [3, 1, 2, 5, 4], [3, 1, 4, 2, 5], [3, 1, 4, 5, 2], [3, 1, 5, 2, 4], [3, 1, 5, 4, 2], [3, 2, 1, 4, 5], [3, 2, 1, 5, 4], [3, 2, 4, 1, 5], [3, 2, 4, 5, 1], [3, 2, 5, 1, 4], [3, 2, 5, 4, 1], [3, 4, 1, 2, 5], [3, 4, 1, 5, 2], [3, 4, 2, 1, 5], [3, 4, 2, 5, 1], [3, 4, 5, 1, 2], [3, 4, 5, 2, 1], [3, 5, 1, 2, 4], [3, 5, 1, 4, 2], [3, 5, 2, 1, 4], [3, 5, 2, 4, 1], [3, 5, 4, 1, 2], [3, 5, 4, 2, 1], [4, 1, 2, 3, 5], [4, 1, 2, 5, 3], [4, 1, 3, 2, 5], [4, 1, 3, 5, 2], [4, 1, 5, 2, 3], [4, 1, 5, 3, 2], [4, 2, 1, 3, 5], [4, 2, 1, 5, 3], [4, 2, 3, 1, 5], [4, 2, 3, 5, 1], [4, 2, 5, 1, 3], [4, 2, 5, 3, 1], [4, 3, 1, 2, 5], [4, 3, 1, 5, 2], [4, 3, 2, 1, 5], [4, 3, 2, 5, 1], [4, 3, 5, 1, 2], [4, 3, 5, 2, 1], [4, 5, 1, 2, 3], [4, 5, 1, 3, 2], [4, 5, 2, 1, 3], [4, 5, 2, 3, 1], [4, 5, 3, 1, 2], [4, 5, 3, 2, 1], [5, 1, 2, 3, 4], [5, 1, 2, 4, 3], [5, 1, 3, 2, 4], [5, 1, 3, 4, 2], [5, 1, 4, 2, 3], [5, 1, 4, 3, 2], [5, 2, 1, 3, 4], [5, 2, 1, 4, 3], [5, 2, 3, 1, 4], [5, 2, 3, 4, 1], [5, 2, 4, 1, 3], [5, 2, 4, 3, 1], [5, 3, 1, 2, 4], [5, 3, 1, 4, 2], [5, 3, 2, 1, 4], [5, 3, 2, 4, 1], [5, 3, 4, 1, 2], [5, 3, 4, 2, 1], [5, 4, 1, 2, 3], [5, 4, 1, 3, 2], [5, 4, 2, 1, 3], [5, 4, 2, 3, 1], [5, 4, 3, 1, 2], [5, 4, 3, 2, 1]];

function SortingAlgorithms() {
    return this;
}

SortingAlgorithms.prototype = {
    solution: function sortingAlgorithmsSolution(lst) {
        lst.sort();
        return lst;
    },
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
    // mergeSort: function mergeSort(lst) { },
    mergeSortInPlace: function mergeSort(lst) {
        function merge(left, right) {
            var answer = [], winner;
            while (left.length && right.length) {
                l = left[0];
                r = right[0];
                if (l < r) {
                    winner = left;
                } else {
                    winner = right;
                }
                answer.push(winner.shift());
            }
            return answer.concat(left).concat(right);
        }

        function split(lst) {
            if (lst.length === 1) {
                return lst;
            }
            var mid = Math.floor(lst.length / 2),
                left = mergeSort(lst.slice(0,mid)),
                right = mergeSort(lst.slice(mid));
            return merge(left, right);
        }

        return split(lst);
    },
    bubbleSort: function bubbleSort(lst) {
        var len = lst.length,
        innerLen = len-1,
        outerPosition = 0,
        innerPosition = 0;
        for (; outerPosition < len; outerPosition++, innerPosition = 0, innerLen--)  {
           for(; innerPosition < innerLen; innerPosition++) {
                if (lst[innerPosition] > lst[innerPosition+1]) {
                    swap(lst, innerPosition,innerPosition+1);
                }
           }
        }
        return lst;
    },
    // *** important *** 
    // quickSort: function quickSort(lst) { },
    // heapSort: function heapSort(lst) { },
    // radixSort: function radixSort(lst) { },
    // topologicalSort: function topologicalSort(lst) { },
    // countingSort: function countingSort(lst) { },
    // shellSort: function shellSort(lst) { },
    // bucketSort: function bucketSort(lst) { },
    // bingoSort: function bingoSort(lst) { },
    // cocktailSort: function cocktailSort(lst) { },
    // combSort: function combSort(lst) { },
    // introSort: function introSort(lst) { },
    // timSort: function timSort(lst) { },
    // binaryTreeSort: function binaryTreeSort(lst) { },
    // cycleSort: function cycleSort(lst) { },
    // librarySort: function LibrarySort(lst) {},
    // patienceSorting: function PatienceSorting(lst) {},
    // smoothSort: function SmoothSort(lst) {},
    // strandSort: function StrandSort(lst) {},
    // tournamentSort: function TournamentSort(lst) {},
    // cocktailSort: function CocktailSort(lst) {},
    // combSort: function CombSort(lst) {},
    // gnomeSort: function GnomeSort(lst) {},
    // bogoSort: function BogoSort(lst) {},
};


var sorter = new SortingAlgorithms();

tester.test('Sorting', sorter, sortingTestingArray);

/*
 * Documentation:
 *
 * Resources for Algorithm Review:
 * http://www.quora.com/Computer-Science/What-are-some-concepts-algorithms-data-structures-that-every-computer-science-student-should-know
 *
 * http://en.wikipedia.org/wiki/Sorting_algorithm
 * https://github.com/nzakas/computer-science-in-javascript/
 * http://www.nczonline.net/blog/2012/10/02/computer-science-and-javascript-merge-sort/
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
 * http://davidwalsh.name/javascript-clone-array
 *
 * Insertion Sort:
 *
 * http://www.princeton.edu/~achaney/tmve/wiki100k/docs/Insertion_sort.html
 * http://en.wikibooks.org/wiki/A-level_Computing/AQA/Problem_Solving,_Programming,_Operating_Systems,_Databases_and_Networking/Programming_Concepts/Insertion_sort
 *
 * Selection Sort:
 *
 * http://en.wikipedia.org/wiki/Selection_sort
 * http://www.sorting-algorithms.com/selection-sort
 * http://stackoverflow.com/questions/15799034/insertion-sort-vs-selection-sort
 * http://www.nczonline.net/blog/2009/09/08/computer-science-in-javascript-selection-sort/
 *
 * Merge Sort:
 *
 * http://en.wikipedia.org/wiki/Merge_sort
 *
 * Quick Sort:
 *
 * http://algorithm.daqwest.com/search?search=Quicksort
 *
 * BONUS CHALLENGE:
 * Do everything both recursively and iteratively 
 */

