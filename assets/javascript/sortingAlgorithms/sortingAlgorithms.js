sortingTestingArray = [[1, 2, 3, 4, 5], [1, 2, 3, 5, 4], [1, 2, 4, 3, 5], [1, 2, 4, 5, 3], [1, 2, 5, 3, 4], [1, 2, 5, 4, 3], [1, 3, 2, 4, 5], [1, 3, 2, 5, 4], [1, 3, 4, 2, 5], [1, 3, 4, 5, 2], [1, 3, 5, 2, 4], [1, 3, 5, 4, 2], [1, 4, 2, 3, 5], [1, 4, 2, 5, 3], [1, 4, 3, 2, 5], [1, 4, 3, 5, 2], [1, 4, 5, 2, 3], [1, 4, 5, 3, 2], [1, 5, 2, 3, 4], [1, 5, 2, 4, 3], [1, 5, 3, 2, 4], [1, 5, 3, 4, 2], [1, 5, 4, 2, 3], [1, 5, 4, 3, 2], [2, 1, 3, 4, 5], [2, 1, 3, 5, 4], [2, 1, 4, 3, 5], [2, 1, 4, 5, 3], [2, 1, 5, 3, 4], [2, 1, 5, 4, 3], [2, 3, 1, 4, 5], [2, 3, 1, 5, 4], [2, 3, 4, 1, 5], [2, 3, 4, 5, 1], [2, 3, 5, 1, 4], [2, 3, 5, 4, 1], [2, 4, 1, 3, 5], [2, 4, 1, 5, 3], [2, 4, 3, 1, 5], [2, 4, 3, 5, 1], [2, 4, 5, 1, 3], [2, 4, 5, 3, 1], [2, 5, 1, 3, 4], [2, 5, 1, 4, 3], [2, 5, 3, 1, 4], [2, 5, 3, 4, 1], [2, 5, 4, 1, 3], [2, 5, 4, 3, 1], [3, 1, 2, 4, 5], [3, 1, 2, 5, 4], [3, 1, 4, 2, 5], [3, 1, 4, 5, 2], [3, 1, 5, 2, 4], [3, 1, 5, 4, 2], [3, 2, 1, 4, 5], [3, 2, 1, 5, 4], [3, 2, 4, 1, 5], [3, 2, 4, 5, 1], [3, 2, 5, 1, 4], [3, 2, 5, 4, 1], [3, 4, 1, 2, 5], [3, 4, 1, 5, 2], [3, 4, 2, 1, 5], [3, 4, 2, 5, 1], [3, 4, 5, 1, 2], [3, 4, 5, 2, 1], [3, 5, 1, 2, 4], [3, 5, 1, 4, 2], [3, 5, 2, 1, 4], [3, 5, 2, 4, 1], [3, 5, 4, 1, 2], [3, 5, 4, 2, 1], [4, 1, 2, 3, 5], [4, 1, 2, 5, 3], [4, 1, 3, 2, 5], [4, 1, 3, 5, 2], [4, 1, 5, 2, 3], [4, 1, 5, 3, 2], [4, 2, 1, 3, 5], [4, 2, 1, 5, 3], [4, 2, 3, 1, 5], [4, 2, 3, 5, 1], [4, 2, 5, 1, 3], [4, 2, 5, 3, 1], [4, 3, 1, 2, 5], [4, 3, 1, 5, 2], [4, 3, 2, 1, 5], [4, 3, 2, 5, 1], [4, 3, 5, 1, 2], [4, 3, 5, 2, 1], [4, 5, 1, 2, 3], [4, 5, 1, 3, 2], [4, 5, 2, 1, 3], [4, 5, 2, 3, 1], [4, 5, 3, 1, 2], [4, 5, 3, 2, 1], [5, 1, 2, 3, 4], [5, 1, 2, 4, 3], [5, 1, 3, 2, 4], [5, 1, 3, 4, 2], [5, 1, 4, 2, 3], [5, 1, 4, 3, 2], [5, 2, 1, 3, 4], [5, 2, 1, 4, 3], [5, 2, 3, 1, 4], [5, 2, 3, 4, 1], [5, 2, 4, 1, 3], [5, 2, 4, 3, 1], [5, 3, 1, 2, 4], [5, 3, 1, 4, 2], [5, 3, 2, 1, 4], [5, 3, 2, 4, 1], [5, 3, 4, 1, 2], [5, 3, 4, 2, 1], [5, 4, 1, 2, 3], [5, 4, 1, 3, 2], [5, 4, 2, 1, 3], [5, 4, 2, 3, 1], [5, 4, 3, 1, 2], [5, 4, 3, 2, 1]];

function SortingAlgorithms() { }

SortingAlgorithms.prototype = {
    solution: function sortingAlgorithmsSolution(list) {
        list.sort();
        return list;
    },
    insertionSort: function insertionSort(list) {
        var len = list.length,
        index,
        currIndex = 0,
        dummy;
        for (index = 0; index < len; index++) {
            dummy = list[index];
            while (currIndex < index) {
                if (list[currIndex] > dummy){
                    list.splice(index,1);
                    list.splice(currIndex,0,dummy);
                    break;
                }
                currIndex++;
            }
            currIndex = 0;
        }
        return list;
    },
    selectionSort: function selectionSort(list) {
        var index = 0,
        len = list.length,
        currIndex,
        min,
        minIndex = 0;
        while(index < len) {
            minIndex = index;
            for(currIndex = index; currIndex < len; currIndex++) {
                if(list[currIndex] < list[minIndex]) {
                    minIndex = currIndex;
                }
            }
            swap(list, index, minIndex);
            index++;
        }
        return list;
    },
    // mergeSort: function mergeSort(list) { },
    mergeSortInPlace: function mergeSort(list) {
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

        function split(list) {
            if (list.length === 1) {
                return list;
            }
            var mid = Math.floor(list.length / 2),
                left = mergeSort(list.slice(0,mid)),
                right = mergeSort(list.slice(mid));
            return merge(left, right);
        }

        return split(list);
    },
    bubbleSort: function bubbleSort(list) {
        var len = list.length,
        innerLen = len-1,
        outerPosition = 0,
        innerPosition = 0;
        for (; outerPosition < len; outerPosition++, innerPosition = 0, innerLen--)  {
           for(; innerPosition < innerLen; innerPosition++) {
                if (list[innerPosition] > list[innerPosition+1]) {
                    swap(list, innerPosition,innerPosition+1);
                }
           }
        }
        return list;
    },
    // *** important *** 
    // quickSort: function quickSort(list) { },
    // heapSort: function heapSort(list) { },
    // radixSort: function radixSort(list) { },
    // topologicalSort: function topologicalSort(list) { },
    // countingSort: function countingSort(list) { },
    // shellSort: function shellSort(list) { },
    // bucketSort: function bucketSort(list) { },
    // bingoSort: function bingoSort(list) { },
    // cocktailSort: function cocktailSort(list) { },
    // combSort: function combSort(list) { },
    // introSort: function introSort(list) { },
    // timSort: function timSort(list) { },
    // binaryTreeSort: function binaryTreeSort(list) { },
    // cycleSort: function cycleSort(list) { },
    // librarySort: function LibrarySort(list) {},
    // patienceSorting: function PatienceSorting(list) {},
    // smoothSort: function SmoothSort(list) {},
    // strandSort: function StrandSort(list) {},
    // tournamentSort: function TournamentSort(list) {},
    // cocktailSort: function CocktailSort(list) {},
    // combSort: function CombSort(list) {},
    // gnomeSort: function GnomeSort(list) {},
    // bogoSort: function BogoSort(list) {},
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
