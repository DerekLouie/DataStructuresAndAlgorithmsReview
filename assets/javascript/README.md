#Supplementary notes
--

http://algorithm.daqwest.com/#Dynamic

http://matt.might.net/articles/what-cs-majors-should-know/

http://www.quora.com/Computer-Science/What-are-some-concepts-algorithms-data-structures-that-every-computer-science-student-should-know

More important than algorithms(just problems #$!%), the techniques/concepts residing at the base of such algorithms is more important.

There are broadly 4 ways in which classification of algorithms can be done.

Classification by purpose

Each algorithm has a goal, for example, the purpose of the Quick Sort algorithm is to sort data in ascending or descending order. But the number of goals is infinite, and we have to group them by kind of purposes.

2.  Classification by implementation
Recursive or iterative
A recursive algorithm is one that calls itself repeatedly until a certain condition matches. It is a method common to functional programming. 
For example, the towers of hanoi problem is well understood in recursive implementation. Every recursive version has an iterative equivalent iterative, and vice versa.
Logical or procedural
An algorithm may be viewed as controlled logical deduction. 
A logic component expresses the axioms which may be used in the computation and a control component determines the way in which deduction is applied to the axioms.
Serial or parallel                                                                                Algorithms are usually discussed with the assumption that computers execute one instruction of an algorithm at a time. This is a serial algorithm, as opposed to parallel algorithms, which take advantage of computer architectures to process several instructions at once. Sorting algorithms can be parallelized efficiently.
Deterministic or non-deterministic
Deterministic algorithms solve the problem with a predefined process whereas non-deterministic algorithm must perform guesses of best solution at each step through the use of heuristics.

3.   Classification by design paradigm

Divide and conquer
A divide and conquer algorithm repeatedly reduces an instance of a problem to one or more smaller instances of the same problem (usually recursively), until the instances are small enough to solve easily. One such example of divide and conquer is merge sorting. The binary search algorithm is an example of a variant of divide and conquer called decrease and conquer algorithm, that solves an identical subproblem and uses the solution of this subproblem to solve the bigger problem. 
 
Dynamic programming
The shortest path in a weighted graph can be found by using the shortest path to the goal from all adjacent vertices. 
When the optimal solution to a problem can be constructed from optimal solutions to subproblems, using dynamic programming avoids recomputing solutions that have already been computed. 
- The main difference with the "divide and conquer" approach is, subproblems are independent in divide and conquer, where as the overlap of subproblems occur in dynamic programming. 
- Dynamic programming and memoization go together. The difference with straightforward recursion is in caching or memoization of recursive calls. Where subproblems are independent, this is useless. By using memoization or maintaining a table of subproblems already solved, dynamic programming reduces the exponential nature of many problems to polynomial complexity.
 
The greedy method
A greedy algorithm is similar to a dynamic programming algorithm, but the difference is that solutions to the subproblems do not have to be known at each stage. Instead a "greedy" choice can be made of what looks the best solution for the moment. 
The most popular greedy algorithm is finding the minimal spanning tree as given by Kruskal.
 
Linear programming
The problem is expressed as a set of linear inequalities and then an attempt is made to maximize or minimize the inputs. This can solve many problems such as the maximum flow for directed graphs, notably by using the simplex algorithm. 
A complex variant of linear programming is called integer programming, where the solution space is restricted to all integers.
 
Reduction also called transform and conquer
Solve a problem by transforming it into another problem. A simple example:finding the median in an unsorted list is first translating this problem into sorting problem and finding the middle element in sorted list. The main goal of reduction is finding the simplest transformation possible.
 
Using graphs
Many problems, such as playing chess, can be modeled as problems on graphs. A graph exploration algorithms are used. 
This category also includes the search algorithms and backtracking.
 
The probabilistic and heuristic paradigm 

Probabilistic 
Those that make some choices randomly.
Genetic 
Attempt to find solutions to problems by mimicking biological evolutionary processes, with a cycle of random mutations yielding successive generations of "solutions". Thus, they emulate reproduction and "survival of the fittest".
Heuristic 
Whose general purpose is not to find an optimal solution, but an approximate solution where the time or resources to find a perfect solution are not practical.﻿

https://en.wikipedia.org/wiki/Bloom_filter
