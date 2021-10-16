input1 = "1101000 1000001 1110010 1101001 1110000 1110010 1101001 1111001 1100001 110001 100011 110110 110111 110011 110100"
input2 = "1001010 1110111 1000101 1010010 1100100 1100111 110010 110000 110000 110001 100011"

binString1 = ''
binString2 = ''

input1.split(' ').map(function(bin) {
    binString1 += String.fromCharCode(parseInt(bin, 2));
});

input2.split(' ').map(function(bin) {
  binString2 += String.fromCharCode(parseInt(bin, 2));
});

console.log(binString1)
console.log(binString2)
