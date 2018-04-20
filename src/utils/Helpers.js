export function getRandomInteger(selection) {
    let len = selection.size;
    let idx = Math.floor(Math.random() * len);
    let arr = [...selection];
    return arr[idx];
}

// adds leading zeros digitNumbers times to number
export function appendDigits(digits, n, additionalText) {
    let value = additionalText ? additionalText + " " : "";
    let nstr = n.toString();
    let len = Math.abs(digits - nstr.length);

    for(let i = 0; i < len; i++) {
        value += "0";
    }

    value += nstr;
    return value;
}