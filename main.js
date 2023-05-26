let primes = [2, 3, 5, 7, 11, 13, 17, 19, 23];
//primes = primes.reverse();
const quantity = 170;

function delay(time) {
    //TODO -- MAKE THE LOOP DELAY EVERY ITERATION
    //https://masteringjs.io/tutorials/fundamentals/wait-1-second-then#:~:text=To%20delay%20a%20function%20execution,call%20fn%20after%201%20second.
    return new Promise(resolve => setTimeout(resolve, time));
}

function loopThroughPrimes(n) {
    if (primes.includes(n)) {
        return;
    }
    for (let index = 0; index < primes.length; index++) {
        let p = primes[index];
        console.log(p);
        if (n % p == 0) {
            console.log(n, p);
            document.querySelector(`#n${n}`).classList.add(`mult${p}`, 'composite');
            return;
        }
    }
}

for (let index = 2; index < quantity; index++) {
    delay(1000).then(() => console.log('ran after 1 second passed'));
    document.querySelector(`#n${index}`).textContent = index;
    loopThroughPrimes(index);
}
