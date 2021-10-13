function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let newArry = A.sort(function(a, b) {
        return a - b;
    }).filter(element => element > 0);
    for (let i = 0; i < newArry.length -1; i++) {
        console.log(i)
    }
}

function solution(A) {
    const len = A.length;
    const hash = {};
    for (let i = 0; i < len; i++) {
        // here we are making an object with all 
        // numbers in a given array as object keys and values
        // if 0 is given as possible digit we could assing 
        // hash[A[i]] = true; or any truthy value
        hash[A[i]] = A[i];
    }
    for (let i = 1; i < 1000002; i++) {
        // here we are trying to find any number 
        // between 1 and 1000001 (given constraints) 
        // which do not exists in an object
        // if the number is not in the object that's our missing one
        if(!hash[i]) return i;
    }
    return 1;
}

function solution(A) {
    var min = 1;
    A.sort(function(a,b){
       // Sort the array explicit way
       return a - b; 
    });

    for (var i in A) {
        if (A[i] > -1 && A[i] == min) {
                min++;
        }
    }

    return min;
}