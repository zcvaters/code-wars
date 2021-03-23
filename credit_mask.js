// return masked string
function maskify(cc) {
    let ccLen = cc.length;
    let ccSplit = cc.split("");
    for(let digit = 0; digit < ccLen; digit++) {
        if(ccLen-digit > 4) {
            ccSplit[digit] = '#';
        }
    }
    ccSplit = ccSplit.join("");
    return ccSplit;
}

maskify('4556364607935616')
maskify('1')
maskify('11111')