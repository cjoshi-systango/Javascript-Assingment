function bin_to_dec(bstr) { 
    return parseInt((bstr + '')
    .replace(/[^01]/gi, ''), 2);
}
console.log(bin_to_dec('1010'));
console.log(bin_to_dec('100110'));
