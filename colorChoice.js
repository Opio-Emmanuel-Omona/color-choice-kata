function checkchoose(m, n) {
  if (m == 0) return n;
  
  var x = 1;
  for (; (n-x)>=1; x++) {
    if (m == Math.round(factorial(n)/(factorial(x) * factorial(n - x)))) {
      return x;
    }
  }
  return -1;
}

function factorial(n) {
  var result = 1;
  var i = 1;
  for (; i<=n; i++) {
    result *= i;
  }
  return result;
}
