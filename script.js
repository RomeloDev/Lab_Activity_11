function task1(){
    let result = "";
    console.log("Fucking Output:\n");
    for (let i = 1; i <= 10; i++) {
        result += i + "\n";
    }
    console.log(result);
    alert("Output:\n"+result);
}

function task2(){
    let n = parseInt(prompt("Enter a number N:"));
    let sum = 0;

    for (let i = 1; i <= n; i++) {
        sum += i;
    }

    alert("The sum of numbers from 1 to " + n + " is a Fucking number: " + sum);
    console.log("The sum of numbers from 1 to " + n + " is: " + sum);
}

function task3(){
    let resultLog = "Even numbers from 1 to 20:\n";
    for (let i = 2; i <= 20; i += 2) {
        resultLog += i + "\n";
    }

    console.log(resultLog);
    alert(resultLog);
}

function task4(){
    let n = parseInt(prompt("Enter a number N:"));

    let pattern = "";
    for (let i = 1; i <= n; i++) {
        pattern += "*".repeat(i) + "\n"; 
    }

    console.log("Fucking Output\n" + pattern);
    alert(pattern);
}

function task5(){
    let n = parseInt(prompt("Enter a number N:"));
    let factorial = 1;
    for (let i = 1; i <= n; i++) {
        factorial *= i;
    }

    alert("The factorial of " + n + " is: " + factorial);
    console.log("The factorial of " + n + " is: " + factorial);
}

function task6() {
    let n = parseInt(prompt("Enter a number N:"));
    let isPrime = true;

    if (n < 2) {
        isPrime = false;
    } else {
        for (let i = 2; i <= Math.sqrt(n); i++) {
            if (n % i === 0) {
                isPrime = false;
                break;
            }
        }
    }

    if (isPrime) {
        alert(n + " is a prime number.");
    } else {
        alert(n + " is not a prime number.");
    }
    console.log(n + " is " + (isPrime ? "a prime number." : "not a prime number."));
}

