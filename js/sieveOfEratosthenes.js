// The Sieve of Eratosthenes is used to determine all of the prime numbers up to a certain point.
// It is extremely efficient at filtering out composite numbers at the beginning, but the longer
// it runs, the less efficient it becomes.

const UPPER_LIMIT = 1000;
const primes = [];
let numbers = [];

// initialize the numbers array
for (let i = 2; i < UPPER_LIMIT; i++) {
    numbers.push(i);
}

// save the next prime, then filter out multiples of it
while (numbers.length > 0) {
    let p = numbers[0];
    primes.push(p);
    numbers = numbers.filter(n => n % p !== 0);
}

console.log(primes);

// export default primes;