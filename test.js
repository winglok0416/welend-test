const q1 = (arr) => arr.filter(element => typeof element != 'string');

// Assume the input array must follow the format in the description and 'n' is a non-negative number
const q2 = (arr) => {
    const outputSize = arr[0];
    const outputArr = arr.slice(1, outputSize + 1);
    if (outputSize <= 2) return outputArr;

    const inverseSize = outputArr.length - 2;
    for (let i = 1; i <= inverseSize / 2; i++) {
        const temp = outputArr[i];
        outputArr[i] = outputArr[outputArr.length - 1 - i];
        outputArr[outputArr.length - 1 - i] = temp;
    }

    return outputArr;
}

function main() {
    const q1Input = [1, 3, 'a', 'b', 4, 7];
    const q2Input = [5, 'a', 'b', 'c', 'd', 'e', 'f', 'g'];

    const q1Output = q1(q1Input);
    console.log(q1Output);

    const q2Output = q2(q2Input);
    console.log(q2Output);
}

main();