function calculateNumber(type, a, b) {
    const round_a = Math.round(a);
    const round_b = Math.round(b);

    if (type === "SUM") {
        return round_a + round_b;
    } else if (type === "SUBTRACT") {
        return round_a - round_b;
    } else if (type === "DIVIDE") {
        if (round_b === 0) {
            return "Error";
        }
        return round_a / round_b;
    } else {
        throw new Error("Wrong calculation type!!");
    }
}

module.exports = calculateNumber;
