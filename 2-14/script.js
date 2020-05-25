function checkAge(age) {
  return (age > 18) ? true : confirm('Родители разрешили?');
  return accessAllowed;
};

function checkAgeOr(age) {
    return (age > 18) || confirm('Родители разрешили?');
};


function min(a, b) {
    return (a < b) ? a : b;
};

function pow(x, n) {
  if (n === 1) {
      return n;
  } else {
      let result = x;
      for (let i = n; i > 1; i--) {
          result = result * x;
      }
      return result;
  }
}

