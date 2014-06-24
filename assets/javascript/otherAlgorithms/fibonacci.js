fibTestingArray = [0,1,2,3,4,5];

function Fib() {}

Fib.prototype = {
    solution: function FibSolution(n) {
        return n < 2 ? n : this.solution(n - 1) + this.solution(n - 2);
    },
    fib: function fib(n) {
        var i;
        var fibs = [];
        fibs.push(0);
        fibs.push(1);

        for(i=0; i<n; i++){
            fibs.push(fibs[0] + fibs[1]);
            fibs.shift();
        }
        return fibs[0];

    },
    fibRecursive: function fib(n) {
        if (n === 0) {
            return 0;
        }
        if (n === 1) {
            return 1;
        }
        return (this.fibRecursive(n-1) + this.fibRecursive(n-2));
    }
};

var fib = new Fib();

tester.test('Fibonacci', fib, fibTestingArray);
