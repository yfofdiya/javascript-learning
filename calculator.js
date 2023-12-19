const sum = (a, b) => {
    return a+b;
};

const sub = (a, b) => {
    return Math.abs(a, b);
};

const mul = (a, b) => {
    return a * b;
};

const div = (a, b) => {
    return a / b;
};

const mod = (a, b) => {
    return a % b;
};

const calculator = (num1, num2, opeartor) => {
    return opeartor(num1, num2);
}

console.log(calculator(3, 2, mod));