var countBits = function(n) {
    let bits = 0;
    while(n != 0) {
      let remainder = n%2;
      if(remainder == 0) {
        n = (n/2>>0);
      }
      else {
        bits++;
        n = (n/2>>0);
      }
    }
    return bits;
  };


console.log(countBits(0));
console.log(countBits(4));
console.log(countBits(7));
console.log(countBits(9));
console.log(countBits(10));