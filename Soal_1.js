function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}
function displayPrimes() {
    const primes = [];
    for (let i = 0; i <= 1000; i++) {
        if (isPrime(i)) {
            primes.push(i);
        }
    }
    console.log("Bilangan prima dari 0 sampai 1000 adalah:");
    console.log(primes.join(", "));
}
displayPrimes();
