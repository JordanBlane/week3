const isPrime = num => {
    if (num == 1) {
      return false;
    }
    if (num == 2) {
      return true;
    }
    for (i = 3; i < num; i += 2) {
      console.log(num + "/" + i + "= " + num / i + " rem " + (num % i));
      if (num % i == 0) {
        return false;
      }
    }
    return true;
  };
  let result = isPrime(95);
  console.log(result);