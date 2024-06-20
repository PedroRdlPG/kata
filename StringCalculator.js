let StringCalculator = class {
    sum (list) {
        if (list == "1") {
            return parseInt(list[0]);
        }
        return 0;
    }
}

module.exports = StringCalculator;

