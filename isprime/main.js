function isPrime(num){
    let primes = [2,3]
    for (i=5;i<=num;i+=2){
        if(primes.every(function(p){return i%p;})){
            primes.push(i);
        }
    }
    if(primes.includes(num)){
        console.log('prime')
    }else{
        console.log('not prime')
    }
}
isPrime(6)